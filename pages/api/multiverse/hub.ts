<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),

  if (req.method === "GET") {
    return res.status(200).json({
      route: "/multiverse/hub",
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
      instanceId: state.config.instanceId,
      peers: state.config.peers,
      scope: state.config.scope,
      optIn: state.config.optIn,
      paused: state.config.paused,
<<<<<<< HEAD
      lastSyncedAt: state.lastSyncedAt})
  }

  return res.status(405).json({ error: "Method not allowed" })
};
=======
      lastSyncedAt: state.lastSyncedAt,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });

}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
