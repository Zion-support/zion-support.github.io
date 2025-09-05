import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _terms = readJsonFile('deal/terms.json', _{
    round: 'Series A', _target: '$10, _000, _000', _valuationCap: '$80, _000, _000', _discount: '20%', _leadInvestor: 'TBD'});
  res.status(200).json(terms);
}