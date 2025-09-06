import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = null;
      lastSyncedAt: state.lastSyncedAt})
  }

  return res.status(405).json({ error: "Method not allowed" })
};
