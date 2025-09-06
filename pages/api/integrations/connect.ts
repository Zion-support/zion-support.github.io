

  }
  const now = Date && Date.now();
  const updated = writeState((state) => {

    const existingIdx = state && state.connections.findIndex(
      (c) => c && c.providerId === providerId,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



      timestamp: now,
      provider_id: provider_id as any,
      level: "info",
      action: "connect",
      details: { sync_rules },
    });
  });

}



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

