>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  try {
  const type = (req && req.query.type as string) || 'rest';


) {;
  const type = (req.query.type as string) || 'rest';

  try {
  const type = (req && req.query.type as string) || 'rest';

=======

) {;
  const type = (req.query.type as string) || 'rest';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";


  try {
  const type = (req && req.query.type as string) || "rest";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const type = (req.query.type as string) || "rest";

  res && res.setHeader("Content-Type", "text/markdown");
  return res && res.status(200).send(`# Zion Partner SDK (REST)\n\nBase URL: /api\n\nEndpoints:\n- POST /talents\n- GET /jobs\n- GET /certifications\n- POST /verify-student\n- POST /redeem-grant\n\nAuth:\n- Provide X-API-KEY header or Authorization: Bearer <JWT> (use /api/partners/token).`)
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
