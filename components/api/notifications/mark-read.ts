



    const { id } = req && req.body as { id?: string };
    if (!id) return res && res.status(400).json({ error: 'Missing id' });







