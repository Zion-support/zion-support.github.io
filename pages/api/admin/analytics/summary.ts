
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
        const obj = JSON.parse(line);
        const at = new Date(obj.at);
        if (start && at < start) continue;
        if (end && at > end) continue;
        rows.push(obj);
      } catch {
        // Skip invalid lines
      }
    }
    return rows;
  } catch {

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';
type EventRow = {
  name: string,
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string
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
        const obj = JSON.parse(line);
        if (!obj.at) continue;
        const t = new Date(obj.at);
        if (start && t < start) continue;
        if (end && t > end) continue;
        rows.push(obj);
      } catch {}
    }
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  const { start, end, userType } = req.query as { start?: string, end?: string, userType?: string };
  const rows = parseLines(start, end).filter((r) => !userType || userType === 'all' || (r.userType || 'guest') === userType);
  const byFeature: Record<string, number> = {};
  const byEvent: Record<string, number> = {};
  const byDay: Record<string, number> = {};
  for (const r of rows) {
    const f = featureFromPath(r.page);
    byFeature[f] = (byFeature[f] || 0) + 1;
    byEvent[r.name] = (byEvent[r.name] || 0) + 1;
    const day = r.at.slice(0, 10);
    byDay[day] = (byDay[day] || 0) + 1;

  }

  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))

    .sort((a, b) => b.value - a.value);
  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);
  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));
  const funnelStages = ['Visit', 'AI Prompt Used', 'Post Created', 'Message Sent'];
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }));
  res.status(200).json({ pagesMostUsed, events, line, funnel });
}

=======
    return [];
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureAdminFromApi(req, res);
  
  const { startIso, endIso } = req.query;
  const events = parseLines(startIso as string, endIso as string);
  
  const pagesMostUsed = events
    .filter(e => e.page)
    .reduce((acc, e) => {
      acc[e.page!] = (acc[e.page!] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
  const eventCounts = events.reduce((acc, e) => {
    acc[e.name] = (acc[e.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const funnel = events
    .filter(e => e.name === 'page_view')
    .map(e => e.page)
    .filter(Boolean);
  
  res.status(200).json({ pagesMostUsed, events: eventCounts, line: events.length, funnel });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
