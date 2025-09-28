import type { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  id: string;
  timestamp: number;
  type: 'javascript' | 'network' | 'performance' | 'security' | 'user' | 'system';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId: string;
  context: Record<string, unknown>;
  resolved: boolean;
}

interface ErrorReportingResponse {
  success: boolean;
  message: string;
  errorId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorReportingResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const errorReport: ErrorReport = req.body;

    // Validate required fields
    if (!errorReport.id || !errorReport.message || !errorReport.type) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Log the error (in production, this would be stored in a database)
    console.log('Error Report Received:', {
      id: errorReport.id,
      type: errorReport.type,
      severity: errorReport.severity,
      message: errorReport.message,
      url: errorReport.url,
      timestamp: new Date(errorReport.timestamp).toISOString(),
      userId: errorReport.userId,
      sessionId: errorReport.sessionId
    });

    // In a real application, you would:
    // 1. Store the error in a database
    // 2. Send alerts for critical errors
    // 3. Update error metrics
    // 4. Trigger monitoring systems

    // For now, we'll just log and return success
    const errorId = errorReport.id;

    return res.status(200).json({
      success: true,
      message: 'Error report received successfully',
      errorId
    });

  } catch (error) {
    console.error('Error processing error report:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// Configure API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};