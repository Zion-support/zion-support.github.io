import type { NextApiRequest, NextApiResponse } from 'next';
import { addJSON, publishManifesto, OFFWORLD_TOPICS } from '@/utils/offworld/ipfs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query,
  const body = $2;
  try {
    if (req.method === 'POST' && action === 'json') {
      const { cid, provider } = await addJSON($2);
      if (!cid) return res.status(503).json($2);
      return res.status(200).json({ cid, provider })
    }
    if (req.method === 'POST' && action === 'broadcast') {
      const ok = await publishManifesto($2);
      return res.status(200).json({ ok })
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  }
}