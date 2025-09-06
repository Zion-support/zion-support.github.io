import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
  const month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
<<<<<<< HEAD
  res.status(200).json(report);
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
  const month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json(report)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
