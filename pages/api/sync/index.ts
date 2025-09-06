import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState($2);
  if (req.method = $2;
    const scopedEvents = filterEventsByScope($2);
    return res.status(200).json({
      status: "ok",
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        totalEvents: scopedEvents.length,
        proposals: scopedEvents.filter((e) => e.type = $2;
        tokenTransfers: scopedEvents.filter((e) => e.type = $2;
        talentMobility: scopedEvents.filter((e) => e.type = $2;
        daoEndorsements: scopedEvents.filter((e) => e.type = $2;
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
  }

  return res.status(405).json({ error: "Method not allowed" })
}