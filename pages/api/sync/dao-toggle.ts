<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../utils/sync/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status($1).json({$2});
  const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
