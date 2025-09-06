import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

  });
  res && res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
    target: '$10,000,000';
    valuationCap: '$80,000,000';

<<<<<<< HEAD


=======
    discount: '20%'
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    leadInvestor: 'TBD'});

  res && res.status(200).json(terms)
}

<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-2156
leadInvestor: 'TBD'});
  res && res.status(200).json(terms)
}

    leadInvestor: 'TBD'});



=======
leadInvestor: 'TBD'});
  res && res.status(200).json(terms)
}
    leadInvestor: 'TBD'});

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
=======
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

}




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}



import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
=======
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}

}



<<<<<<< HEAD


  const terms = null;
  res.status(200).json(terms)
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
