import type { NextApiRequest, NextApiResponse } from 'next';
import { logErrorToProduction } from '@/utils/productionLogger';

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
  sessionId: string;
  url?: string;
  userAgent?: string;
  userId?: string;
}

interface LogsRequestBody {
  entries: LogEntry[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { entries }: LogsRequestBody = req.body;

    if (!entries || !Array.isArray(entries)) {
      return res.status(400).json({ message: 'Invalid request body. Expected entries array.' });
    }

    // Process each log entry
    for (const entry of entries) {
      // Validate required fields
      if (!entry.level || !entry.message || !entry.timestamp || !entry.sessionId) {
        logErrorToProduction('Invalid log entry received:', entry);
        continue;
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[${entry.level.toUpperCase()}] ${entry.timestamp} - ${entry.message}`, entry.context || '');
      }

      // Here you could add additional logging destinations:
      // - Database storage
      // - External logging services (Sentry, LogRocket, etc.)
      // - File system logging
      // - Real-time monitoring dashboards

      // For now, we'll just acknowledge receipt
      // In production, you might want to store these logs in a database
      // or send them to an external logging service
    }

    return res.status(200).json({ 
      message: 'Logs received successfully',
      count: entries.length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logErrorToProduction('Error processing logs:', error);
    return res.status(500).json({ 
      message: 'Internal Server Error',
      timestamp: new Date().toISOString()
    });
  }
}