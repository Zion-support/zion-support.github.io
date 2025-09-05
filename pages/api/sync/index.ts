<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",
import { filterEventsByScope } from "../../../utils/sync/storage",
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState } from &quot;../../../utils/sync/storage&quot;;
import { filterEventsByScope } from &quot;../../../utils/sync/storage&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  if (req.method === "GET") {
<<<<<<< HEAD
    const scope = state.config.scope,
    const scopedEvents = filterEventsByScope(state.events, scope),
=======
  if (req.method === &quot;GET&quot;) {
    const scope = state.config.scope;
    const scopedEvents = filterEventsByScope(state.events, scope);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    return res.status(200).json({
      status: &quot;ok&quot;,
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        totalEvents: scopedEvents.length,
<<<<<<< HEAD
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
  }

  return res.status(405).json({ error: "Method not allowed" })
=======
        proposals: scopedEvents.filter((e) => e.type === &quot;proposal&quot;).length,
        tokenTransfers: scopedEvents.filter((e) => e.type === &quot;token_transfer&quot;).length,
        talentMobility: scopedEvents.filter((e) => e.type === &quot;talent_mobility&quot;).length,
        daoEndorsements: scopedEvents.filter((e) => e.type === &quot;dao_endorsement&quot;).length,
        leaderboard: scopedEvents.filter((e) => e.type === &quot;leaderboard_entry&quot;).length}});
  }

  return res.status(405).json({ error: &quot;Method not allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _scope = state.config.scope;
    const _scopedEvents = filterEventsByScope(state.events, _scope);
    return res.status(200).json(_{
      status: "ok", _instanceId: state.config.instanceId, _config: state.config, _lastSyncedAt: state.lastSyncedAt, _counts: {
        totalEvents: scopedEvents.length, _proposals: scopedEvents.filter((e) => e.type === "proposal").length, _tokenTransfers: scopedEvents.filter(_(e) => e.type === "token_transfer").length, _talentMobility: scopedEvents.filter(_(e) => e.type === "talent_mobility").length, _daoEndorsements: scopedEvents.filter(_(e) => e.type === "dao_endorsement").length, _leaderboard: scopedEvents.filter(_(e) => e.type === "leaderboard_entry").length}});
  }

  return res.status(405).json({_error: "Method not allowed"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}