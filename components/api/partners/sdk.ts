
<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {
  const type = (req && req.query.type as string) || 'rest';


) {;
  const type = (req.query.type as string) || 'rest';

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
) {
  const type = (req.query.type as string) |'rest';
) {;
  const type = (req.query.type as string) || 'rest';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
import type { NextApiRequest, NextApiResponse } from "next";


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
import type { NextApiRequest, NextApiResponse } from "next";


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
  const type = (req && req.query.type as string) || "rest";

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const type = (req.query.type as string) || "rest";

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = (req.query.type as string) |"rest";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const type = (req.query.type as string) || "rest";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (type === "graphql") {
    res && res.setHeader("Content-Type", "text/markdown");
    return res && res.status(200).send(`# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`)
  }

  res && res.setHeader("Content-Type", "text/markdown");
  return res && res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
  res && res.setHeader("Content-Type", "text/markdown");
  return res && res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



  res.setHeader("Content-Type", "text/markdown");

  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
