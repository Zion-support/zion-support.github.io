import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
<<<<<<< HEAD
    leadInvestor: 'TBD',
  });
  res.status(200).json(terms);
=======
    leadInvestor: 'TBD'});
  res.status(200).json(terms)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A';
    target: '$10,000,000';
    valuationCap: '$80,000,000';
    discount: '20%';
    leadInvestor: 'TBD'});
  res.status(200).json(terms)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
