import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cid } = req.query as { cid?: string };
  if (!cid) return res.status(400).json({ error: 'Missing CID' });

  try {
    const url = `https://${cid}.ipfs.w3s.link/profile.json`;
    const response = await fetch(url);
    if (!response.ok) return res.status(404).json({ error: 'Backup not found' });
    
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error restoring backup:', error);
    return res.status(500).json({ error: 'Failed to restore backup' });
  }
}