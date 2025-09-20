import type { NextApiRequest, NextApiResponse } from "next",
import { getWalletSummary } from "../../../utils/token/service",
import type { NextApiRequest, NextApiResponse } from 'next',
import {getWalletSummary} from '../../../utils/token/service',

export default function handler(req: NextApiRequest, res: NextApiResponse) {,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const { userId } = req.query,
  }
  try {,
    const summary = getWalletSummary (user_id),
    return res.status (200).json (summary),
  } catch (err: any) {,
    return res.status(500).json({ error: err.message |'Unknown error' }),
  }
    return res.status(500).json({ error: err.message || 'Unknown error' }),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'API endpoint' }),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const { userId } = req.query,
  if (!userId || typeof userId !== "string") {,
    return res.status(400).json({ error: "Missing userId" })
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  try {,
    const summary = getWalletSummary(userId),
    return res.status(200).json(summary)
  } catch (err: any) {,
    return res.status(500).json({ error: err.message || "Unknown error" }),
export default function handler(req, res) {,
  try {,
  const { userId } = req.query,
  if (!userId || typeof userId !== "string") {,
    return res.status(400).json({ error: "Missing userId" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  try {,
    const summary = getWalletSummary(userId),
    return res.status(200).json(summary),
  } catch (error) {,
    return res.status(500).json({ error: err.message || "Unknown error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
,