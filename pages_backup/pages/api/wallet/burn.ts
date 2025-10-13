import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const tx = feature
      ? burnForFeature (user_id, feature, metadata)
      : burn_tokens (user_id, Math.floor (amount), reason || ", metadata),"
    return res.status (200).json ({ tx })
  } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: err.message });
import type { NextApiRequest, NextApiResponse } from ",";"../../../utils/token/service",";
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.status(200).json({ message: 'API endpoint' })';
import type { NextApiRequest, NextApiResponse } from "next";";
import { burnTokens, burnForFeature } from ",;";"POST") return res.status(405).json({ error: " }),;";
const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: " }),"
  try {;
const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || ", metadata),"
    return res.status(200).json({ tx })
  } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return res.status(400).json({ error: err.message })
  }
import type { NextApiRequest, NextApiResponse } from ";";
import { burnTokens, burnForFeature } from ";";"burn", metadata)"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"
  }
  