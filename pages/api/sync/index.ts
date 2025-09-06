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

<<<<<<< HEAD
  if (req.method === "GET") {
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
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const state = readState(),;
  if (req.method === "GET") {;
    const scope = state.config.scope,;
    const scopedEvents = filterEventsByScope(state.events, scope),;
    return res.status(200).json({;
      status: "ok",;
      instanceId: state.config.instanceId,;
      config: state.config,;
      lastSyncedAt: state.lastSyncedAt,;
      counts: {;
        totalEvents: scopedEvents.length,;
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,;
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,;
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length;
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length;
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}});
  }
;
  return res.status(405).json({ error: "Method not allowed" });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}