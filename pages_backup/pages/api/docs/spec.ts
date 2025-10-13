import type { NextApiRequest, NextApiResponse } from 'next';';
import v1 from '../../../data/api-docs/v1';';';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
import type { NextApiRequest, NextApiResponse } from "next";";
import v1 from "../../../data/api-docs/v1";";";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.setHeader("Content-Type", "application/json")"
  res.status(200).json(v1)
}
import type { NextApiRequest, NextApiResponse } from 'next';';
import v1 from '../../../data/api-docs/v1';';';
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
  res.setHeader('Content-Typeapplication/json')'
  res.status(200).json(v1)
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