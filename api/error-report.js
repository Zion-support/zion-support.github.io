const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

const errorReport = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, userAgent, url, timestamp } = req.body;
    
    if (!error) {
      return res.status(400).json({ error: 'Error details are required' });
    }

    // Log the error (in production, this would be sent to a logging service)
    console.error('Client Error Report:', {
      error,
      userAgent,
      url,
      timestamp: timestamp || new Date().toISOString()
    });

    return res.status(200).json({ message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error reporting error:', error);
    return res.status(500).json({ error: 'Failed to report error' });
  }
};

export default withErrorLogging(errorReport);
