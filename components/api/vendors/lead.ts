import type { NextApiRequest, NextApiResponse } from 'next';

    return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body |{}
  if (!vendorId |!title)
    return res.status(400).json({ error: 'Missing required fields' });  const vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  try {
    const item = addPipelineItem(vendorId, title);
    res.status(201).json({ item });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body |{}
  if (!vendorId |!title) return res.status(400).json({ error: 'Missing required fields' });

  const vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
<<<<<<< HEAD
    res && res.status(500).json({ error: e && e.message })
  }

}


  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
