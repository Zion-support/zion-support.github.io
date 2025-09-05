import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _vendors = listVendors();
  res.status(200).json({ vendors});
}