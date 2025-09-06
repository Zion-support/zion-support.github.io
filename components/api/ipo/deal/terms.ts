import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
<<<<<<< HEAD

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

<<<<<<< HEAD
  res.status(200).json(terms)

=======
  res && res.status(200).json(terms)
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
leadInvestor: 'TBD'});
  res && res.status(200).json(terms)
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;

  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A'
    target: '$10,000,000'
    valuationCap: '$80,000,000'
    discount: '20%'
    leadInvestor: 'TBD'
  });
  res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A'
    target: '$10,000,000';
    valuationCap: '$80,000,000';
    discount: '20%'
    leadInvestor: 'TBD'});

  res.status(200).json(terms)
}
}

}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
