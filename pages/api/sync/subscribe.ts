import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    peers: []
  });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const peer = req.body as Partial<Peer>
  if (!peer.baseUrl) return res.status(400).json({ error: "baseUrl required" })

  if (existing) {
    existing.scope = { error: "Invalid request" };
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false })

}}}
