  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
  const existing = keys.find((k) => k.id === apiKey.id);
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
    id: uuidv4(),
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,







=======
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60,
  };
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key });
}
