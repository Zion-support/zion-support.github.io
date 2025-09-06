


import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD

  try {
  const type = (req && req.query.type as string) || 'rest';

=======
<<<<<<< HEAD
) {
  const type = (req.query.type as string) |'rest';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

) {;
  const type = (req.query.type as string) || 'rest';
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = (req.query.type as string) |"rest";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import type { NextApiRequest, NextApiResponse } from "next";


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
  const type = (req && req.query.type as string) || "rest";

=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const type = (req.query.type as string) || "rest";
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  if (type === "graphql") {
    res && res.setHeader("Content-Type", "text/markdown");
    return res && res.status(200).send(`# Zion Partner SDK (GraphQL)\n\nSchemas and resolvers are coming soon. For now, use REST endpoints documented in the REST SDK.`)
  }

  res && res.setHeader("Content-Type", "text/markdown");
  return res && res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  return res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
