<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = (req.query.type as string) || "rest",
  if (type === "graphql") {
    res.setHeader("Content-Type", "text/markdown"),
    return res.status(200).send(`# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`)
  }
  res.setHeader("Content-Type", "text/markdown"),
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = (req.query.type as string) || &quot;rest&quot;;
  if (type === &quot;graphql&quot;) {
    res.setHeader(&quot;Content-Type&quot;, &quot;text/markdown&quot;);
    return res.status(200).send(`# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`);
  }
  res.setHeader(&quot;Content-Type&quot;, &quot;text/markdown&quot;);
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}