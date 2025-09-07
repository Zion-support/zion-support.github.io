import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json($2);
    return
  }
  const month = (req.query.month as string) || new Date().toISOString().slice($2);
  const store = getFraudStore($2);
  const report = await store.generateMonthlyReport($2);
  res.status(200).json(report)
}