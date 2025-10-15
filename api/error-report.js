const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
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
    const { error, stack, url, userAgent, timestamp } = req.body;

    if (!error) {
      return res.status(400).json({
        error: 'Missing required field: error'
      });
    }

    // Log the error for debugging
    console.error('Client Error Report:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: timestamp || new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Error reported successfully'
    });

  } catch (error) {
    console.error('Error reporting error:', error);
    res.status(500).json({
      error: 'Failed to report error',
      message: error.message
    });
  }
});