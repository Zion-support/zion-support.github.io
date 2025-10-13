// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
    
    // Log the error details
    console.error('Client Error Report:', {
      error: error?.message || error,
      stack,
      componentStack,
      timestamp,
      userAgent,
      url
    });

    // Log error details (in production you would send this to your monitoring service)
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in your database
    // 3. Send alerts to your team

    res.status(200).json({ 
      success: true, 
      message: 'Error report received' 
    });
  } catch (error) {
    console.error('Error reporting error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}