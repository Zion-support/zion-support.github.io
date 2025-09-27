import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const errorReport: ErrorReport = req.body;

    // Validate required fields
    if (!errorReport.message || !errorReport.url) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the error (in production, you'd send this to a logging service)
    console.error('Client Error Report:', {
      message: errorReport.message,
      stack: errorReport.stack,
      url: errorReport.url,
      userAgent: errorReport.userAgent,
      timestamp: new Date(errorReport.timestamp).toISOString(),
      userId: errorReport.userId,
      sessionId: errorReport.sessionId
    });

    // In a real application, you would:
    // 1. Send to error tracking service (Sentry, Bugsnag, etc.)
    // 2. Store in database
    // 3. Send alerts for critical errors
    // 4. Aggregate error statistics

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    res.status(200).json({
      success: true,
      errorId: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Error reporting API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}