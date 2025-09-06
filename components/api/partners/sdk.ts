import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = null;
origin/cursor/automate-test-improve-and-merge-code-2533
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse

  try {
  const type = (req && req.query.type as string) || 'rest';

) {;
  const type = (req.query.type as string) || 'rest';

) {
  if (type === 'graphql') {
    res && res.setHeader('Content-Type', 'text/markdown');
    return res
      .status(200)
      .send(
        `# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`
      );
  }
  res && res.setHeader('Content-Type', 'text/markdown');
  return res
    .status(200)
    .send(
      `# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`
    );
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
origin/cursor/automate-test-improve-and-merge-code-2533
