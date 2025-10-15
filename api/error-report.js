export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    
    // Log error for debugging
    console.error('Client Error Report:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error Report Handler Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}