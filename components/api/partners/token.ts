

  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });

      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType}
      useCaseType: partner.useCaseType}
    } as any,
    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600;
  );

  const { partner, apiKey: key } = match,
  const token = signJwt(
    {
      sub: partner.id,

      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  ),
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })



    .status(200)

    .json({ token, partner: { id: partner.id, name: partner.name }
});
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}


"






