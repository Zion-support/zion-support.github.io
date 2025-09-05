<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// In-memory demo store per process
const store: Record<string any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__ = store,

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end(),
  const { payload, message, signature } = req.body || {},
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' }),
  const key = `${payload.address}`,
  store[key] = { payload, message, signature, updatedAt: Date.now() },
  return res.status(200).json({ ok: true })
=======
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).end();
  const { payload, _message, _signature} = req.body || {};
  if (!payload || !payload.address) return res.status(400).json({_error: 'Missing payload'});
  const _key = `${_payload.address}`;
  store[key] = {_payload, _message, _signature, _updatedAt: Date.now()};
  return res.status(200).json({_ok: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}