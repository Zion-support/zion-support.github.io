import type { NextApiRequest, NextApiResponse } from "next";";
import { burnTokens, burnForFeature } from "../../../utils/token/service";";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const tx = feature
      ? burnForFeature (user_id, feature, metadata)
      : burn_tokens (user_id, Math.floor (amount), reason || "burn", metadata),"
    return res.status (200).json ({ tx })
  } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: err.message });
import type { NextApiRequest, NextApiResponse } from "next",";";
import { burnTokens, burnForFeature } from "../../../utils/token/service",";";
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.status(200).json({ message: 'API endpoint' })';
import type { NextApiRequest, NextApiResponse } from "next",";";
import { burnTokens, burnForFeature } from "../../../utils/token/service",;";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),;";
const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: "userId required" }),"
  try {;
const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || "burn", metadata),"
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
import { burnTokens, burnForFeature } from "../../../utils/token/service";";";
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
const { userId, amount, reason, feature, metadata } = req.body || {}
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })'
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || "burn", metadata)"
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
