  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: "userId required" });
  try {
    const tx = null;
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}