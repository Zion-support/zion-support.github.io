
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {
    return res.status(200).json({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      route: "/multiverse/hub",
      instanceId: state.config.instanceId,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      peers: state.config.peers,
      scope: state.config.scope,
      opt_in: state.config.opt_in,
      paused: state.config.paused,

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
