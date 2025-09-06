import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

// In-memory demo store per process
<<<<<<< HEAD
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__;
=======
// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
(global as any).__ZION_DID_STORE__ = store
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { payload, message, signature } = req.body |{}
  if (!payload |!payload.address) return res.status(400).json({ error: 'Missing payload' })
  const key = `${payload.address}`
  store[key] = { payload, message, signature, updatedAt: Date.now() }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ ok: true })
}
=======
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { payload, message, signature } = req.body || {};
  if (!payload || !payload.address)
    return res.status(400).json({ error: 'Missing payload' });
  
}

const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() };
  return res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
