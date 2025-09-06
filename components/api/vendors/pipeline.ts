import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendorId = String($2);
  if (!vendorId) return res.status(400).json($2);
  const items = listPipelineForVendor($2);
  res.status(200).json({ items })
}