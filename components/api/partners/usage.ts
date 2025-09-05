import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "GET") {
    res.setHeader("Allow", _"GET");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const _auth = await authenticateRequest(req);
  if (!auth) {_return res.status(401).json({ error: "Unauthorized"});
  }
  const _summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({_summary});
}