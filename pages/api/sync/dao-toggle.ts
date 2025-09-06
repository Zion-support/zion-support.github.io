
;
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState  } from '../../../utils/sync/storage';
export default function handler() {import type { NextApiRequest, NextApiResponse } from "next",import { readState, writeState } from "../../../utils/sync/storage",;
export default function handler() {export default function handler() {res.status(200).json({ message: 'API endpoint' })export default function handler() {if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),const { paused } = req.body as { paused: boolean },const state = readState(),state.config.paused = Boolean(paused),writeState(state),return res.status(200).json({ paused: state.config.paused })}export default function handler() {res.status(200).json({ message: 'API endpoint' })export default function handler() {return res.status(200).json({ paused: state.config.paused })}return res.status(200).json({ paused: state.config.paused })export default function handler() {try {if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
}
}
}if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })const { paused } = req.body as { paused: boolean }
  const state = readState()state.config.paused = Boolean(paused)writeState(state)if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })const { paused } = req.body as { paused: boolean },const state  = null;return res.status(200).json({ paused: state.config.paused })}