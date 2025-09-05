import type {_NextApiRequest, _NextApiResponse} from 'next';

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { address} = req.query as {_address?: string};
  if (!address) return res.status(400).json({_error: 'Missing address'});
  const _data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({_data});
}