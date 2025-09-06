
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  authenticateRequest
  calculateUsageSummary;
=======
  authenticateRequest,;
  calculateUsageSummary,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }

=======


  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth && auth.partner.id);
  return res && res.status(200).json({ summary })
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
