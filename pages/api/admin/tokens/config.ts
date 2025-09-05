import type { NextApiRequest, NextApiResponse } from "next",
import { getConfig } from "../../../../utils/token/service",
import { tokenStore } from "../../../../utils/token/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
  if (req.method === "POST") {
    const body = req.body || {},
    const current = tokenStore.getConfig(),
    const updated = { ...current, ...body },
    tokenStore.setConfig(updated),
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === "GET") {
    return res.status(200).json(getConfig());}
  if (req.method === "POST") {_const _body = req.body || {};
    const _current = tokenStore.getConfig();
    const _updated = {_...current, _...body};
    tokenStore.setConfig(updated);
    return res.status(200).json(updated);
  }
  return res.status(405).json({_error: "Method not allowed"});
}