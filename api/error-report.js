// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { error: _error, stack: _stack, componentStack: _componentStack, timestamp: _timestamp, userAgent: _userAgent, url: _url } = req.body; // eslint-disable-line no-unused-vars

    // Log error details (in production you would send this to your monitoring service)
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in your database
    // 3. Send alerts to your team

    // console.error('Client Error Report:', {
    //   error: error?.message || error,
    //   stack,
    //   componentStack,
    //   timestamp,
    //   userAgent,
    //   url,
    //   serverTime: new Date().toISOString()
    // });

    // For now, just acknowledge receipt
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Error report received' 
    }));

  } catch (_error) { // eslint-disable-line no-unused-vars // eslint-disable-line no-unused-vars
    // console.error('Error reporting error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process error report' }));
  }
}