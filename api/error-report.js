// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
=======
    return
>>>>>>> origin/main
  }

  try {
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body
    // Log error details (in production you would send this to your monitoring service)
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in your database
    // 3. Send alerts to your team

    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Client Error Report:', {
        error: error?.message || error,
        stack,
        componentStack,
        timestamp,
        userAgent,
        url,
        serverTime: new Date().toISOString()
      })
    }

    // For now, just acknowledge receipt
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
<<<<<<< HEAD
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
=======
      message: 'Error report received' 
    }))
  } catch (error) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reporting error:', error)
    }
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to process error report' }))
>>>>>>> origin/main
  }
}