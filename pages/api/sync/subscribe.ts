<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { Peer } from "../../../utils/sync/types",;
import { v4 as uuidv4 } from "uuid",;

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
  res.status(200).json({
    peers: []
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { Peer } from "../../../utils/sync/types",
import { v4 as uuidv4 } from "uuid",


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  return res.status(200).json({ peers: state.config.peers })
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { Peer } from "../../../utils/sync/types",;
import { v4 as uuidv4 } from "uuid",;
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
import { Peer } from "../../../utils/sync/types",;
import { v4 as uuidv4 } from "uuid",;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    peers: []
  });
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
import { Peer } from "../../../utils/sync/types",
import { v4 as uuidv4 } from "uuid",
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const state = readState(),
  const peer = req.body as Partial<Peer>,
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" }),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const id = peer.id || uuidv4(),
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl),
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const peer = req.body as Partial<Peer>
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" })

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  if (existing) {
    existing.scope = peer.scope || existing.scope,
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })
<<<<<<< HEAD
<<<<<<< HEAD
  }

  writeState(state),
  return res.status(200).json({ peers: state.config.peers });
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
}
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
}


<<<<<<< HEAD
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  writeState(state),
  return res.status(200).json({ peers: state.config.peers })
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
