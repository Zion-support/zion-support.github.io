import type { NextApiRequest, NextApiResponse } from 'next';
'
  if (req.method !== 'POST')'
  if (req.method !== 'POST');'
    return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body |{}
  if (!vendorId |!title)'
    return res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);'
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });'
  if (req && req.method !== 'POST')'
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req && req.body || {};
  if (!vendorId || !title)'
    return res && res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);'
  if (!vendor) return res && res.status(404).json({ error: 'Vendor not found' });
  try {}
    const item = addPipelineItem(vendorId, title);
<<<<<<< HEAD
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {},
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' });
  const vendor = null;
    res.status(201).json({ item })
origin/cursor/automate-test-improve-and-merge-code-2533
  const vendor = getVendorById(vendorId);
=======
  const vendor = getVendorById(vendorId);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  try {}
    const item = addPipelineItem(vendorId, title);
<<<<<<< HEAD
res.status(201).json({ item });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
