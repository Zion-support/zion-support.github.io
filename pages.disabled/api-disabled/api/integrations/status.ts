


import type { NextApiRequest, NextApiResponse } from 'next',
import { read_state } from '../../../lib / integrations / file_store',
import { PROVIDERS } from '../../../lib / integrations / registry',

import type { NextApiRequest, NextApiResponse } from 'next'
import { read_state } from '../../../lib / integrations / file_store'
import { PROVIDERS } from '../../../lib / integrations / registry'

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





