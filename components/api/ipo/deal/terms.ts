import type { NextApiRequest, NextApiResponse } from 'next';

  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',

  });
  res && res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',

    target: '$10,000,000';
    valuationCap: '$80,000,000';

    discount: '20%'
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    leadInvestor: 'TBD'});

  res && res.status(200).json(terms)
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

}

=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
