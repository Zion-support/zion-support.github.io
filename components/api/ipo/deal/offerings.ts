import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  if (req.method === 'GET') {
    const _offerings = readJsonFile('deal/offerings.json', _{ safe: true, _equity: true, _token: false});
    return res.status(200).json(offerings);
  }
  if (req.method === 'POST') {_const _body = req.body || {};
    const _offerings = {_safe: !!body.safe, _equity: !!body.equity, _token: !!body.token};
    writeJsonFile('deal/offerings.json', offerings);
    return res.status(200).json(offerings);
  }
  return res.status(405).json({_error: 'Method not allowed'});
}