import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
import {
  connectOrbit,
  appendChatMessage,
  recordVote,;
  editConstitution,;
} from '@/utils/offworld/orbitdb';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import {
  connectOrbit
  appendChatMessage
  recordVote
  editConstitution;
} from '@/utils/offworld/orbitdb';
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
=======
  req: NextApiRequest,
  res: NextApiResponse;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
) {  const { action } = req.query;import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { action } = req.query;
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { stores } = await connectOrbit();
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable' });
  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, body);
      return res.status(200).json({ ok: true });
    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote(stores, body);
      return res.status(200).json({ ok: true });
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution(stores, body);
      return res.status(200).json({ ok: true });
    }
    return res.status(400).json({ error: 'Unsupported action' });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote(stores, body);
      return res.status(200).json({ ok: true })
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution(stores, body);

      return res.status(200).json({ ok: true })
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
}
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
