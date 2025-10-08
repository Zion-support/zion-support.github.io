// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error: _error, stack: _stack, componentStack: _componentStack, timestamp: _timestamp, userAgent: _userAgent, url: _url } =
      req.body;

    // Log error details (in production you would send this to your monitoring service)
    // console.log('Error Report:', {
    //   error,
    //   stack,
    //   componentStack,
    //   timestamp,
    //   userAgent,
    //   url,
    // });
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in database
    // 3. Send alerts to development team

    res.status(200).json({
      success: true,
      message: 'Error reported successfully',
    });
  } catch (err) {
    // console.error('Failed to process error report:', err);
    res.status(500).json({ error: 'Failed to process error report' });
  }
}
