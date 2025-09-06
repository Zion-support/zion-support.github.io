import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {
    return res.status(200).json({
      route: "/multiverse/hub"
      instanceId: state.config.instanceId
      peers: state.config.peers
      scope: state.config.scope
      optIn: state.config.optIn
      paused: state.config.paused
lastSyncedAt: state.lastSyncedAt})

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

=======
=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
}
    return res.status (200).json ({
      route: "/multiverse / hub",
      instance_id: state.config.instance_id,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  if (req.method === 'GET') {
    return res.status(200).json({
      hub: 'multiverse-hub'
    });
  } else {
    res.status(405).end('Method Not Allowed');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",
export default async function handler(req, res) {
  try {
  const state = readState(),
  if (req.method === "GET") {
    return res.status(200).json({
<<<<<<< HEAD
      route: "/multiverse/hub",
      instanceId: state.config.instanceId,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      route: "/multiverse/hub",
      instanceId: state.config.instanceId,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      peers: state.config.peers,
      scope: state.config.scope,
      opt_in: state.config.opt_in,
      paused: state.config.paused,
      lastSyncedAt: state.lastSyncedAt})
  }

  return res.status(405).json({ error: "Method not allowed" })
};