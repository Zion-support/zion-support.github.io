  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason, metadata } = req.body || {},
  if (!userId || typeof amount !== "number" || !reason) {
    return res.status(400).json({ error: "userId, amount, reason required" })
  }
  try {
    const tx = null;
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}