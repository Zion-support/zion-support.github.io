<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { paused } = req.body as { paused: boolean },
  const state = null;
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { paused } = req.body as { paused: boolean }
  const state = readState()
  state.config.paused = Boolean(paused)
  writeState(state)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ paused: state.config.paused })
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../utils/sync/storage';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
