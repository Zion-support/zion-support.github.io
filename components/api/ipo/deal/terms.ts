<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJsonFile } from '../../../../utils/api/storage',;
import { requireSuperadminApi } from '../../../../utils/api/auth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return,;
  const terms = readJsonFile('deal/terms.json', {;
    round:'Series A',;
    target:'$10,000,000',;
    valuationCap:'$80,000,000',;
    discount:'20%',;
    leadInvestor:'TBD'}),;
  res.status(200).json(terms),;
}
=======
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
  res.status(200).json(terms)}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
