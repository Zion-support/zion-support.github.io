
    return}
  try {;
    const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;

    const data = await response.json();
    if (!response.ok) {;
      res.statusCode = 500;

    res.statusCode = 500;
    res.json({ error: err.message }})}