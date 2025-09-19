import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  return res.status(200).json({ peers: state.config.peers ,}),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({,
    peers: [],});
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" ,});
  const state = readState();
  const peer = req.body as Partial<Peer>;
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" ,});
  const id = peer.id || uuidv4();
  const existing = state.config.peers.find((p) => p.baseUrl === peer.baseUrl);
  if (existing) {,
    existing.scope = peer.scope || existing.scope;
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused,
  } else {,
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false ,}),
export default function handler(req, res) {,
  try {,
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false ,});
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
  writeState(state);
  return res.status(200).json({ peers: state.config.peers ,});
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