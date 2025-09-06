
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {},
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
    return res.status(400).json({ error: "Missing required fields" }),
  }
  try {
    const { partner, apiKey } = await createPartner({
      name;
      entityType;
      pointOfContact;
      useCaseType;
      brand}),
    return res.status(201).json({
      partner: {
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {

=======
    return res.status(500).json({ error: "Failed to create partner" })
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
