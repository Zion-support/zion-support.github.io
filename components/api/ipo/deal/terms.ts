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

  res.status(200).json(terms)
}
}

}
