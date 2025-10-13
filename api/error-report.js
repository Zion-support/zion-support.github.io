// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { error: _error, stack: _stack, componentStack: _componentStack, timestamp: _timestamp, userAgent: _userAgent, url: _url } = req.body; // eslint-disable-line no-unused-vars
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

    // console.error('Client Error Report:', {
    //   error: error?.message || error,
    //   stack,
    //   componentStack,
    //   timestamp,
    //   userAgent,
    //   url,
    //   serverTime: new Date().toISOString()
    // });
    // console.error removed for production
    console.log('Error report received:', {
      error: req.body.error,
      timestamp: new Date().toISOString()

  } catch (_error) { // eslint-disable-line no-unused-vars // eslint-disable-line no-unused-vars
    // console.error('Error reporting error:', error);
    // console.error removed for production
}
}
