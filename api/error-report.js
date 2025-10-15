export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { error, stack, url, userAgent } = req.body;
    
    console.error('Client Error:', {
      error,
      stack,
      url,
      userAgent,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error reporting failed:', err);
    res.status(500).json({ error: 'Failed to report error' });
  }
}
