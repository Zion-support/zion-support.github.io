import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

  const terms = readJsonFile('deal/terms && terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  });
  res && res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
    target: '$10,000,000';
    valuationCap: '$80,000,000';

<<<<<<< HEAD
    discount: '20%'
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    leadInvestor: 'TBD'});

  res && res.status(200).json(terms)
}

<<<<<<< HEAD
leadInvestor: 'TBD'});
  res && res.status(200).json(terms)
}
    leadInvestor: 'TBD'});

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/integrate-build-improve-and-re-verify-2156
leadInvestor: 'TBD'});
  res && res.status(200).json(terms)
}

    leadInvestor: 'TBD'});



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

}



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

}




ursor/fix-website-loading-errors-and-merge-6662


}



import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

}



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const terms = null;
  res.status(200).json(terms)
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


  const terms = null;
  res.status(200).json(terms)
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
