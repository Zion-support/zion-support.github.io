

import type { NextApiRequest, NextApiResponse } from 'next',;
;
// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__ = store,



// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
(global as any).__ZION_DID_STORE__ = store
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  if (req.method !== 'POST') return res.status(405).end();
=======
  if (req.method !== 'POST') return res.status(405).end(),
  const { payload, message, signature } = req.body || {},
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' }),
  const key = `${payload.address}`,
  store[key] = { payload, message, signature, updatedAt: Date.now() },
  return res.status(200).json({ ok: true });
};

=======
// In-memory demo store per process;
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {
  res.status(200).json({ store });
import type { NextApiRequest, NextApiResponse } from 'next';
// In-memory demo store per process;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;
export default function handler(req, res) {
  try {
  if (req.method !== 'POST') return res.status(405).end(),;

  const { payload, message, signature } = req.body || {};
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' });
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() };
  return res.status(200).json({ ok: true })
}


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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
