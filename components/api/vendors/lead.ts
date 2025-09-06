import type { NextApiRequest, NextApiResponse } from 'next';
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { vendorId, title } = req.body || {},
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const vendor = getVendorById(vendorId),
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' }),
  try {
    const item = addPipelineItem(vendorId, title),

  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
