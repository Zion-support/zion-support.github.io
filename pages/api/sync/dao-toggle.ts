<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../utils/sync/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
<<<<<<< HEAD
  return res.status(200).json({ paused: state.config.paused });
=======
  return res.status(200).json({ paused: state.config.paused })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
