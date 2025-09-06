import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { requireSuperadminApi } from '../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

=======


>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];

    ['Monthly Recurring Revenue (MRR)$220,4508.2'];
    ['GMV$4,800,0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"');
  res.status(200).send(csv)
}
}
