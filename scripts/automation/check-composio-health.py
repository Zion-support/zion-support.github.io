"""Read-only connection inventory using a project API key, never user-key login."""
import collections
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

def collect(key, opener=urllib.request.urlopen):
    counts = collections.Counter()
    by_toolkit = {}
    cursor = None
    seen = set()
    for page in range(100):
        query = {'limit': 100}
        if cursor:
            query['cursor'] = cursor
        url = 'https://backend.composio.dev/api/v3.1/connected_accounts?' + urllib.parse.urlencode(query)
        request = urllib.request.Request(url, headers={'x-api-key': key, 'Accept': 'application/json'})
        try:
            with opener(request, timeout=30) as response:
                payload = json.load(response)
        except urllib.error.HTTPError as error:
            raise RuntimeError(f'Composio project API returned HTTP {error.code}; verify COMPOSIO_API_KEY project credentials.') from None
        if not isinstance(payload.get('items'), list):
            raise ValueError('Invalid Composio connected_accounts response')
        for account in payload['items']:
            status = str(account.get('status', 'UNKNOWN')).upper()
            toolkit = account.get('toolkit', {}).get('slug', 'unknown')
            counts[status] += 1
            by_toolkit.setdefault(toolkit, collections.Counter())[status] += 1
        cursor = payload.get('next_cursor')
        if not cursor:
            return {'checkedAt': datetime.now(timezone.utc).isoformat(), 'scope': 'Project connections visible to COMPOSIO_API_KEY',
                    'total': sum(counts.values()), 'statuses': dict(counts),
                    'toolkits': {name:dict(values) for name,values in sorted(by_toolkit.items())}}
        if cursor in seen:
            raise ValueError('Composio pagination cursor repeated')
        seen.add(cursor)
    raise ValueError('Composio pagination limit reached')

def main():
    key = os.environ.get('COMPOSIO_API_KEY')
    if not key:
        raise ValueError('COMPOSIO_API_KEY is not set')
    report = collect(key)
    target = Path('automation/reports/composio-health-latest.json')
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(report))
    problems = sum(report['statuses'].get(status,0) for status in ['EXPIRED','FAILED','REVOKED'])
    if problems:
        print(f'::warning::{problems} connections require attention; see inventory status counts.')

if __name__ == '__main__':
    try:
        main()
    except (ValueError, RuntimeError, urllib.error.URLError, TimeoutError) as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
