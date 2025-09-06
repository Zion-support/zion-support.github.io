import type { NextApiRequest, NextApiResponse } from 'next';
import { listPipelineForVendor } from '../../../utils/vendor-store';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const vendorId = null;
  res.status(200).json({ items })
}
=======
  const vendorId = String(req.query.vendorId |"");
  if (!vendorId) return res.status(400).json({ error: "vendorId required" });
  const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items });
  res.status(200).json({ items });
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendorId = String(req.query.vendorId || '');
  if (!vendorId) return res.status(400).json({ error: 'vendorId required' });
  
}

const items = listPipelineForVendor(vendorId);
  res.status(200).json({ items });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
