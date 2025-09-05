<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage',
import { requireSuperadminApi } from '../../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
    leadInvestor: 'TBD'}),
  res.status(200).json(terms)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _terms = readJsonFile('deal/terms.json', _{
    round: 'Series A', _target: '$10, _000, _000', _valuationCap: '$80, _000, _000', _discount: '20%', _leadInvestor: 'TBD'});
  res.status(200).json(terms);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}