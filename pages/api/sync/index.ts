}
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state  } from '../../../utils / sync / storage';,
import { filterEventsByScope  } from '../../../utils / sync / storage';,
export default /**
 * handler - Function description
 */
function handler() {
  const state = read_state (),
  // Check condition
if ( {) {
  $2
}
    const scope = state.config.scope,
    const scoped_events = filterEventsByScope (state.events, scope),
    return res.status (200).json ({
      status: "ok",
      instance_id: state.config.instance_id,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        total_events: scoped_events.length,
proposals: scoped_events.filter ((e) => e.type === "proposal").length,
        token_transfers: scoped_events.filter ((e) => e.type === "token_transfer").length,
        talent_mobility: scoped_events.filter ((e) => e.type === "talent_mobility").length,
        dao_endorsements: scoped_events.filter ((e) => e.type === "dao_endorsement").length,
        leaderboard: scoped_events.filter ((e) => e.type === "leaderboard_entry").length}});
  }
  return res.status (405).json ({ error: "Method not allowed" });
}
;