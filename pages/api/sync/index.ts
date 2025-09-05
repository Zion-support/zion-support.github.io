import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState } from &quot;../../../utils/sync/storage&quot;;
import { filterEventsByScope } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState();

  if (req.method === &quot;GET&quot;) {
    const scope = state.config.scope;
    const scopedEvents = filterEventsByScope(state.events, scope);
    return res.status(200).json({
      status: &quot;ok&quot;,
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        totalEvents: scopedEvents.length,
        proposals: scopedEvents.filter((e) => e.type === &quot;proposal&quot;).length,
        tokenTransfers: scopedEvents.filter((e) => e.type === &quot;token_transfer&quot;).length,
        talentMobility: scopedEvents.filter((e) => e.type === &quot;talent_mobility&quot;).length,
        daoEndorsements: scopedEvents.filter((e) => e.type === &quot;dao_endorsement&quot;).length,
        leaderboard: scopedEvents.filter((e) => e.type === &quot;leaderboard_entry&quot;).length}});
  }

  return res.status(405).json({ error: &quot;Method not allowed&quot; });
}