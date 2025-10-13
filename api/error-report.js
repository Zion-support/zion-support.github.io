// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {'    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');'    res.end(JSON.stringify({ error: 'Method not allowed' }));'    return;
  }

  try {
    const { error, stack, url, userAgent, timestamp } = req.body;

    if (!error) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');'      res.end(JSON.stringify({ error: 'Error message is required' }));'      return;
    }

    // Log the error (in production, you'd send this to a logging service)'    console.error('Client Error Report:', {'      error,
      stack,
      url,
      userAgent,
      timestamp: timestamp || new Date().toISOString()
    });

    // Here you would typically:
    // 1. Send to error tracking service (Sentry, LogRocket, etc.)
    // 2. Store in database
    // 3. Send alert to development team

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');'    res.end(JSON.stringify({ 
      success: true, 
      message: 'Error reported successfully' '    }));
  } catch (err) {
    console.error('Error in error reporting handler:', err);'    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');'    res.end(JSON.stringify({ error: 'Internal server error' }));'  }
}