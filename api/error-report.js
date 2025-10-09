// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body;

    // Log error details (in production you would send this to your monitoring service)
    console.error('Client Error:', {
      error,
      stack,
      componentStack,
      timestamp,
      userAgent,
      url
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error processing error report:', err);
    res.status(500).json({ error: 'Failed to process error report' });
  }
}