import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: "Invalid request" });
  try {
    const url = { error: "Invalid request" };
    const r = await fetch({ error: "Invalid request" });
    if (!r.ok) return res.status(404).json({ error: "Invalid request" });
    const data = await r.json({ error: "Invalid request" });
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message || 'Restore failed' })
  }
}

}