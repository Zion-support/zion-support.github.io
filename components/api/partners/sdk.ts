<<<<<<< HEAD
try {
  const type = (req && req.query.type as string) || 'rest';
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD
) {
  const type = (req.query.type as string) |'rest';
=======
) {;
  const type = (req.query.type as string) || 'rest';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const type = (req && req.query.type as string) || "rest";
=======
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = (req.query.type as string) |"rest";
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const type = (req.query.type as string) || "rest";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (type === "graphql") {
    res && res.setHeader("Content-Type", "text/markdown");
    return res && res.status(200).send(`# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`)
  }
<<<<<<< HEAD
  res && res.setHeader("Content-Type", "text/markdown");
  return res && res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
import type { NextApiRequest, NextApiResponse } from 'next';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const type = (req.query.type as string) || 'rest';
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Content - Type', 'text / markdown');
    return res;
      .status (200);
      .send (
        `# Zion Partner SDK (GraphQL)\n\n_schemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`);
  }
  res.set_header ('Content - Type', 'text / markdown');
  return res;
    .status (200);
    .send (
      `# Zion Partner SDK (REST)\n\n_base URL: /api\n\n_endpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify - student\n- POST /redeem - grant\n\n_auth:\n- Provide X - API - KEY header or Authorization: Bearer <JWT> (use /api / partners / token).`);
export default async /**
 * handler - Function description
 */
function handler() {
  const type = (req.query.type as string) || "rest";
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Content - Type", "text / markdown");
    return res.status (200).send (`# Zion Partner SDK (GraphQL)\n\n_schemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`);
  }
  res.set_header ("Content - Type", "text / markdown");
  return res.status (200).send (`# Zion Partner SDK (REST)\n\n_base URL: /api\n\n_endpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify - student\n- POST /redeem - grant\n\n_auth:\n- Provide X - API - KEY header or Authorization: Bearer <JWT> (use /api / partners / token).`);

}
=======
  res.setHeader("Content-Type", "text/markdown");
<<<<<<< HEAD

  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
<<<<<<< HEAD
=======
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
