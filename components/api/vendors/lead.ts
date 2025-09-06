import type { NextApiRequest, NextApiResponse } from 'next';
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {};
  if (!vendorId || !title)
<<<<<<< HEAD
    return res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
    res.status(201).json({ item });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
=======
    return res.status(400).json({ error: 'Missing required fields' });
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {};
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {};
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(201).json({ item });
=======
    res.status(201).json({ item })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
<<<<<<< HEAD
=======
    res.status(201).json({ item })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
