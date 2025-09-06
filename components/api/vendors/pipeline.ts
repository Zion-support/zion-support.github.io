import type { NextApiRequest, NextApiResponse } from "next";
import { listPipelineForVendor } from "../../../utils/vendor-store";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendorId = String(req && req.query.vendorId || "");
  if (!vendorId) return res && res.status(400).json({ error: "vendorId required" });
  const items = listPipelineForVendor(vendorId);
  res && res.status(200).json({ items });
  res && res.status(200).json({ items });
}
