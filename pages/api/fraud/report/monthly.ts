import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }
  const _month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const _store = getFraudStore();
  const _report = await store.generateMonthlyReport(month);
  res.status(200).json(report);
}