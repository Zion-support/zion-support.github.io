<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';

interface EventRow {
  name: string
  page?: string
  userType?: string
  properties?: Record<string, any>
  at: string
}

const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl')

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return []
    const raw = fs.readFileSync(LOG_FILE, 'utf8')
    const lines = raw.split('\n').filter(Boolean)
    const start = startIso ? new Date(startIso) : null
    const end = endIso ? new Date(endIso) : null
    const rows: EventRow[] = []
    for (const line of lines) {
      try {
        const obj = JSON.parse(line)
        if (!obj.at) continue
        const t = new Date(obj.at)
        if (start && t < start) continue
        if (end && t > end) continue

        rows.push(obj)
      } catch {}
    }

  } catch {
    return []
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await ensureAdminFromApi(req);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { start, end } = req.query;
  const events = parseLines(start as string, end as string);
  
  const byFeature: Record<string, number> = {};
  const byEvent: Record<string, number> = {};
  const byDay: Record<string, number> = {};

  for (const event of events) {
    byFeature[event.page || 'unknown'] = (byFeature[event.page || 'unknown'] || 0) + 1;
    byEvent[event.name] = (byEvent[event.name] || 0) + 1;
    const day = event.at.split('T')[0];
    byDay[day] = (byDay[day] || 0) + 1;
  }

  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const eventsList = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));

  const funnelStages = ['Visit', 'AI Prompt Used', 'Post Created', 'Message Sent'];
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }));

  res.status(200).json({ pagesMostUsed, events: eventsList, line, funnel });
}

=======
import { NextApiRequest, NextApiResponse } from 'next';

const byFeature: Record<string, number> = {
  
};
const byEvent: Record<string, number> = {
  
};
const byDay: Record<string, number> = {
  
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    byFeature,
    byEvent,
    byDay
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
