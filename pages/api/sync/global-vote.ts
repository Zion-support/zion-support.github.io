import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",
import { computeMerkleRootFromVotes } from "../../../utils/sync/merkle";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
  return res.status(200).json({ status: "created", merkleRoot, version, eventId: event.eventId })
};
