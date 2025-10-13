<<<<<<< HEAD
// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { error: _error, stack: _stack, componentStack: _componentStack, timestamp: _timestamp, userAgent: _userAgent, url: _url } = req.body; // eslint-disable-line no-unused-vars
=======
<<<<<<< HEAD
// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96

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
=======
<<<<<<< HEAD
    // console.error removed for production
    console.log('Error report received:', {
      error: req.body.error,
      timestamp: new Date().toISOString()
=======
    console.log('Error report received:', {
      error,
      stack,
      componentStack,
      timestamp: timestamp || new Date().toISOString(),
      userAgent,
      url
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
    });
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96

    // For now, just acknowledge receipt
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Error report received' 
    }));
<<<<<<< HEAD

  } catch (_error) { // eslint-disable-line no-unused-vars // eslint-disable-line no-unused-vars
    // console.error('Error reporting error:', error);
=======
  } catch (error) {
<<<<<<< HEAD
    // console.error removed for production
=======
    console.error('Failed to process error report:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process error report' }));
  }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
      message: 'Error report received',
      timestamp: new Date().toISOString()
    }));

  } catch (error) {
    console.error('Error in error reporting handler:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process error report',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
