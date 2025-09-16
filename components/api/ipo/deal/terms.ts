import type { NextApiRequest, NextApiResponse } from 'next';
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',










    leadInvestor: 'TBD',
  });
  res.status(200).json(terms);
}
