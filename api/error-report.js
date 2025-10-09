// Error reporting API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
<<<<<<< HEAD
    const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
=======
    // const { error, stack, componentStack, timestamp, userAgent, url } = req.body;
>>>>>>> main

    // Log error details (in production you would send this to your monitoring service)
    // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in database
    // 3. Send alerts to development team
<<<<<<< HEAD
    console.log('Error reported:', { error, stack, componentStack, timestamp, userAgent, url });
    
    res.status(200).json({ success: true, message: 'Error reported successfully' });
  } catch (err) {
    console.error('Failed to process error report:', err);
=======
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error processing error report:', err);
>>>>>>> main
    res.status(500).json({ error: 'Failed to process error report' });
  }
}