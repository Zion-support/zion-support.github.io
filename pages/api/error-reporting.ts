import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  lineNumber?: number;
  columnNumber?: number;
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

    // Log the error (in production, you'd send to a service like Sentry)
    console.error('Client Error Report:', {
      message: errorReport.message,
      stack: errorReport.stack,
      url: errorReport.url,
      lineNumber: errorReport.lineNumber,
      columnNumber: errorReport.columnNumber,
      userAgent: errorReport.userAgent,
      timestamp: errorReport.timestamp,
      userId: errorReport.userId,
      sessionId: errorReport.sessionId
    });

    // Here you would typically:
    // 1. Store in error tracking service (Sentry, LogRocket, etc.)
    // 2. Send notifications to development team
    // 3. Update error statistics
    // 4. Create tickets for critical errors

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    res.status(200).json({
      success: true,
      errorId: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Error reporting API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}