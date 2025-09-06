  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  try {
    const result = null;
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}