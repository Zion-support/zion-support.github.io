<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { listPipelineForVendor } from '../../../utils/vendor-store',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendorId = String(req.query.vendorId || ''),
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' }),
  const items = listPipelineForVendor(vendorId),
  res.status(200).json({ items })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required'});
  const _items = listPipelineForVendor(vendorId);
  res.status(200).json({_items});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}