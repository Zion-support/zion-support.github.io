// Web Vitals Analytics API
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, value, delta, id, navigationType } = req.body;
    
    // Log Web Vitals metrics
    console.log('Web Vital:', {
      name,
      value,
      delta,
      id,
      navigationType,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Send to Google Analytics 4 (if configured)
    if (process.env.GA_MEASUREMENT_ID) {
      // Implementation would go here
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing web vital:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}