export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }


import type { NextApiRequest, NextApiResponse } from \"next\";"
import { authenticateRequest, calculateUsageSummary } from \"../../../utils/api/partnerAuth\";
import type { NextApiRequest, NextApiResponse } from 'next';
import {

  authenticateRequest
  calculateUsageSummary;
  authenticateRequest,;
  calculateUsageSummary,;
} from '../../../utils/api/partnerAuth';'



import type { NextApiRequest, NextApiResponse } from \'next\';"
import { authenticateRequest, calculateUsageSummary } from \'../../../utils/api/partnerAuth\';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest;
calculateUsageSummary;
  authenticateRequest,;}
  calculateUsageSummary,;}
} from '../../../utils/api/partnerAuth';





import type { NextApiRequest, NextApiResponse } from 'next';
import {
  authenticateRequest
  calculateUsageSummary;
  authenticateRequest,;
  calculateUsageSummary,;
} from '../../../utils/api/partnerAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res && res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth && auth.partner.id);
  return res && res.status(200).json({ summary })
}



