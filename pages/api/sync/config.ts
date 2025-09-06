<<<<<<< HEAD
=======


=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",;
;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function handler(req: NextApiRequest, res: NextApiResponse) {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
  if (req.method === "GET") {

    return res.status(200).json({ config: state.config })
  }

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
  }

=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
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
    if (typeof optIn === "boolean") state.config.optIn = optIn
    if (typeof paused === "boolean") state.config.paused = paused
    if (scope) state.config.scope = scope
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId
    writeState(state)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return res.status(200).json({ config: state.config })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


  return res.status(405).json({ error: "Method not allowed" });
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
  return res.status(405).json({ error: "Method not allowed" })
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _state = readState();

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types";
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types",;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
  }

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  if (req.method === "GET") {
    return res.status(200).json({ config: state.config })
  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[],
      scope?: SyncScope,
      instanceId?: string
    },


    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0)
    }
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
    if (typeof optIn === "boolean") state.config.optIn = optIn,
    if (typeof paused === "boolean") state.config.paused = paused,
    if (scope) state.config.scope = scope,
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId,

    writeState(state),
    return res.status(200).json({ config: state.config })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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

  return res.status(405).json({ error: "Method not allowed" });
};


  return res.status(405).json({ error: "Method not allowed" });
};

}
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
}


}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
