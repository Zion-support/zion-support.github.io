export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, userAgent, url, timestamp } = req.body;

    if (!error) {
      return res.status(400).json({ error: 'Error details are required' });
    }

    // Log the error (in production, you'd send this to a logging service)
    console.error('Client Error Report:', {
      error,
      userAgent,
      url,
      timestamp: timestamp || new Date().toISOString()
    });

    // Here you would typically send the error to a monitoring service
    // like Sentry, LogRocket, or DataDog

    res.status(200).json({ 
      success: true,
      message: 'Error reported successfully' 
    });
  } catch (err) {
    console.error('Error reporting failed:', err);
    res.status(500).json({ 
      error: 'Failed to report error',
      message: err.message 
    });
  }
}
