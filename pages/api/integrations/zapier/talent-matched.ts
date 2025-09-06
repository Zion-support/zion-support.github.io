  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.talent.matched" && e && e.timestamp > sinceTs,
  const { since } = req.query as { since?: string }
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.talent.matched" && e && e.timestamp > sinceTs,
  );
  res && res.status(200).json({ events });
}
