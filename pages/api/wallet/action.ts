
import type { NextApiRequest, NextApiResponse } from "next",import { handleAction } from "../../../utils/token/service",export default function handler() {import type { NextApiRequest, NextApiResponse } from 'next';
import { handleAction  } from '../../../utils/token/service';
export default function handler(req: NextApiRequest, res: NextApiResponse) {} catch (err: any) {return res.status(400).json({ error: err.message })export default function handler() {try {res.status(200).json({ tx: 'transaction-id' })} catch (err: any) {} catch (err: any) {}}res.status(400).json({error: err.message;
    })export default function handler() {if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),const { userId, action, metadata } = req.body || {},if (!userId || !action) return res.status(400).json({ error: "userId and action required" }),try {const tx = handleAction(userId, action, metadata),return res.status(200).json({ tx })} catch (err: any) {return res.status(400).json({ error: err.message })}
}export default function handler() {return res.status(200).json({ tx })} catch (err: any) {return res.status(400).json({ error: err.message })}
}if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })const { userId, action, metadata } = req.body || {}
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" })try {const tx = handleAction(userId, action, metadata)if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })const { userId, action, metadata } = req.body || {},if (!userId || !action) return res.status(400).json({ error: "userId and action required" })try {const tx  = null;return res.status(200).json({ tx })} catch (err: any) {return res.status(400).json({ error: err.message })export default function handler() {try {if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })const { userId, action, metadata } = req.body || {}if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })const tx = handleAction(userId, action, metadata)return res.status(200).json({ tx })} catch (error) {return res.status(400).json({ error: err.message })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  }
}
  }
}
  }
}}
}