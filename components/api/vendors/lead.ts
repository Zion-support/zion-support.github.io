import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body |{}
  if (!vendorId |!title)
    return res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);

  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

=======


  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req && req.body || {};
  if (!vendorId || !title)
    return res && res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);
  if (!vendor) return res && res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
    res && res.status(201).json({ item });
  } catch (e: any) {

    res && res.status(500).json({ error: e && e.message });
  }  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req && req.body || {};
  if (!vendorId || !title) return res && res.status(400).json({ error: 'Missing required fields' });

  const vendor = getVendorById(vendorId);
  if (!vendor) return res && res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);

    res && res.status(201).json({ item });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message })
  }  } catch (e: any) {

