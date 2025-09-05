import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required'});
  const _items = listPipelineForVendor(vendorId);
  res.status(200).json({_items});
}