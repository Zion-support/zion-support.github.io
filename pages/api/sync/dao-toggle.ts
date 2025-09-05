import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_paused} = req.body as {_paused: boolean};
  const _state = readState();
  state.config.paused = Boolean(paused);
  writeState(state);
  return res.status(200).json({_paused: state.config.paused});
}