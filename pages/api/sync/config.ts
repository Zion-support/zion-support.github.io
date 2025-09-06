<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types";
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {
<<<<<<< HEAD
=======
  if (req.method === "GET") {

    return res.status(200).json({ config: state.config })
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState(),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
  }

=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[],
      scope?: SyncScope,
      instanceId?: string
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD


    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0)
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (scope && !["full", "dao", "marketplace"].includes(scope)) {
      return res.status(400).json({ error: "Invalid scope" })
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
    if (Array.isArray(peers)) {;
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0);
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (typeof optIn === "boolean") state.config.optIn = optIn,
    if (typeof paused === "boolean") state.config.paused = paused,
    if (scope) state.config.scope = scope,
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId,
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    writeState(state),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return res.status(200).json({ config: state.config })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[]
      scope?: SyncScope
      instanceId?: string
    }
    if (scope && !["full", "dao", "marketplace"].includes(scope)) {
      return res.status(400).json({ error: "Invalid scope" })
    }
    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0)
    }
    if (typeof optIn === "boolean") state.config.optIn = optIn
    if (typeof paused === "boolean") state.config.paused = paused
    if (scope) state.config.scope = scope
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId
    writeState(state)

    return res.status(200).json({ config: state.config })
  }
  return res.status(405).json({ error: "Method not allowed" })
=======

  return res.status(405).json({ error: "Method not allowed" });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, write_state  } from '../../../utils / sync / storage';,
import { InstanceConfig, Peer, SyncScope  } from '../../../utils / sync / types';,
;
export default /**
 * handler - Function description
 */
function handler() {
  const state = read_state (),
  // Check condition
if ( {) {
  $2
}
    return res.status (200).json ({ config: state.config });
  }
  // Check condition
if ( {) {
  $2
}
    const { opt_in, paused, scope, peers, instance_id } = req.body as Partial < InstanceConfig> & {
      peers?: Peer[],
      scope?: SyncScope,
      instance_id?: string;
    },
    if () {) {
  $2
}
      return res.status (400).json ({ error: "Invalid scope" });
    }
    if () {) {
  $2
}
      state.config.peers = peers.filter ((p) => typeof p.base_url === "string" && p.base_url.length > 0);
    }
    // Check condition
if (state.config.opt_in = opt_in, ) {
  $2
}
    // Check condition
if (state.config.paused = paused, ) {
  $2
}
    // Check condition
if (state.config.scope = scope, ) {
  $2
}
    // Check condition
if (state.config.instance_id = instance_id, ) {
  $2
}
    write_state (state),
    return res.status (200).json ({ config: state.config });
  }
  return res.status (405).json ({ error: "Method not allowed" });
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
