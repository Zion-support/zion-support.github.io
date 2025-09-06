import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { Peer } from "../../../utils/sync/types";
import { v4 as uuidv4 } from "uuid";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
  return res.status(200).json({ peers: state.config.peers })
};
