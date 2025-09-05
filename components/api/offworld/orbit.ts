<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { connectOrbit, appendChatMessage, recordVote, editConstitution } from '@/utils/offworld/orbitdb',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query,
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body,

  const { stores } = await connectOrbit(),
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable' }),

  try {
    if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, body),
      return res.status(200).json({ ok: true })
    }
    if (action === 'vote' && req.method === 'POST') {
      await recordVote(stores, body),
      return res.status(200).json({ ok: true })
    }
    if (action === 'constitution' && req.method === 'POST') {
      await editConstitution(stores, body),
      return res.status(200).json({ ok: true })
    }
    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { action} = req.query;
  const _body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  const {_stores} = await connectOrbit();
  if (!stores) return res.status(503).json({_error: 'OrbitDB unavailable'});

  try {_if (action === 'chat' && req.method === 'POST') {
      await appendChatMessage(stores, _body);
      return res.status(200).json({ ok: true});
    }
    if (action === 'vote' && req.method === 'POST') {_await recordVote(stores, _body);
      return res.status(200).json({ ok: true});
    }
    if (action === 'constitution' && req.method === 'POST') {_await editConstitution(stores, _body);
      return res.status(200).json({ ok: true});
    }
    return res.status(400).json({_error: 'Unsupported action'});
  } catch (e: unknown) {_return res.status(500).json({ error: e.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}