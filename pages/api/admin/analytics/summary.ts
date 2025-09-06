import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

const byFeature: Record<string, number> = {
  
};
const byEvent: Record<string, number> = {
  
};
const byDay: Record<string, number> = {
  
};

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

function featureFromPath(page?: string): string {
  if (!page) return 'other';
  const p = page.toLowerCase();
  if (p.includes('/services') || p.includes('ai')) return 'AI services';
  if (p.includes('talent') || p.includes('job')) return 'job board';
  if (p.includes('rental')) return 'rentals';
  return 'other';

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

  const byFeature: Record<string, number> = {};
  const byEvent: Record<string, number> = {};
  const byDay: Record<string, number> = {};

  

  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const days = Object.keys(byDay).sort();
  const line = days.map(d => ({ date: d, value: byDay[d] }));

  const funnelStages = [
    'Visit',
    'AI Prompt Used',
    'Post Created',
    'Message Sent',
  ];
  const funnel = funnelStages.map(stage => ({
    label: stage,
    value: byEvent[stage] || 0,
  }));

  res.status(200).json({ pagesMostUsed, events, line, funnel });
