    res.json({ error: err.message }})}
export: default withErrorLogging(handler);
