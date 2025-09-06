import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const vendorId = String(req.query.vendorId |"");
import type { NextApiRequest, NextApiResponse } from "next";
import { listPipelineForVendor } from "../../../utils/vendor-store";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendorId = String(req.query.vendorId || "");
  if (!vendorId) return res.status(400).json({ error: "vendorId required" });
  const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items });
  res.status(200).json({ items });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
=======

  const vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  const items = listPipelineForVendor(vendorId);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
