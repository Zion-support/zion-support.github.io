<<<<<<< HEAD:pages/api/sync/index.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/index.ts
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
import { filterEventsByScope } from "../../../utils/sync/storage",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages/api/sync/index.ts
  const state = readState(),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  if (req.method === "GET") {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


  if (req.method === "GET") {

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  const state = readState()
main

  if (req.method === "GET") {
ursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/index.ts
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
  if (req.method === "GET") {
<<<<<<< HEAD:pages/api/sync/index.ts
<<<<<<< HEAD
<<<<<<< HEAD
    const scope = state.config.scope,
    const scopedEvents = filterEventsByScope(state.events, scope),
    return res.status(200).json({
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/index.ts

    const scope = state.config.scope
    const scoped_events = filterEventsByScope (state.events, scope)
    return res.status (200).json ({
<<<<<<< HEAD:pages/api/sync/index.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      status: "ok",
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {
        totalEvents: scopedEvents.length,

=======
<<<<<<< HEAD
  if (req.method === "GET") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const scope = state.config.scope,
    const scoped_events = filterEventsByScope (state.events, scope),
    return res.status (200).json ({
      status: "ok",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      instance_id: state.config.instance_id,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {

        totalEvents: scopedEvents.length,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {

        totalEvents: scopedEvents.length,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
<<<<<<< HEAD
proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        proposals: scopedEvents.filter((e) => e.type === "proposal").length,

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/index.ts
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
<<<<<<< HEAD:pages/api/sync/index.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  return res.status(405).json({ error: "Method not allowed" });
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
}



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return res.status(405).json({ error: "Method not allowed" })
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
      status: "ok"
      instanceId: state.config.instanceId
      config: state.config
      lastSyncedAt: state.lastSyncedAt
      counts: {

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/index.ts

        totalEvents: scopedEvents.length
        proposals: scopedEvents.filter((e) => e.type === "proposal").length
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length}})
<<<<<<< HEAD:pages/api/sync/index.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/sync/index.ts
