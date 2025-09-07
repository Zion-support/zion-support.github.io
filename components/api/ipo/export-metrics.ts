import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======




>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;


<<<<<<< HEAD



pr-12243
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!requireSuperadminApi(req, res)) return;

  const rows = ['
    ['MetricValueTrend%'];
'
import { requireSuperadminApi } from '../../../utils/api/auth';

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {;

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default function handler() { return null; }
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!requireSuperadminApi(req, res)) return;

  const rows = ['
    ['MetricValueTrend%'];
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  res.status(200).send(csv)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
=======

<<<<<<< HEAD

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;
'
    ['Monthly Recurring Revenue (MRR)$220,4508.2'];'
    ['GMV$4,800,0005.1'];'
    ['Active users (monthly)184523.9'];'
    ['Active users (TTM)16234012.4'];'
    ['Churn rate2.4%-0.3'];'
    ['CAC/LTV ratio1: 5.60.4']], const csv = rows.map(r => r.map(v => String(v)).join()).join('\n'),  res.setHeader('Content-Typetext/csv');'
  res.setHeader('Content-Dispositionattachment, filename="ipo-metrics.csv"');
=======
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
  res.status(200).send(csv)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
}
pr-12243
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

}


}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  res.status(200).send(csv);
  res.status(200).send(csv)
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
