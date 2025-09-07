import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';

type EventRow = {
  name: string;
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string;
};

const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl');

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    const raw = fs.readFileSync(LOG_FILE, 'utf8');
    const lines = raw.split('\n').filter(Boolean);
    const start = startIso ? new Date(startIso) : null;
    const end = endIso ? new Date(endIso) : null;
    const rows: EventRow[] = [];
    
    for (const line of lines) {
      try {
        const row: EventRow = JSON.parse(line);
        const t = new Date(row.at);
        if (start && t < start) continue;
        if (end && t > end) continue;
        rows.push(row);
      } catch (e) {
        console.warn('Failed to parse line:', line);
      }
    }
    
    return rows;
  } catch (error) {
    console.error('Error parsing analytics data:', error);
    return [];
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    ensureAdminFromApi(req);
    
    const { start, end } = req.query;
    const events = parseLines(start as string, end as string);
    
    // Generate summary statistics
    const summary = {
      totalEvents: events.length,
      uniquePages: new Set(events.map(e => e.page).filter(Boolean)).size,
      uniqueUsers: new Set(events.map(e => e.properties?.userId).filter(Boolean)).size,
      eventsByType: events.reduce((acc, event) => {
        acc[event.name] = (acc[event.name] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      eventsByPage: events.reduce((acc, event) => {
        if (event.page) {
          acc[event.page] = (acc[event.page] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>),
      recentEvents: events.slice(-10).reverse()
    };
    
    res.status(200).json({ success: true, summary });
  } catch (error) {
    console.error('Error generating analytics summary:', error);
    res.status(500).json({ success: false, error: 'Failed to generate summary' });
  }
}