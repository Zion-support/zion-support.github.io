
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = null;

  const type = (req.query.type as string) || 'rest';

) {'
  if (type === 'graphql') {'
    res && res.setHeader('Content-Type', 'text/markdown');
    return res;
      .status(200)
      .send(
        `# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`
      );
  }'
  res && res.setHeader('Content-Type', 'text/markdown');
  return res;
    .status(200)
    .send(`
      `# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`
    );

import type { NextApiRequest, NextApiResponse } from "next";

import type { NextApiRequest, NextApiResponse } from 'next';
;
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
if ( {) {}
  $2;
}'
    res.set_header ('Content - Type', 'text / markdown');
    return res;
      .status (200);
      .send (`
        `# Zion Partner SDK (GraphQL)\n\n_schemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`);
  }'
  res.set_header ('Content - Type', 'text / markdown');
  return res;
    .status (200);
    .send (`
      `# Zion Partner SDK (REST)\n\n_base URL: /api\n\n_endpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify - student\n- POST /redeem - grant\n\n_auth:\n- Provide X - API - KEY header or Authorization: Bearer <JWT> (use /api / partners / token).`);
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
if ( {) {}
  $2;
}"
    res.set_header ("Content - Type", "text / markdown");`
    return res.status (200).send (`# Zion Partner SDK (GraphQL)\n\n_schemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`);
  }"
  res.set_header ("Content - Type", "text / markdown");`
  return res.status (200).send (`# Zion Partner SDK (REST)\n\n_base URL: /api\n\n_endpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify - student\n- POST /redeem - grant\n\n_auth:\n- Provide X - API - KEY header or Authorization: Bearer <JWT> (use /api / partners / token).`);

