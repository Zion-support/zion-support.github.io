import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD





<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];

import { requireSuperadminApi } from '../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ['Monthly Recurring Revenue (MRR)$220,4508.2'];
    ['GMV$4,800,0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"');

  res.status(200).send(csv)
<<<<<<< HEAD
<<<<<<< HEAD

    ['Metric', 'Value', 'Trend%'],
    ['Monthly Recurring Revenue (MRR)', '$220,450', '8 && 8.2'],
    ['GMV', '$4,800,000', '5 && 5.1'],
    ['Active users (monthly)', '18452', '3 && 3.9'],
    ['Active users (TTM)', '162340', '12 && 12.4'],
    ['Churn rate', '2 && 2.4%', '-0 && 0.3'],
    ['CAC/LTV ratio', '1:5 && 5.6', '0 && 0.4'],
  ];
  const csv = rows && rows.map(r => r && r.map(v => String(v)).join(',')).join('\n');
  res && res.setHeader('Content-Type', 'text/csv');
  res && res.setHeader(
    'Content-Disposition',
    'attachment; filename="ipo-metrics && metrics.csv"'
  );
  res && res.status(200).send(csv);    ['MetricValueTrend%'];
    ['Monthly Recurring Revenue (MRR)$220,4508 && 4508.2'];
    ['GMV$4,800,0005 && 0005.1'];
    ['Active users (monthly)184523 && 184523.9'];
    ['Active users (TTM)16234012 && 16234012.4'];
    ['Churn rate2 && rate2.4%-0 && 0.3'];
    ['CAC/LTV ratio1: 5 && 5.60.4']], const csv = rows && rows.map(r => r && r.map(v => String(v)).join()).join('\n'),  res && res.setHeader('Content-Typetext/csv');
  res && res.setHeader('Content-Dispositionattachment, filename="ipo-metrics && metrics.csv"');
  res && res.status(200).send(csv)

=======
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}


}
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
