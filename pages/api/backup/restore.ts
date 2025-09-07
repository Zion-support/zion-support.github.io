import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string },
  if (!cid) return res.status(400).json($2);
  try {
    const url = $2;
    const r = await fetch($2);
    if (!r.ok) return res.status(404).json($2);
    const data = await r.json($2);
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message || 'Restore failed' })
  }