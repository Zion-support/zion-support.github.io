  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId, syncRules } = req && req.body as {
    providerId?: string;
    syncRules?: SyncRules;
  };
  if (!providerId || !getProviderById(providerId)) {
    return res && res.status(400).json({ error: "Invalid providerId" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  const now = Date && Date.now();
  const updated = writeState((state) => {
    );
    const connection: ProviderConnection = {
      provider_id: provider_id as any,
      status: "connected",
      access_token: "mock_access_token",
      refresh_token: "mock_refresh_token",
      expires_at: now + 1000 * 60 * 60,
      connected_at: now,
      sync_rules: sync_rules || {},
      lastSyncAt: undefined,
      timestamp: now,
      provider_id: provider_id as any,
      level: "info",
      action: "connect",
      details: { sync_rules },
    });
  });
  });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  res.status (200).json ({
    ok: true,
    connection: updated.connections.find ((c) => c.provider_id === provider_id),
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
