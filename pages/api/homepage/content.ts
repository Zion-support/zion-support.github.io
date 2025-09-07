<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

async function fetchFromGitHub(path: string) {
  try {
    const match = path.match(/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/);
    const owner = match?.[1];
    const repo = match?.[2];
    if (!owner || !repo) return null;
    
    const pathFile = match?.[4];
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${pathFile}`;
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' };
    
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }
    
    const resp = await fetch(rawUrl, { headers });
    if (!resp.ok) return null;
    
    return await resp.json();
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { path } = req.query as { path?: string };
    if (!path) {
      return res.status(400).json({ error: 'Missing path parameter' });
    }

    const content = await fetchFromGitHub(path);
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }

    res.status(200).json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}