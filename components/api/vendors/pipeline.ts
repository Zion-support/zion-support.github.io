<<<<<<< HEAD


=======
import type { NextApiRequest, NextApiResponse } from './next';
import { listPipelineForVendor  } from '../../../utils / vendor - store';
export default /**
 * handler - Function description
 */
function handler() {
  const vendor_id = String (req.query.vendor_id || "");
  if (return res.status (400).json ({ error: "vendor_id required" })) {
  $2
}
  const items = listPipelineForVendor (vendor_id);
  res.status (200).json ({ items });
  res.status (200).json ({ items });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const vendorId = String(req.query.vendorId |"");
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { listPipelineForVendor } from "../../../utils/vendor-store";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const vendorId = String(req.query.vendorId || "");
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (!vendorId) return res.status(400).json({ error: "vendorId required" });
  const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items });
  res.status(200).json({ items });
}
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

=======
  const vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  const items = listPipelineForVendor(vendorId);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
