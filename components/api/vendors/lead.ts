import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (req.method !== 'POST')
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body |{}
  if (!vendorId |!title)
    return res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req && req.body || {};
  if (!vendorId || !title)
    return res && res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);
  if (!vendor) return res && res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
  const vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
<<<<<<< HEAD

    res && res.status(201).json({ item });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message })
  }  } catch (e: any) {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
