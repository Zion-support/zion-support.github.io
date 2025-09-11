

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return res.status(200).json({



    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requestedScope
  });
}


=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, filterEventsByScope  } from '../../../utils / sync / storage';,
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const state = read_state (),
  const since_param = (req.method === "GET" ? req.query.since : (req.body?.since as any)) as string | string[] | undefined,
  const since = Number (Array.is_array (since_param) ? since_param[0] : since_param) || 0,
  const scope_param = (req.method === "GET" ? req.query.scope : (req.body?.scope as any)) as string | string[] | undefined,
  const requested_scope = (Array.is_array (scope_param) ? scope_param[0] : scope_param) || state.config.scope,
  const scoped = filterEventsByScope (state.events, state.config.scope),
  const events = scoped.filter ((e) => (e.timestamp || 0) > since),
  return res.status (200).json ({
    instance_id: state.config.instance_id,
    lastSyncedAt: state.lastSyncedAt,
    events,
    scope: requested_scope});
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    instanceId: state.config.instanceId,
    lastSyncedAt: state.lastSyncedAt,
    events,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
