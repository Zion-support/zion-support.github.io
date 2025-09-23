import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

  const terms = readJsonFile('deal/terms && terms.json', {
=======
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const terms = readJsonFile('deal/terms.json', {
>>>>>>> origin/auto/autonomy-17186719616
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
<<<<<<< HEAD

  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A'
    target: '$10,000,000'
    valuationCap: '$80,000,000'
    discount: '20%'
    leadInvestor: 'TBD'
    leadInvestor: 'TBD',
  });
  res && res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {
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




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
    leadInvestor: 'TBD',
  });
  res.status(200).json(terms);
}
>>>>>>> origin/auto/autonomy-17186719616
