import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
<<<<<<< HEAD
  const month =
    (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report);
=======
  const month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report)
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
