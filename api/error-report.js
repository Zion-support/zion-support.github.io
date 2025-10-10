import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { error, userAgent, url, timestamp, userId } = req.body || {};

  if (!error) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error details are required' }));
    return;
  }

  try {
    // Basic error logging logic
    const errorReport = {
      id: 'err_' + Date.now(),
      error: typeof error === 'string' ? error : JSON.stringify(error),
      userAgent: userAgent || req.headers['user-agent'],
      url: url || req.headers.referer,
      timestamp: timestamp || new Date().toISOString(),
      userId: userId || 'anonymous',
      createdAt: new Date().toISOString()
    };

    // Log error for debugging
    console.error('Client Error Report:', errorReport);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Error report received successfully',
      reportId: errorReport.id
    }));
  } catch (err) {
    console.error('Error processing error report:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process error report' }));
  }
}

export default withErrorLogging(handler);