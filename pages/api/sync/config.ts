  const state = null;
    return res.status(200).json({ config: state.config })
  }
  return res.status(405).json({ error: "Method not allowed" })
}