

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {

        const url = new URL("/api/sync/publish", peer.baseUrl).toString(),
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })
};

