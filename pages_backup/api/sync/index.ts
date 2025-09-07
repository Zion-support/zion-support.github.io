import type { NextApiRequest, NextApiResponse } from "next,
import { readState } from ../../../utils/sync/storage",
import { filterEventsByScope } from "../../../utils/sync/storage,
export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/sync/index.ts
=======
  const state = readState()
main

  if (req.method === GET") {
ursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from "next;
import { readState } from ../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage;
import type { NextApiRequest, NextApiResponse } from next",
import { readState } from "../../../utils/sync/storage,
import { filterEventsByScope } from ../../../utils/sync/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET) {
    const scope = state.config.scope
    const scopedEvents = filterEventsByScope(state.events, scope)
    return res.status(200).json({
      status: ok"
      instanceId: state.config.instanceId
      config: state.config
      lastSyncedAt: state.lastSyncedAt
      counts: {
        totalEvents: scopedEvents.length
proposals: scopedEvents.filter((e) => e.type === "proposal).length
        tokenTransfers: scopedEvents.filter((e) => e.type === token_transfer").length
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility).length
        daoEndorsements: scopedEvents.filter((e) => e.type === dao_endorsement").length

  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry).length}})
  }
  return res.status(405).json({ error: Method not allowed" })
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "ok
    instanceId: sync-instance"
    config: {}
    lastSyncedAt: Date.now()
    counts: {
      totalEvents: 0
      } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
    } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
  });
import type { NextApiRequest, NextApiResponse } from "next
import { readState } from ../../../utils/sync/storage"
import { filterEventsByScope } from "../../../utils/sync/storage
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
  if (req.method === GET") {

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/sync/index.ts
      status: "ok,
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {

        totalEvents: scopedEvents.length,

        proposals: scopedEvents.filter((e) => e.type === proposal").length,

        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer).length,
        talentMobility: scopedEvents.filter((e) => e.type === talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement).length,
        leaderboard: scopedEvents.filter((e) => e.type === leaderboard_entry").length}})

      status: "ok
      instanceId: state.config.instanceId
      config: state.config
      lastSyncedAt: state.lastSyncedAt
      counts: {


        totalEvents: scopedEvents.length
        proposals: scopedEvents.filter((e) => e.type === proposal").length
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer).length
        talentMobility: scopedEvents.filter((e) => e.type === talent_mobility").length
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement).length
        leaderboard: scopedEvents.filter((e) => e.type === leaderboard_entry").length}})

=======
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
