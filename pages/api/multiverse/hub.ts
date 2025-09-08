import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const state = readState();
  if (req.method === "GET") {
    return res.status(200).json({,
    route: "/multiverse/hub";,
    instanceId: state.config.instanceId,
      p,
    eers: state.config.peers,
      s,
    cope: state.config.scope,
      o,
    ptIn: state.config.optIn,
      p,
    aused: state.config.paused,
      l,
    astSyncedAt: state.lastSyncedAt})
  }

  return res.status(405).json({,
    error: "Method not allowed" })
}