  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
  return res.status(200).json({ peers: state.config.peers })
}