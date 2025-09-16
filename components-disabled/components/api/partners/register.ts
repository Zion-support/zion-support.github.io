  }
  try {
    const { partner, apiKey } = await createPartner({
      name,
      entityType,
      pointOfContact,
      useCaseType,
    return res.status(201).json({
      partner: {
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
        useCaseType: partner.useCaseType,
