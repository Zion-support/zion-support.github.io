export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    
    // Log error to console (in production, you'd want to use a proper logging service)
    console.error('Client Error:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error in error-report handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}