import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD

  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A'
    target: '$10,000,000'
    valuationCap: '$80,000,000'
    discount: '20%'
    leadInvestor: 'TBD'
=======
  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
<<<<<<< HEAD
    leadInvestor: 'TBD',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
  res && res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A'
=======
  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    target: '$10,000,000';
    valuationCap: '$80,000,000';
    discount: '20%'
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    leadInvestor: 'TBD'});
<<<<<<< HEAD

  res.status(200).json(terms)
}
<<<<<<< HEAD
=======
  res && res.status(200).json(terms)
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { readJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const terms = readJsonFile ('deal / terms.json', {
    round: 'Series A',
    target: '$10, 000, 000',
    valuation_cap: '$80, 000, 000',
    discount: '20%',
    lead_investor: 'TBD',
  });
  res.status (200).json (terms);export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const terms = readJsonFile ('deal / terms.json', {
    round: 'Series A',
    target: '$10, 000, 000';
    valuation_cap: '$80, 000, 000';
    discount: '20%',
    lead_investor: 'TBD'});
  res.status (200).json (terms);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
