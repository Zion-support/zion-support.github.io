import { NextApiRequest, NextApiResponse } from 'next';
import {
  logInfo as serverLogInfo,
  logWarn as serverLogWarn,
  logError as serverLogError,
  logDebug as serverLogDebug
} from '@/utils/productionLogger'; // Renamed to avoid conflict with client-side logger variable if any

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
  sessionId: string;
  correlationId?: string | null; // Added to match productionLogger's LogEntry
  url?: string;
  userAgent?: string;
  userId?: string | null; // Matched to productionLogger's LogEntry
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

    // Process all entries with server-side productionLogger
    for (const entry of entries) {
      const serverContext = {
        clientTimestamp: entry.timestamp,
        sessionId: entry.sessionId,
        url: entry.url,
        userAgent: entry.userAgent,
        userId: entry.userId,
        originalContext: entry.context,
      };

      switch (entry.level) {
        case 'debug':
          // Server-side debug logs from client are often too noisy for production
          // Only log them if server is also in debug mode or explicit client_debug mode is enabled
          if (process.env.NODE_ENV === 'development' || process.env.DEBUG === 'true' || process.env.CLIENT_DEBUG_LOGGING === 'true') {
            serverLogDebug(`Client Debug: ${entry.message}`, serverContext);
          }
          break;
        case 'info':
          serverLogInfo(`Client Info: ${entry.message}`, serverContext);
          break;
        case 'warn':
          serverLogWarn(`Client Warn: ${entry.message}`, serverContext);
          break;
        case 'error':
          serverLogError(`Client Error: ${entry.message}`, entry.context?.error || new Error(entry.message), serverContext);
          break;
        default:
          serverLogWarn(`Unknown client log level: ${entry.level} - Message: ${entry.message}`, serverContext);
          break;
      }
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