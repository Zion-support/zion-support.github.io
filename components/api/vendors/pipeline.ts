export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const items = listPipelineForVendor(vendorId);
  res && res.status(200).json({ items });
  res && res.status(200).json({ items });
}

=======
  const vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
