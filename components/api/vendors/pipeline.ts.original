<<<<<<< HEAD

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

}
  const items = listPipelineForVendor (vendor_id);
  res.status (200).json ({ items });
  res.status (200).json ({ items });

}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items });
}
>>>>>>> origin/auto/autonomy-17186719616
