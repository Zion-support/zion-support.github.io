import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json($2);
  const state = readState($2);
  const peer = $2;
  if (!peer.baseUrl) return res.status(400).json($2);
  const id = peer.id || uuidv4($2);
  const existing = $2;
  if (existing) {
    existing.scope = $2;
    existing.paused = typeof peer.paused === "boolean" ? peer.paused : existing.paused
  } else {
    state.config.peers.push({ id, baseUrl: peer.baseUrl, scope: peer.scope || state.config.scope, paused: false})
  }

  writeState($2);
  return res.status(200).json({ peers: state.config.peers })
}