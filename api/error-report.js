// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
  }

  try {
<<<<<<< HEAD
    // const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
=======
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
>>>>>>> origin/main

    // Log error details (in production you would send this to your monitoring service)
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
<<<<<<< HEAD
    // 2. Store in database
    // 3. Send alerts to development team
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    console.error('Error processing error report:', err);
    res.status(500).json({ error: 'Failed to process error report' });
=======
    // 2. Store in your database
    // 3. Send alerts to your team

    console.error('Client Error Report:', {
      error: error?.message || error,
      stack,
      componentStack,
      timestamp,
      userAgent,
      url,
      serverTime: new Date().toISOString()
    });

    // For now, just acknowledge receipt
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
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
>>>>>>> origin/main
  }
}