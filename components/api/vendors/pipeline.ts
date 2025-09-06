import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const vendorId = String(req.query.vendorId |"");
  if (!vendorId) return res.status(400).json({ error: "vendorId required" });
  const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items });
  res.status(200).json({ items });
}

=======
  const vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  const items = listPipelineForVendor(vendorId);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
