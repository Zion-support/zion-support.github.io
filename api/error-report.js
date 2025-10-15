export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, userAgent, url, timestamp } = req.body;
    
    console.error('Client Error Report:', {
      error,
      userAgent,
      url,
      timestamp
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error reporting handler error:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
