import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  errorId: string;
  timestamp: string;
  userAgent: string;
  url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const errorData: ErrorReport = req.body;

    // Validate required fields
    if (!errorData.message || !errorData.errorId || !errorData.timestamp) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // In a real application, you would:
    // 1. Send to error reporting service (Sentry, LogRocket, etc.)
    // 2. Store in database
    // 3. Send alerts for critical errors
    // 4. Aggregate error statistics

    // For now, just log the error
    console.error('Client Error Report:', {
      id: errorData.errorId,
      message: errorData.message,
      stack: errorData.stack,
      url: errorData.url,
      timestamp: errorData.timestamp,
      userAgent: errorData.userAgent
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 100));

    // Return success response
    res.status(200).json({ 
      success: true, 
      errorId: errorData.errorId,
      message: 'Error report received successfully'
    });

  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process error report' 
    });
  }
}