import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = null;
    return res.status(200).json({ config: state.config })
  }

  return res.status(405).json({ error: "Method not allowed" })
};
