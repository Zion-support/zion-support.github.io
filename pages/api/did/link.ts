
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
;
// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__ = store,
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
(global as any).__ZION_DID_STORE__ = store
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).end();

  if (req.method !== 'POST') return res.status(405).end();
=======  if (req.method !== 'POST') return res.status(405).end(),
  const { payload, message, signature } = req.body || {},
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' }),
  const key = `${payload.address}`,
  store[key] = { payload, message, signature, updatedAt: Date.now() },
  return res.status(200).json({ ok: true });
};

  const { payload, message, signature } = req.body || {};
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' });
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
