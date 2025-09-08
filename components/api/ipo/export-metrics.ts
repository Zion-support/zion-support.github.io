import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
export default function handler() {if (!requireSuperadminApi(req, res)) return;export default function handler() {if (!requireSuperadminApi(req, res)) return;const rows = [;
    ['MetricValueTrend%'];import { requireSuperadminApi  } from '../../../utils/api/auth';
export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;const rows = [;
    ['MetricValueTrend%'];
export default function handler() {if (!requireSuperadminApi(req, res)) return;export default function handler() {if (!requireSuperadminApi(req, res)) return;
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD


=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];


<<<<<<< HEAD



=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const rows = [
    ['MetricValueTrend%'];




export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ['Monthly Recurring Revenue (MRR)$220,4508.2'];
    ['GMV$4,800,0005.1'];
    ['Active users (monthly)184523.9'];
    ['Active users (TTM)16234012.4'];
    ['Churn rate2.4%-0.3'];
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');
  res.setHeader('Content-Dispositionattachment, filename='ipo-metrics.csv'');

  res.status(200).send(csv)

<<<<<<< HEAD



=======


    ['Metric', 'Value', 'Trend%'],
    ['Monthly Recurring Revenue (MRR)', '$220,450', '8 && 8.2'],
    ['GMV', '$4,800,000', '5 && 5.1'],
    ['Active users (monthly)', '18452', '3 && 3.9'],
    ['Active users (TTM)', '162340', '12 && 12.4'],
    ['Churn rate', '2 && 2.4%', '-0 && 0.3'],
    ['CAC/LTV ratio', '1:5 && 5.6', '0 && 0.4']
  ];
  const csv = rows && rows.map(r => r && r.map(v => String(v)).join(',')).join('\n')res && res.setHeader('Content-Type', 'text/csv')res && res.setHeader('Content-Disposition','attachment; filename='ipo-metrics && metrics.csv'';
  )res && res.status(200).send(csv)['MetricValueTrend%'];
    ['Monthly Recurring Revenue (MRR)$220,4508 && 4508.2'];
    ['GMV$4,800,0005 && 0005.1'];
    ['Active users (monthly)184523 && 184523.9'];
    ['Active users (TTM)16234012 && 16234012.4'];
    ['Churn rate2 && rate2.4%-0 && 0.3'];
    ['CAC/LTV ratio1: 5 && 5.60.4']], const csv = rows && rows.map(r => r && r.map(v => String(v)).join()).join('\n'),  res && res.setHeader('Content-Typetext/csv')res && res.setHeader('Content-Dispositionattachment, filename='ipo-metrics && metrics.csv'')res && res.status(200).send(csv)}
import { requireSuperadminApi  } from '../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
}ursor/fix-website-loading-errors-and-merge-6662;
}}
}
}
}
}
  res.status(200).send(csv)res.status(200).send(csv)}
    ['CAC/LTV ratio1: 5 && 5.60.4']], const csv = rows && rows.map(r => r && r.map(v => String(v)).join()).join('\n'),  res && res.setHeader('Content-Typetext/csv');
  res && res.setHeader('Content-Dispositionattachment, filename='ipo-metrics && metrics.csv'');
  res && res.status(200).send(csv)

}
}





>>>>>>> origin/cursor/delete-old-data-records-6bba
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
<<<<<<< HEAD

origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
=======
}


>>>>>>> origin/cursor/delete-old-data-records-6bba

}

ursor/fix-website-loading-errors-and-merge-6662

}


}
}
}
  res.status(200).send(csv);
  res.status(200).send(csv)
}



  res.status(200).send(csv);
  res.status(200).send(csv)
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD



=======
}





  res.status(200).send(csv);
  res.status(200).send(csv)
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
