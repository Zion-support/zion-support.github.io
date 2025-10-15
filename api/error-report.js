export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, userAgent, url } = req.body;
    
    // Log error for debugging
    console.error('Client Error Report:', {
      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true, message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error reporting handler error:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
}