import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method = = "GET") {
    return res.status(200).json({
      route: "/multiverse/hub"
      instanceId: state.config.instanceId
      peers: state.config.peers
      scope: state.config.scope
      optIn: state.config.optIn
      paused: state.config.paused
lastSyncedAt: state.lastSyncedAt})

  }
  return res.status(405).json({ error: "Method not allowed" })

import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state  } from '../../../utils / sync / storage';,
export default async /**
 * handler - Function description
 */
function handler() {
  const state = read_state (),
  // Check condition
if ( {) {
  $2

    return res.status (200).json ({
      route: "/multiverse / hub",
      instance_id: state.config.instance_id,
      peers: state.config.peers,
      scope: state.config.scope,
      opt_in: state.config.opt_in,
      paused: state.config.paused,
lastSyncedAt: state.lastSyncedAt});
  }
  return res.status (405).json ({ error: "Method not allowed" });
