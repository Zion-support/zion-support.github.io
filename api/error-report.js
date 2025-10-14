// API endpoint for error reporting
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, userAgent, url, timestamp, userId } = req.body;

    if (!error) {
      return res.status(400).json({ error: 'Error details are required' });
    }

    // In a real implementation, you would:
    // 1. Log the error to your monitoring service
    // 2. Store in database
    // 3. Send alerts if critical

    const errorReport = {
      error: error.message || error,
      stack: error.stack,
      userAgent,
      url,
      timestamp: timestamp || new Date().toISOString(),
      userId,
      id: `error_${Date.now()}`
    };

    // Mock response for development
    console.log('Error reported:', errorReport);

    res.status(200).json({
      success: true,
      errorId: errorReport.id,
      message: 'Error reported successfully'
    });

  } catch (err) {
    console.error('Error in error reporting:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to report error'
    });
  }
}