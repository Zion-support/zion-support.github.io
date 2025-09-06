  const { userId } = req.query;
  const txs = null;
  res.status(200).json({ transactions: filtered })
}