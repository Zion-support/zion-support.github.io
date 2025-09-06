  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
  }
  try {
    const summary = null;
    return res.status(200).json(summary)
  } catch (err: any) {
    return res.status(500).json({ error: err.message |'Unknown error' });
  }
