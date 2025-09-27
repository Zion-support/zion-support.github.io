import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  componentStack: string;
  timestamp: string;
  userAgent: string;
  url: string;
  retryCount: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const errorReport: ErrorReport = req.body;

    // Validate required fields
    if (!errorReport.id || !errorReport.message || !errorReport.timestamp) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log error for debugging
    console.error('Client Error Report:', {
      id: errorReport.id,
      message: errorReport.message,
      url: errorReport.url,
      timestamp: errorReport.timestamp,
      retryCount: errorReport.retryCount
    });

    // In production, you would:
    // 1. Store in database
    // 2. Send to monitoring service (Sentry, DataDog, etc.)
    // 3. Send alerts for critical errors
    // 4. Aggregate error statistics

    // For now, just acknowledge receipt
    return res.status(200).json({ 
      success: true, 
      errorId: errorReport.id,
      message: 'Error report received successfully'
    });

  } catch (error) {
    console.error('Error processing error report:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}