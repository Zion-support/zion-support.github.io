import type { NextApiRequest, NextApiResponse } from 'next';
interface ErrorReport {
  error: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const errorReport: ErrorReport = req.body;
    console.error('Client Error Report:', {
      error: errorReport.error,
      stack: errorReport.stack,
      componentStack: errorReport.componentStack,
      timestamp: errorReport.timestamp,
      userAgent: errorReport.userAgent,
      url: errorReport.url,
    });
    res.status(200).json({ message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
interface ErrorReport {
  error: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const errorReport: ErrorReport = req.body;
    console.error('Client Error Report:', {
      error: errorReport.error,
      stack: errorReport.stack,
      componentStack: errorReport.componentStack,
      timestamp: errorReport.timestamp,
      userAgent: errorReport.userAgent,
      url: errorReport.url,
    });
    res.status(200).json({ message: 'Error reported successfully' });
  } catch (error) {
    console.error('Error processing error report:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {};
