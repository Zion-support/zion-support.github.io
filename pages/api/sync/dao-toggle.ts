import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { readState, writeState } from &quot;../../../utils/sync/storage&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) return res.status(405).json({ error: &quot;Method not allowed&quot; });
  const { paused } = req.body as { paused: boolean };
  const state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({ paused: state.config.paused });
}