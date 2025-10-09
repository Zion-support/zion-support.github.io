// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body;

    // Log error details (in production you would send this to your monitoring service)
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in database
    // 3. Send alerts to development team
    console.log('Error reported:', { error, stack, componentStack, timestamp, userAgent, url });
    
    res.status(200).json({ success: true, message: 'Error reported successfully' });
  } catch (err) {
    console.error('Failed to process error report:', err);
=======
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1917
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // const { error, stack, componentStack, timestamp, userAgent, url } = req.body;

    // Log error details (in production you would send this to your monitoring service)

    // In a real application, you would send this to your monitoring service

    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in database
    // 3. Send alerts to development team
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error processing error report:', err);
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
    res.status(500).json({ error: 'Failed to process error report' });
  }
}