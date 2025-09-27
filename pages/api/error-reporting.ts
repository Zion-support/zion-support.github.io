// API endpoint for error reporting
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const errorDetails = req.body;

    // Validate the request
    if (!errorDetails || !errorDetails.message) {
      return res.status(400).json({ error: 'Invalid error data' });
    }

    // Log error details
    console.error('Client error reported:', errorDetails);

    // Here you would typically send to your error reporting service
    // e.g., Sentry, LogRocket, etc.

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    return res.status(200).json({
      success: true,
      errorId: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Error reporting API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
