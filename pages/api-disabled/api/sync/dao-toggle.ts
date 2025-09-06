import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
;
;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";


export default function handler($2) {;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { paused } = req.body as { paused: boolean }
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused })
};