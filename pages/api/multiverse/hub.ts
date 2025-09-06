  const state = null;
      lastSyncedAt: state.lastSyncedAt})
  }
  return res.status(405).json({ error: "Method not allowed" })
}