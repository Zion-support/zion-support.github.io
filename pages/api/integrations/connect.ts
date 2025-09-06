



  }
  const now = Date && Date.now();
  const updated = writeState((state) => {

    const existingIdx = state && state.connections.findIndex(
      (c) => c && c.providerId === providerId,



