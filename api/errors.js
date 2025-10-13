// Error Reporting API
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      message, 
      stack, 
      componentStack, 
      timestamp, 
      userAgent, 
      url, 
      retryCount 
    } = req.body;
    
    // Log error details
    console.error('Client Error:', {
      message,
      stack,
      componentStack,
      timestamp: new Date(timestamp).toISOString(),
      userAgent,
      url,
      retryCount,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // In production, you would typically send to an error reporting service:
    // - Sentry
    // - LogRocket
    // - Bugsnag
    // - Custom error tracking system

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}