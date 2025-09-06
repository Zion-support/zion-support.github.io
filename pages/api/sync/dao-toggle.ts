  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { paused } = req.body as { paused: boolean },
  const state = null;
  return res.status(200).json({ paused: state.config.paused })
}