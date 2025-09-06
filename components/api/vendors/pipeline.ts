import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendorId = String(req.query.vendorId || ''),
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  const items = listPipelineForVendor(vendorId);
<<<<<<< HEAD
  res.status(200).json({ items });
=======
  res.status(200).json({ items })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
