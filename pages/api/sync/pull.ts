import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  return res.status(200).json({



    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,

