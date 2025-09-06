<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
(global as any).__ZION_DID_STORE__ = store
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).end()
  const { payload, message, signature } = req.body |{}
  if (!payload |!payload.address) return res.status(400).json({ error: 'Missing payload' })
  const key = `${payload.address}`
  store[key] = { payload, message, signature, updatedAt: Date.now() }

  return res.status(200).json({ ok: true })
}
=======
  if (req.method !== 'POST') return res.status(405).end();
  const { payload, message, signature } = req.body || {};
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' });
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() };
  return res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from 'next',
;
// In - memory demo store per process;
const store: Record < string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__ = store,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).end (), ) {
  $2
}
  const { payload, message, signature } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing payload' }), ) {
  $2
}
  const key = `${payload.address}`,
  store[key] = { payload, message, signature, updated_at: Date.now () },
  return res.status (200).json ({ ok: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
