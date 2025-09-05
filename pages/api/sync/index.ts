<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const state = readState(),;
;
  if (req.method === "GET") {;
    const scope = state.config.scope,;
    const scopedEvents = filterEventsByScope(state.events, scope),;
    return res.status(200).json({;
      status:"ok",;
      instanceId:state.config.instanceId,;
      config:state.config,;
      lastSyncedAt:state.lastSyncedAt,;
      counts:{;
        totalEvents:scopedEvents.length,;
        proposals:scopedEvents.filter((e) => e.type === "proposal").length,;
        tokenTransfers:scopedEvents.filter((e) => e.type === "token_transfer").length,;
        talentMobility:scopedEvents.filter((e) => e.type === "talent_mobility").length,;
        daoEndorsements:scopedEvents.filter((e) => e.type === "dao_endorsement").length,;
        leaderboard:scopedEvents.filter((e) => e.type === "leaderboard_entry").length}}),;
  }
;
  return res.status(405).json({ error:"Method not allowed" }),;
=======
import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",
import { filterEventsByScope } from "../../../utils/sync/storage",export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
import type {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {const state = readState();

  if (req.method === "GET") {
    const scope = state.config.scope,
    const scopedEvents = filterEventsByScope(state.events, scope),    return res.status(200).json({
      status: &quot;ok&quot;,
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        totalEvents: scopedEvents.length,
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        tokenTransfers: scopedEvents.filter((e) => e.type === "tokentransfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talentmobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "daoendorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboardentry").length}})
  }

  return res.status(405).json({ error: "Method not allowed" })    const scope = state.config.scope;
    const scopedEvents = filterEventsByScope(state.events, scope);
    return res.status(200).json(_{
      status: "ok", instanceId: state.config.instanceId, config: state.config, lastSyncedAt: state.lastSyncedAt, counts: {
        totalEvents: scopedEvents.length, proposals: scopedEvents.filter((e) => e.type === "proposal").length, tokenTransfers: scopedEvents.filter(_(e) => e.type === "tokentransfer").length, talentMobility: scopedEvents.filter(_(e) => e.type === "talentmobility").length, daoEndorsements: scopedEvents.filter(_(e) => e.type === "daoendorsement").length, leaderboard: scopedEvents.filter(_(e) => e.type === "leaderboardentry").length}})
  }

  return res.status(405).json({error: "Method not allowed"})
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}