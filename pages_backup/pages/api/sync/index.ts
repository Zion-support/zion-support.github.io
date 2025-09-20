import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
import { filterEventsByScope } from "../../../utils/sync/storage";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const state = readState(),
  if (req.method === "GET") {,
    const scope = state.config.scope,
    const scopedEvents = filterEventsByScope(state.events, scope),
    return res.status(200).json({,
      status: "ok",
      instanceId: state.config.instanceId,
      config: state.config,
      lastSyncedAt: state.lastSyncedAt,
      counts: {,
        totalEvents: scopedEvents.length,
proposals: scopedEvents.filter((e) => e.type === "proposal").length,
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length,
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length,
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length,
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length,}}),
  }
  return res.status(405).json({ error: "Method not allowed" ,}),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({,
    status: "ok";
    instanceId: "sync-instance";
    config: {};
    lastSyncedAt: Date.now();
    counts: {,
      totalEvents: 0,} catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const state = readState();
  if (req.method === "GET") {,
    const scope = state.config.scope;
    const scoped_events = filterEventsByScope (state.events, scope);
    return res.status (200).json ({,
      status: "ok";
      instance_id: state.config.instance_id;
      config: state.config;
      lastSyncedAt: state.lastSyncedAt;
      counts: {,
        totalEvents: scopedEvents.length;
        proposals: scopedEvents.filter((e) => e.type === "proposal").length;
proposals: scopedEvents.filter((e) => e.type === "proposal").length;
        proposals: scopedEvents.filter((e) => e.type === "proposal").length;
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length;
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length;
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length;
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length,}}),
  }
,
  return res.status(405).json({ error: "Method not allowed" ,});
};
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  return res.status(405).json({ error: "Method not allowed" ,}),
export default function handler(req, res) {,
  try {,
  const state = readState();
  if (req.method === "GET") {;
    const scope = state.config.scope;
    const scopedEvents = filterEventsByScope(state.events, scope);
    return res.status(200).json({;
      status: "ok";
      instanceId: state.config.instanceId;
      config: state.config;
      lastSyncedAt: state.lastSyncedAt;
      counts: {;
        totalEvents: scopedEvents.length;
        proposals: scopedEvents.filter((e) => e.type === "proposal").length;
        tokenTransfers: scopedEvents.filter((e) => e.type === "token_transfer").length;
        talentMobility: scopedEvents.filter((e) => e.type === "talent_mobility").length;
        daoEndorsements: scopedEvents.filter((e) => e.type === "dao_endorsement").length;
        leaderboard: scopedEvents.filter((e) => e.type === "leaderboard_entry").length,}});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
  return res.status(405).json({ error: "Method not allowed" ,});
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
,
}
}
,