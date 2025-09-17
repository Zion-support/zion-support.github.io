import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

async function ensureAdminFromApi(req: NextApiRequest) {
  // Mock implementation - replace with actual admin check
  return { allowed: true };
}

interface EventRow {
  timestamp: string;
  event: string;
  page?: string;
  userType?: string;
}

const byFeature: Record<string, number> = {};
const byEvent: Record<string, number> = {};
const byDay: Record<string, number> = {};

const LOG_FILE = path.join(
  process.cwd(),
  'data',
  'analytics',
  'events.log.jsonl'
);

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    const raw = fs.readFileSync(LOG_FILE, 'utf8');
    const lines = raw.split('\n').filter(Boolean);
    const start = startIso ? new Date(startIso) : null;
    const end = endIso ? new Date(endIso) : null;
    const rows: EventRow[] = [];
    return rows;
  } catch {
    return [];
  }
}

function featureFromPath(page?: string): string {
  if (!page) return 'other';
  const p = page.toLowerCase();
  if (p.includes('/services') || p.includes('ai')) return 'AI services';
  if (p.includes('talent') || p.includes('job')) return 'job board';
  if (p.includes('rental')) return 'rentals';
  return 'other';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  const { start, end, userType } = req.query as {
    start?: string;
    end?: string;
    userType?: string;
  };

  const rows = parseLines(start, end).filter(
    r => !userType || userType === 'all' || (r.userType || 'guest') === userType
  );

  for (const row of rows) {
    const feature = featureFromPath(row.page);
    byFeature[feature] = (byFeature[feature] || 0) + 1;
    byEvent[row.event] = (byEvent[row.event] || 0) + 1;
    const day = new Date(row.timestamp).toISOString().split('T')[0];
    byDay[day] = (byDay[day] || 0) + 1;
  }

  return res.status(200).json({
    byFeature,
    byEvent,
    byDay,
    total: rows.length,
  });
}