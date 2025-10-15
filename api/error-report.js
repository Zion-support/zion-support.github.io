const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, userAgent, url, timestamp } = req.body;
    
    // Log error for debugging
    console.error('Client Error Report:', {
      error,
      userAgent,
      url,
      timestamp
    });

    res.status(200).json({
      success: true,
      message: 'Error report received'
    });
  } catch (error) {
    console.error('Error reporting failed:', error);
    res.status(500).json({ 
      error: 'Failed to process error report',
      message: error.message 
    });
  }
});
