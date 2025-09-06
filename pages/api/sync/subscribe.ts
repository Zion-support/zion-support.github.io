<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { Peer } from "../../../utils/sync/types",;
import { v4 as uuidv4 } from "uuid",;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    peers: []
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { Peer } from "../../../utils/sync/types",
import { v4 as uuidv4 } from "uuid",

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const peer = req.body as Partial<Peer>,
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" }),

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const id = peer.id || uuidv4(),
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl),
  if (existing) {
    existing.scope = peer.scope || existing.scope,
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false });
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
=======
<<<<<<< HEAD
}
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, write_state  } from '../../../utils / sync / storage';,
import { Peer  } from '../../../utils / sync / types';,
import { v4 as uuidv4  } from './uuid';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const state = read_state (),
  const peer = req.body as Partial < Peer>,
  if (return res.status (400).json ({ error: "base_url required" }), ) {
  $2
}
  const id = peer.id || uuidv4 (),
  const existing = state.config.peers.find ((p) => p.base_url === peer.base_url),
  // Check condition
if ( {) {
  $2
}
    existing.scope = peer.scope || existing.scope,
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused;
  } else {
    state.config.peers.push ({ id, base_url: peer.base_url, scope: peer.scope || state.config.scope, paused: false });
  }
  write_state (state),
  return res.status (200).json ({ peers: state.config.peers });
}
;

  const id = peer.id || uuidv4()
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl)
  if (existing) {
    existing.scope = peer.scope || existing.scope,
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })
  }

  writeState(state),
  return res.status(200).json({ peers: state.config.peers })
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })
  }

  writeState(state),
  return res.status(200).json({ peers: state.config.peers })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});

  const _state = readState();
  const _peer = req.body as Partial<Peer>;
  if (!peer.baseUrl) return res.status(400).json({_error: "baseUrl required"});

  const _id = peer.id || uuidv4();
  const _existing = state.config.peers.find(_(p) => p.baseUrl === peer.baseUrl);
  if (existing) {_existing.scope = peer.scope || existing.scope;
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused;} else {_state.config.peers.push({ id, _baseUrl: peer.baseUrl, _scope: peer.scope || state.config.scope, _paused: false});
  }

  writeState(state);
  return res.status(200).json({_peers: state.config.peers});
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

}

<<<<<<< HEAD
=======
  return res.status(200).json({ peers: state.config.peers })
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { Peer } from "../../../utils/sync/types",;
import { v4 as uuidv4 } from "uuid",;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    peers: []
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { Peer } from "../../../utils/sync/types",
import { v4 as uuidv4 } from "uuid",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const peer = req.body as Partial<Peer>,
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" }),

  const id = peer.id || uuidv4(),
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl),
  if (existing) {
    existing.scope = peer.scope || existing.scope,
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })
  }

  writeState(state),
  return res.status(200).json({ peers: state.config.peers });
};
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false });
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  writeState(state);
  return res.status(200).json({ peers: state.config.peers });
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
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
