<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest,;
  calculateUsageSummary,;
} from '../../../utils/api/partnerAuth';
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
  const auth = null;
  return res.status(200).json({ summary })
}
=======
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary })
}
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
