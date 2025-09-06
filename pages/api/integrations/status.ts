<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { readState } from '../../../lib/integrations/fileStore';
import { PROVIDERS } from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const state = readState()
  const connections: Record<string, any> = {}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const state = readState();
  const connections: Record<string, any> = {};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id)
    connections[p.id] = conn |{ providerId: p.id, status: 'disconnected' }

  }
  res.status(200).json({ connections })
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_state } from '../../../lib / integrations / file_store',
import { PROVIDERS } from '../../../lib / integrations / registry',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const state = read_state (),
  const connections: Record < string, any> = {},
  for (const p of PROVIDERS) {
    const conn = state.connections.find (c => c.provider_id === p.id),
    connections[p.id] = conn || { provider_id: p.id, status: 'disconnected' }
  }
  res.status (200).json ({ connections });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
