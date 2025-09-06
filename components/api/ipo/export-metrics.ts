import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { requireSuperadminApi } from '../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======





=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];

=======
=======
import { requireSuperadminApi } from '../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  if (!requireSuperadminApi(req, res)) return;

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const rows = [
    ['MetricValueTrend%'];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ['Monthly Recurring Revenue (MRR)$220,4508.2'];
    ['GMV$4,800,0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"');
  res.status(200).send(csv)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
}
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
<<<<<<< HEAD

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const rows = [;
    ['Metric', 'Value', 'Trend%'],
    ['Monthly Recurring Revenue (MRR)', '$220, 450', '8.2'],
    ['GMV', '$4, 800, 000', '5.1'],
    ['Active users (monthly)', '18452', '3.9'],
    ['Active users (TTM)', '162340', '12.4'],
    ['Churn rate', '2.4%', '-0.3'],
    ['CAC / LTV ratio', '1:5.6', '0.4'],
  ];
  const csv = rows.map (r => r.map (v => String (v)).join (', ')).join ('\n');
  res.set_header ('Content - Type', 'text / csv');
  res.set_header (
    'Content - Disposition',
    'attachment; filename="ipo - metrics.csv"');
  res.status (200).send (csv);    ['MetricValueTrend%'];
    ['Monthly Recurring Revenue (MRR)$220, 4508.2'];
    ['GMV$4, 800, 0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC / LTV ratio1: 5.60.4']], const csv = rows.map (r => r.map (v => String (v)).join ()).join ('\n'),  res.set_header ('Content - Typetext / csv');
  res.set_header ('Content - Dispositionattachment, filename="ipo - metrics.csv"');
  res.status (200).send (csv);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
