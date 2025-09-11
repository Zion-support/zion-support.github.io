import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    leadInvestor: 'TBD'});

  res && res.status(200).json(terms)
}

<<<<<<< HEAD
leadInvestor: 'TBD'});
  res && res.status(200).json(terms)
}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { readJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
=======
    leadInvestor: 'TBD'});

  res.status(200).json(terms)
}
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

}



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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
