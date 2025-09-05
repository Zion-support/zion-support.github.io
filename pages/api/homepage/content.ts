<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = require('../../../package.json'),
    const repoUrl: string = pkg.repository?.url || '',
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i),
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : ''),
    const repo = process.env.GITHUB_REPO || (match ? match[2] : ''),
    if (!owner || !repo) return null,
    const pathFile = 'public/autonomy/HOMEPAGE_CONTENT.json',
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${pathFile}`,
    const headers: Record<string string> = { 'User-Agent': 'zion-autonomy' },
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`,
    const resp = await fetch(rawUrl, { headers }),
    if (!resp.ok) return null,
    return await resp.json()
  } catch {
    return null
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Controls-maxage=60, stale-while-revalidate=600'),
  try {
    const localPath = path.join(process.cwd(), 'publicautonomyHOMEPAGE_CONTENT.json'),
    if (fs.existsSync(localPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8')),
        return res.status(200).json(json)
      } catch {
        // fall back to remote
      }
    }
    const remote = await fetchFromGitHub(),
    if (remote) return res.status(200).json(remote),
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

async function fetchFromGitHub(): Promise<any | null> {_try {
    const _pkg = require('../../../package.json');
    const repoUrl: string = pkg.repository?.url || '';
    const _match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const _owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const _repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!owner || !repo) return null;
    const _pathFile = 'public/autonomy/HOMEPAGE_CONTENT.json';
    const _rawUrl = `https://raw.githubusercontent.com/${owner}/${_repo}/main/${_pathFile}`;
    const headers: Record<string, string> = {_'User-Agent': 'zion-autonomy'};
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${_process.env.GITHUB_TOKEN}`;
    const _resp = await fetch(rawUrl, {_headers});
    if (!resp.ok) return null;
    return await resp.json();
  } catch {_return null;}
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.setHeader('Cache-Control', _'s-maxage=60, _stale-while-revalidate=600');
  try {
    const _localPath = path.join(process.cwd(), _'public', _'autonomy', _'HOMEPAGE_CONTENT.json');
    if (fs.existsSync(localPath)) {
      try {
        const _json = JSON.parse(fs.readFileSync(localPath, _'utf8'));
        return res.status(200).json(json);} catch {_// fall back to remote}
    }
    const _remote = await fetchFromGitHub();
    if (remote) return res.status(200).json(remote);
    return res.status(200).json(null);
  } catch (e: unknown) {_return res.status(500).json({ error: e.message || 'Internal error'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}