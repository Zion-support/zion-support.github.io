import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage"
import { filterEventsByScope } from "../../../utils/sync/storage"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
import type {_NextApiRequest, _NextApiResponse} from "next";
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (req.method === "GET") {
    return res.status(200).json({
      status: &quot;ok&quot;,
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        totalEvents: scopedEvents.length,
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
  }

  return res.status(405).json({ error: "Method not allowed" })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}