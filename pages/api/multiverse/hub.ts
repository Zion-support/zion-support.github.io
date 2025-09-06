<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../utils/sync/storage';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const state = readState();

  if (req.method === 'GET') {
    return res.status(200).json({
      route: '/multiverse/hub',
      instanceId: state.config.instanceId,
      peers: state.config.peers,
      scope: state.config.scope,
      optIn: state.config.optIn,
      paused: state.config.paused,
      lastSyncedAt: state.lastSyncedAt,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
=======
 export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const state = readState ();
GET") {
  return res.status (200) .json ({
  
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
