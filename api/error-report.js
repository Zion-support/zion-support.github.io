// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error: _error, stack: _stack, componentStack: _componentStack, timestamp: _timestamp, userAgent: _userAgent, url: _url } = req.body; // eslint-disable-line no-unused-vars
    
    // Log error details (in production, you'd send this to a logging service)
    console.log('Error reported:', {
      error: _error,
      stack: _stack,
      componentStack: _componentStack,
      timestamp: _timestamp,
      userAgent: _userAgent,
      url: _url
    });

    res.status(200).json({ success: true, message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error in error reporting:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}