>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });";
const { userId, amount, reason, metadata } = req.body |{}
  if (!userId |typeof amount !== "number" |!reason) {"
    return res.status(400).json({ error: "userId, amount, reason required" })"
  }
  try {;
const tx = earnTokens(userId, Math.floor(amount), reason, metadata)
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
import { earnTokens } from "../../../utils/token/service";";";
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
const { userId, amount, reason, metadata } = req.body || {}
  if (!userId || typeof amount !== "number" || !reason) {"
    return res.status(400).json({ error: "userId, amount, reason required" })"
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
}
  try {;
const tx = earnTokens(userId, Math.floor(amount), reason, metadata)
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
