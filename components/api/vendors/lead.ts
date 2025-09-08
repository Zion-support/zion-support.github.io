

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






