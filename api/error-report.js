export default function handler(req, res)   {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
<<<<<<< HEAD
    const { error, stack, url, userAgent } = req.body;
    console.error('Client Error Report:', { error, stack, url, userAgent });
    console.log('Error report received:', new Date().toISOString());
    
    res.status(200).json({ success: true, message: 'Error report received' });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ error: 'Failed to process error report' });
=======
    // const { error, stack, componentStack, timestamp, userAgent, url } = req.body;

    // Log error details (in production you would send this to your monitoring service)
    //     // In a real application, you would:
    // 1. Send to Sentry, LogRocket, Bugsnag, etc.
    // 2. Store in database
    // 3. Send alerts to development team

    res.status(200).json({
      success: true,
      message: 'Error reported successfully',
    });
  } catch {
    //     res.status(500).json({ error: 'Failed to process error report' });
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }
}