import type { NextApiRequest, NextApiResponse } from 'next';
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query,
  const body = $2;
  const { stores } = await connectOrbit($2);
  if (!stores) return res.status(503).json($2);
  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage($2);
      return res.status(200).json({ ok: true})
    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote($2);
      return res.status(200).json({ ok: true})
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution($2);
      return res.status(200).json({ ok: true})
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  }
}