import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json($2);
  const { paused } = req.body as { paused: boolean},
  const state = readState($2);
  state.config.paused = Boolean($2);
  writeState($2);
  return res.status(200).json({ paused: state.config.paused })
}