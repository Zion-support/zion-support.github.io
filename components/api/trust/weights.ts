import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    const _current = await getTrustWeights();
    return res.status(200).json({ current, _defaults: getDefaultWeights()});
  }

  if (req.method === 'PUT') {_const _incoming = req.body || {};
    const _updated = await setTrustWeights(incoming);
    return res.status(200).json({_updated});
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({_error: 'Method not allowed'});
}