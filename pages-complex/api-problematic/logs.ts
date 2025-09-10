import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import * as Sentry from '@sentry/nextjs';
import { logWarn, logError } from '../../../src/utils/productionLogger'; // Import loggers

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

    // 3. Optional: Forward to external webhook if configured via env
    if (process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL) {
      try {
        const doFetch = typeof fetch !== 'undefined' ? fetch : (await import('node-fetch')).default as unknown as typeof fetch;
        await doFetch(process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ entries }),
        });
      } catch (err) {
        // swallow – do not break client logging on webhook failure
         logWarn('Failed to forward logs to webhook:', { data: err });
      }
    }

    return res.status(200).json({ 
      message: 'Logs received successfully',
      count: entries.length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    // Log server-side failure
    logError('Error in /api/logs:', { data: error });
    Sentry.captureException(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}