import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return res.status(200).json({ paused: state.config.paused });
import type { NextApiRequest, NextApiResponse } from ",";"../../../utils/sync/storage",";
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.status(200).json({ message: 'API endpoint' })';
import type { NextApiRequest, NextApiResponse } from "next";";
import { readState, writeState } from ",;";"POST") return res.status(405).json({ error: " }),;";
const { paused } = req.body as { paused: boolean },;
const state = readState(),
  state.config.paused = Boolean(paused),
  writeState(state),
  return res.status(200).json({ paused: state.config.paused })
}
  return res.status(200).json({ paused: state.config.paused });
import type { NextApiRequest, NextApiResponse } from ";";
import { readState, writeState } from ";";"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"
  }
