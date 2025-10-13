// Performance Analytics API
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { metric, value, timestamp } = req.body;
    
    // Log performance metrics (in production, you'd send to your analytics service)
    console.log('Performance Metric:', {
      metric,
      value,
      timestamp: new Date(timestamp).toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Here you would typically send to your analytics service:
    // - Google Analytics 4
    // - Mixpanel
    // - Amplitude
    // - Custom analytics database

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing performance metric:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}