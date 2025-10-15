const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error: errorData, userAgent, url, timestamp } = req.body;
    
    res.status(200).json({ 
      success: true, 
      message: 'Error report received' 
    });
  } catch {
    res.status(500).json({ error: 'Failed to process error report' });
  }
});