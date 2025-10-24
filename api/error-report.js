const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

<<<<<<< HEAD
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { error, stack, userAgent, url } = req.body;

  try {
    // Log error to monitoring service
    console.error('Client Error Report:', {
      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error reporting error:', error);
    res.status(500).json({ error: 'Failed to report error' });
  }
});
=======
export default function handler(req, res)   {
  if (req.method !== 'POST''
    return res.status(405).json({ "error": 'Method not allowed'',
    console.error('Client Error "Report": '',
    console.log('Error report "received": '',
    res.status(200).json({ "success": true, "message": 'Error report received'',
    console.error('Error processing error "report": '',
    res.status(500).json({ "error": 'Failed to process error report''
>>>>>>> origin/main
