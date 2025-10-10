import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { error, stack, url, userAgent, timestamp } = req.body || {};

  if (!error) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error details are required' }));
    return;
  }

  try {
    // Log the error for monitoring
    console.error('Client Error Report:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: timestamp || new Date().toISOString()
    });

    // In a real application, you would save this to a database
    // or send it to an error tracking service like Sentry

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Error report received'
    }));
  } catch (err) {
    console.error('Error reporting handler error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process error report',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }));
  }
}

export default withErrorLogging(handler);
