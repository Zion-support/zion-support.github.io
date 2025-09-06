import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
<<<<<<< HEAD

  if (req.method === "GET") {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======
main

  if (req.method === "GET") {
ursor/fix-website-loading-errors-and-merge-6662


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

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

  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
  }
  return res.status(405).json({ error: "Method not allowed" })
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "ok"
    instanceId: "sync-instance"
    config: {}
    lastSyncedAt: Date.now()
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
import type { NextApiRequest, NextApiResponse } from "next"
import { readState } from "../../../utils/sync/storage"
import { filterEventsByScope } from "../../../utils/sync/storage"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState()
  if (req.method === "GET") {
<<<<<<< HEAD
    const scope = state.config.scope
    const scoped_events = filterEventsByScope (state.events, scope)
    return res.status (200).json ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      status: "ok",
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {

        totalEvents: scopedEvents.length,
<<<<<<< HEAD
proposals: scopedEvents.filter((e) => e.type === "proposal").length,
=======

    const scope = state.config.scope
    const scoped_events = filterEventsByScope (state.events, scope)
    return res.status (200).json ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,

        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
<<<<<<< HEAD
<<<<<<< HEAD
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
}
}
}
}


=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return res.status(405).json({ error: "Method not allowed" })
};
=======
>>>>>>> pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
