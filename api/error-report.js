export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, errorInfo, errorId, timestamp, userAgent, url } = req.body;
    
    // Log error for debugging
    console.error('Error reported:', {
      error,
      errorInfo,
      errorId,
      timestamp,
      userAgent,
      url
    });

    // Here you would typically save to a database or send to an error tracking service
    // For now, just acknowledge receipt
    res.status(200).json({ 
      message: 'Error reported successfully',
      errorId: errorId || 'unknown'
    });
  } catch (error) {
    console.error('Error reporting failed:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
