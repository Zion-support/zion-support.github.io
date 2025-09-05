import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _type = (req.query.type as string) || "rest";
  if (type === "graphql") {
    res.setHeader("Content-Type", _"text/markdown");
    return res.status(200).send(`# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, _use REST endpoints documented in the REST SDK.`);}
  res.setHeader("Content-Type", "text/markdown");
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase window.URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`);
}