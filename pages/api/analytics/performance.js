export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { loadTime, memoryUsage, userAgent, url, timestamp } = req.body;

    // Log performance data (in production, you'd send this to your analytics service)
    console.log('Performance Analytics:', {
      loadTime,
      memoryUsage,
      userAgent: userAgent?.substring(0, 100), // Truncate for logging
      url,
      timestamp,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Here you would typically send data to:
    // - Google Analytics 4
    // - Custom analytics service
    // - Database
    // - Third-party monitoring service

    res.status(200).json({ 
      success: true, 
      message: 'Performance data logged successfully' 
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to log performance data' 
    });
  }
}