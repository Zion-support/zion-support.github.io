import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string };
  if (!cid) return res.status(400).json({ error: 'CID required' });
  try {
    const url = `https://${cid}.ipfs.w3s.link/profile.json`;
    const r = await fetch(url);
    if (!r.ok) return res.status(404).json({ error: 'Backup not found' });
    const data = await r.json();
    return res.status(200).json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Restore failed' });
  }
}