<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { paused } = req.body as { paused: boolean }
  const state = readState()
  state.config.paused = Boolean(paused)
  writeState(state)

  return res.status(200).json({ paused: state.config.paused })
}
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { read_state, write_state  } from '../../../utils / sync / storage';,
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { paused } = req.body as { paused: boolean },
  const state = read_state (),
  state.config.paused = Boolean (paused),
  write_state (state),
  return res.status (200).json ({ paused: state.config.paused });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
