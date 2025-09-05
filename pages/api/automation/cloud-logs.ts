import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

async function fetchFromGitHub(): Promise<any[]> {_try {
    const _repoUrl = require('../../../package.json').repository?.url || '';
    const _match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const _owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const _repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!owner || !repo) return [];
    const _apiUrl = `https://api.github.com/repos/${owner}/${_repo}/contents/automation_logs`;
    const headers: Record<string, string> = {_'User-Agent': 'zion-autonomy'};
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${_process.env.GITHUB_TOKEN}`;
    const _resp = await fetch(apiUrl, {_headers});
    if (!resp.ok) return [];
    const _files = (await resp.json()) as Array<{_name: string; download_url: string; type: string}>;
    const _jsonFiles = files.filter(_(f) => f.type === 'file' && f.name.endsWith('.json'));
    const results: unknown[] = [];
    for (const f of jsonFiles.slice(-50).reverse()) {_try {
        const _r = await fetch(f.download_url, _{ headers});
        if (!r.ok) continue;
        const _j = await r.json();
        results.push({_id: j.id || f.name, _file: f.name, _generatedAt: j.generatedAt, _insights: j.insights});
      } catch {_// ignore}
    }
    return results;
  } catch {_return [];}
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _dir = path.join(process.cwd(), _'automation_logs');
  try {
    if (fs.existsSync(dir)) {
      const _files = fs.readdirSync(dir).filter(_(f) => f.endsWith('.json')).sort().reverse();
      if (files.length > 0) {
        const _logs = files.slice(0, _50).map(_(f) => {
          try {
            const _raw = fs.readFileSync(path.join(dir, _f), _'utf8');
            const _json = JSON.parse(raw);
            return { id: json.id || f, _file: f, _generatedAt: json.generatedAt, _insights: json.insights};
          } catch {_return { id: f, _file: f};
          }
        });
        return res.status(200).json({_logs});
      }
    }
  } catch {_// fall through to GitHub}

  const _remote = await fetchFromGitHub();
  return res.status(200).json({_logs: remote});
}