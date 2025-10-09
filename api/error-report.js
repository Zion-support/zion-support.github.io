// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
  }

  try {
    // const { error, stack, componentStack, timestamp, userAgent, url } = req.body;

    // Log error details (in production you would send this to your monitoring service)
<<<<<<< HEAD
    // In a real application, you would:
=======
    // In a real application, you would send this to your monitoring service
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in database
    // 3. Send alerts to development team
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error processing error report:', err);
    res.status(500).json({ error: 'Failed to process error report' });
  }
}