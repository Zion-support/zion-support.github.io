// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
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

=======
    return};
  try {;
const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Log error details (in production you would send this to your monitoring service)
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in your database
    // 3. Send alerts to your team
<<<<<<< HEAD

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

<<<<<<< HEAD
  } catch (_error) { // eslint-disable-line no-unused-vars // eslint-disable-line no-unused-vars
    // console.error('Error reporting error:', error);
    // console.error removed for production
}
}
=======
=======
    // console.error removed for production
    console.log('Error report received:', {
      error: req.body.error,
      timestamp: new Date().toISOString()
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // For now, just acknowledge receipt
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Error report received' 
    }));

  } catch (error) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reporting error:', error);
    }
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process error report' }));
  };
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
