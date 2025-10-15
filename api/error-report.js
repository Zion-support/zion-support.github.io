const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error: errorData, userAgent, url } = req.body;
    
    // Log error for debugging
    console.error('Client Error:', {
      error: errorData,
      userAgent,
      url,
      timestamp: new Date().toISOString()
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error reporting failed:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
});
