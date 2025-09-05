import type {_NextApiRequest, _NextApiResponse} from "next";

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