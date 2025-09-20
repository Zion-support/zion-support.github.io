import type { NextApiRequest, NextApiResponse } from "next",
import { readState } from "../../../../lib/integrations/fileStore",
import type { NextApiRequest, NextApiResponse } from 'next',
import { readState } from '../../../../lib/integrations/fileStore',
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req && req.method !== "GET"),
    return res && res.status(405).json({ error: "Method not allowed" }),
  const { since } = req && req.query as { since?: string },
  const state = readState(),
  const sinceTs = since ? Number(since) : 0,
  const events = state.events.filter(,
    (e) => e.type === "zion.talent.matched" && e.timestamp > sinceTs,
  ),
  res.status(200).json({ events }),
}
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'API endpoint' }),
export default function handler(req, res) {,
  try {,
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' }),
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }

}

}
,
  const { since } = req.query as { since?: string }
  const state = read_state (),
  const since_ts = since ? Number (since) : 0,
  const events = state.events.filter (,
    (e) => e.type === "zion.talent.matched" && e.timestamp > since_ts,
  ),
  res.status (200).json ({ events }),
}
,