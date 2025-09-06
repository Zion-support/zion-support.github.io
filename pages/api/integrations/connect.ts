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
  res.status (200).json ({
    ok: true,
    connection: updated.connections.find ((c) => c.provider_id === provider_id),
  });
}
