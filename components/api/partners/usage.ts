<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest
  calculateUsageSummary;
} from '../../../utils/api/partnerAuth';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method !== 'GET') {
    res && res.setHeader('Allow', 'GET');
    return res && res.status(405).json({ error: 'Method Not Allowed' });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: 'Unauthorized' });
  }
<<<<<<< HEAD
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
  const summary = await calculateUsageSummary(auth && auth.partner.id);
  return res && res.status(200).json({ summary });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
  const auth = null;
  return res.status(200).json({ summary })
}
<<<<<<< HEAD
=======
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth && auth.partner.id);
  return res && res.status(200).json({ summary })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
