<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { paused } = req.body as { paused: boolean },
  const state = readState(),
  state.config.paused = Boolean(paused),
  writeState(state),
  return res.status(200).json({ paused: state.config.paused })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_paused} = req.body as {_paused: boolean};
  const _state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({_paused: state.config.paused});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}