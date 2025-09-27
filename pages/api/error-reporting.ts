import type { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  id: string;
  level: string;
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId: string;
  sessionId: string;
  retryCount: number;
  memoryUsage?: any;
  performanceMetrics?: any;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const errorReport: ErrorReport = req.body;

    // Validate required fields
    if (!errorReport.id || !errorReport.message || !errorReport.timestamp) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the error (in production, you'd send this to an error tracking service)
    console.error('Error Report:', {
      id: errorReport.id,
      level: errorReport.level,
      message: errorReport.message,
      url: errorReport.url,
      timestamp: errorReport.timestamp,
      userId: errorReport.userId
    });

    // In a real application, you would:
    // 1. Send to error tracking service (Sentry, LogRocket, etc.)
    // 2. Store in database for analysis
    // 3. Send alerts for critical errors
    // 4. Generate reports for monitoring

    // For demo purposes, we'll just acknowledge receipt
    res.status(200).json({
      success: true,
      message: 'Error report received',
      errorId: errorReport.id
    });

  } catch (error) {
    console.error('Failed to process error report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}