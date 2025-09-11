import type { NextApiRequest, NextApiResponse } from 'next';





  const rows = [
    ['MetricValueTrend%'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

=======
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];=======    ['Monthly Recurring Revenue (MRR)$220,4508.2'];
    ['GMV$4,800,0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"');
  res.status(200).send(csv)
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

=======import { requireSuperadminApi } from '../../../utils / api / auth';
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

}
}
}
==============

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
