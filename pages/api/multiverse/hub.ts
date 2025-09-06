<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState } from "../../../utils/sync/storage",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {
    return res.status(200).json({
<<<<<<< HEAD
      route: "/multiverse/hub"
      instanceId: state.config.instanceId
      peers: state.config.peers
      scope: state.config.scope
      optIn: state.config.optIn
      paused: state.config.paused
lastSyncedAt: state.lastSyncedAt})

  }
  return res.status(405).json({ error: "Method not allowed" })
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  if (req.method === 'GET') {
    return res.status(200).json({
      hub: 'multiverse-hub'
    });
  } else {
    res.status(405).end('Method Not Allowed');
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
import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../utils/sync/storage",
export default async function handler(req, res) {
  try {
  const state = readState(),
  if (req.method === "GET") {
    return res.status(200).json({
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      route: "/multiverse/hub",
      instanceId: state.config.instanceId,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      peers: state.config.peers,
      scope: state.config.scope,
      opt_in: state.config.opt_in,
      paused: state.config.paused,
<<<<<<< HEAD
=======
<<<<<<< HEAD
lastSyncedAt: state.lastSyncedAt})
  }

  return res.status(405).json({ error: "Method not allowed" });
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      lastSyncedAt: state.lastSyncedAt})
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
export default async function handler(req, res) {
  try {
  const state = readState();
  if (req.method === "GET") {;
    return res.status(200).json({;
      route: "/multiverse/hub";
      instanceId: state.config.instanceId;
      peers: state.config.peers;
      scope: state.config.scope,;
      optIn: state.config.optIn;
      paused: state.config.paused;
      lastSyncedAt: state.lastSyncedAt});
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
