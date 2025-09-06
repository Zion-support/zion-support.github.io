import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
;

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState } from "../../../utils/sync/storage"


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { paused } = req.body as { paused: boolean }
  const state = readState()
  state.config.paused = Boolean(paused)
  writeState(state)
  return res.status(200).json({ paused: state.config.paused })
};