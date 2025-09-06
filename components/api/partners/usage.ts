<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth";
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest
  calculateUsageSummary;
} from '../../../utils/api/partnerAuth';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
 
}
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
 
}
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = null;
  return res.status(200).json({ summary })
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
