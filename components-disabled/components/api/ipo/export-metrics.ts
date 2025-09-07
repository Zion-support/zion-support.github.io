import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/ipo/export-metrics.ts
<<<<<<< HEAD
export default function handler() {if (!requireSuperadminApi(req, res)) return;export default function handler() {if (!requireSuperadminApi(req, res)) return;const rows = [;
    ['MetricValueTrend%'];import { requireSuperadminApi  } from '../../../utils/api/auth';
export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;const rows = [;
    ['MetricValueTrend%'];
export default function handler() {if (!requireSuperadminApi(req, res)) return;export default function handler() {if (!requireSuperadminApi(req, res)) return;




=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd:components-disabled/components/api/ipo/export-metrics.ts

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const rows = [
    ['MetricValueTrend%'];
<<<<<<< HEAD

import { requireSuperadminApi } from '../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    ['Monthly Recurring Revenue (MRR)$220,4508.2'];
    ['GMV$4,800,0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"');
<<<<<<< HEAD:components/api/ipo/export-metrics.ts
  res.status(200).send(csv)
<<<<<<< HEAD

=======

  res.status(200).send(csv);
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd:components-disabled/components/api/ipo/export-metrics.ts
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
<<<<<<< HEAD:components/api/ipo/export-metrics.ts
  res && res.status(200).send(csv)

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
  res && res.status(200).send(csv);
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd:components-disabled/components/api/ipo/export-metrics.ts
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
<<<<<<< HEAD:components/api/ipo/export-metrics.ts
}
<<<<<<< HEAD
}



}


}
}
}
=======
}
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd:components-disabled/components/api/ipo/export-metrics.ts
