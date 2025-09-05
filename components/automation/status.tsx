import { useEffect, useState } from 'react';

export default function AutomationStatusPage() {
  const [status, setStatus] = useState<{ runAt?: string; ok?: boolean } | null>(null);

  useEffect(() => {
    fetch('/automation/status.json')
      .then((r) => r.json())
      .then((j) => setStatus(j))
      .catch(() => setStatus(null));
  }, []);

  return (
    <div className=&quot;space-y-4&quot;>
      <h1 className=&quot;text-xl font-semibold&quot;>Autonomous Automation Status</h1>
      {status ? (
        <div className=&quot;rounded-lg border p-4 text-sm&quot;>
          <div>Last Run: {new Date(status.runAt || '').toLocaleString() || '—'}</div>
          <div>Health: {status.ok ? 'OK' : 'Unknown'}</div>
          <div className=&quot;mt-2&quot;><a className=&quot;underline&quot; href=&quot;/metrics/latest.json&quot;>View latest metrics JSON</a></div>
        </div>
      ) : (
        <div className=&quot;text-sm text-gray-500&quot;>No status available yet.</div>
      )}
    </div>
  );
}