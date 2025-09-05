import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();

  if (req.method === "GET") {
    const _scope = state.config.scope;
    const _scopedEvents = filterEventsByScope(state.events, _scope);
    return res.status(200).json(_{
      status: "ok", _instanceId: state.config.instanceId, _config: state.config, _lastSyncedAt: state.lastSyncedAt, _counts: {
        totalEvents: scopedEvents.length, _proposals: scopedEvents.filter((e) => e.type === "proposal").length, _tokenTransfers: scopedEvents.filter(_(e) => e.type === "token_transfer").length, _talentMobility: scopedEvents.filter(_(e) => e.type === "talent_mobility").length, _daoEndorsements: scopedEvents.filter(_(e) => e.type === "dao_endorsement").length, _leaderboard: scopedEvents.filter(_(e) => e.type === "leaderboard_entry").length}});
  }

  return res.status(405).json({_error: "Method not allowed"});
}