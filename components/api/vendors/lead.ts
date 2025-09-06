import type { NextApiRequest, NextApiResponse } from 'next';
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {};
  if (!vendorId || !title)
    return res.status(400).json({ error: 'Missing required fields' });
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {};
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
<<<<<<< HEAD
    res.status(201).json({ item });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
=======
    res.status(201).json({ item })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
