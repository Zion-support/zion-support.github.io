import type { NextApiRequest, NextApiResponse } from "next";";
import { handleAction } from "../../../utils/token/service";";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: err.message });
import type { NextApiRequest, NextApiResponse } from "next",";";
import { handleAction } from "../../../utils/token/service",";";
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(200).json({ tx: 'transaction-id' })'
  } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(400).json({
  // TODO: Add properties
}
  // TODO: Add properties
}
      error: err.message
    });
import type { NextApiRequest, NextApiResponse } from "next",";";
import { handleAction } from "../../../utils/token/service",;";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),;";
const { userId, action, metadata } = req.body || {},
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" }),"
  try {;
const tx = handleAction(userId, action, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: err.message })
  }
}
import type { NextApiRequest, NextApiResponse } from "next";";
import { handleAction } from "../../../utils/token/service";";";
export default function handler(req, res) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });';
const { userId, action, metadata } = req.body || {}
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });';
const tx = handleAction(userId, action, metadata)
    return res.status(200).json({ tx })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: err.message })
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  }
}
