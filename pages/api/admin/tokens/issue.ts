
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  }
}
