export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, userAgent, url, timestamp } = req.body;

    if (!error) {
      return res.status(400).json({ error: 'Error details are required' });
    }

    // Log the error (in production, you'd send this to a logging service)
    console.error('Client Error Report:', {
      error,
      stack,
      userAgent,
      url,
      timestamp: timestamp || new Date().toISOString()
    });

    // Here you would typically:
    // 1. Store the error in a database
    // 2. Send to error tracking service (Sentry, LogRocket, etc.)
    // 3. Send alert to development team if critical

    res.status(200).json({ 
      success: true, 
      message: 'Error report received successfully' 
    });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ 
      error: 'Failed to process error report',
      message: error.message 
    });
  }
}