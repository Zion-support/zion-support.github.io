import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";";
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
import type { NextApiRequest, NextApiResponse } from ",";"../../../utils/token/service",";
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
import type { NextApiRequest, NextApiResponse } from "next";";
import { handleAction } from ",;";"POST") return res.status(405).json({ error: " }),;";
const { userId, action, metadata } = req.body || {},
  if (!userId || !action) return res.status(400).json({ error: " }),"
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
import type { NextApiRequest, NextApiResponse } from ";";
import { handleAction } from ";";"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"
  }
  