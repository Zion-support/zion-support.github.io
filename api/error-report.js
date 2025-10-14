// API endpoint for error reporting
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      error, 
      userAgent, 
      url, 
      timestamp, 
      userId, 
      additionalInfo 
    } = req.body;

    if (!error) {
      return res.status(400).json({ error: 'Error details are required' });
    }

    // In a real implementation, you would:
    // 1. Log the error to a monitoring service (e.g., Sentry, LogRocket)
    // 2. Store in a database
    // 3. Send alerts if critical
    // 4. Track error patterns

    const errorReport = {
      id: `err_${Date.now()}`,
      error: error,
      userAgent: userAgent || req.headers['user-agent'],
      url: url || req.headers.referer,
      timestamp: timestamp || new Date().toISOString(),
      userId: userId || null,
      additionalInfo: additionalInfo || {},
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    };

    // Log the error (in production, use proper logging service)
    console.error('Error Report:', errorReport);

    res.status(200).json({ 
      success: true, 
      message: 'Error report received',
      errorId: errorReport.id 
    });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}