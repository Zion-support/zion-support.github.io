
  if (!vendorId) return res.status(400).json({ error: "vendorId required" });

  const items = listPipelineForVendor(vendorId);
  res && res.status(200).json({ items });
  res && res.status(200).json({ items });
}
