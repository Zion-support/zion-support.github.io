import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",;
;


  if (req.method === "GET") {

    return res.status(200).json({ config: state.config })
  }

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ config: {} });
  } else if (req.method === 'POST') {
    res.status(200).json({ config: {} });
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
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState } from "../../../utils/sync/storage"
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const state = readState(),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const state = readState()
>>>>>>> main
  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
  }

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> main
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
<<<<<<< HEAD
      peers?: Peer[],
      scope?: SyncScope,
      instanceId?: string
    },


    if (typeof optIn === "boolean") state.config.optIn = optIn,
    if (typeof paused === "boolean") state.config.paused = paused,
    if (scope) state.config.scope = scope,
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId,


    writeState(state),
<<<<<<< HEAD

<<<<<<< HEAD
=======
    }
    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0)
    }
=======
      peers?: Peer[]
      scope?: SyncScope
      instanceId?: string
    }


>>>>>>> main
    if (typeof optIn === "boolean") state.config.optIn = optIn
    if (typeof paused === "boolean") state.config.paused = paused
    if (scope) state.config.scope = scope
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId
<<<<<<< HEAD
    writeState(state)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


    writeState(state)

>>>>>>> main
    return res.status(200).json({ config: state.config })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  return res.status(405).json({ error: "Method not allowed" })
};