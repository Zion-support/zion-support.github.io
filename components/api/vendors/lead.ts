<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
  const { vendorId, title } = req.body || {},;
  if (!vendorId || !title) return res.status(400).json({ error:'Missing required fields' }),;
  const vendor = getVendorById(vendorId),;
  if (!vendor) return res.status(404).json({ error:'Vendor not found' }),;
  try {;
    const item = addPipelineItem(vendorId, title),;
    res.status(201).json({ item }),;
  } catch (e:any) {;
    res.status(500).json({ error:e.message }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { vendorId, title } = req.body || {},
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' }),
  const vendor = getVendorById(vendorId),
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' }),
  try {
    const item = addPipelineItem(vendorId, title),
    res.status(201).json({ item })
  } catch (e: any) {
    res.status(500).json({ error: e.message })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}