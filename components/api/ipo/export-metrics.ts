import type { NextApiRequest, NextApiResponse } from 'next';
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
}