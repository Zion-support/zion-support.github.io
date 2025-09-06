<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
  const state = readState()
  if (req.method === "GET") {
    const scope = state.config.scope
    const scopedEvents = filterEventsByScope(state.events, scope)
    return res.status(200).json({
      status: "ok"
      instanceId: state.config.instanceId
      config: state.config
      lastSyncedAt: state.lastSyncedAt
      counts: {
        totalEvents: scopedEvents.length
proposals: scopedEvents.filter((e) => e.type === "proposal").length
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length

        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
  }
  return res.status(405).json({ error: "Method not allowed" })
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "ok",
    instanceId: "sync-instance",
    config: {},
    lastSyncedAt: Date.now(),
    counts: {
      totalEvents: 0
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",
import { filterEventsByScope } from "../../../utils/sync/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (req.method === "GET") {
    const scope = state.config.scope
    const scopedEvents = filterEventsByScope(state.events, scope)
    return res.status(200).json({
      status: "ok"
      instanceId: state.config.instanceId
      config: state.config
      lastSyncedAt: state.lastSyncedAt
      counts: {
        totalEvents: scopedEvents.length
proposals: scopedEvents.filter((e) => e.type === "proposal").length
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length

        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
  }
  return res.status(405).json({ error: "Method not allowed" })
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
<<<<<<< HEAD
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
=======

        totalEvents: scopedEvents.length,
<<<<<<< HEAD
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
=======
<<<<<<< HEAD
proposals: scopedEvents.filter((e) => e.type === "proposal").length,
=======
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }

  return res.status(405).json({ error: "Method not allowed" });
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return res.status(405).json({ error: "Method not allowed" })
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req, res) {
  try {
  const state = readState();
  if (req.method === "GET") {;
    const scope = state.config.scope;
    const scopedEvents = filterEventsByScope(state.events, scope);
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
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
