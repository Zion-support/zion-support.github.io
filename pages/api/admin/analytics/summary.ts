<<<<<<< HEAD
<<<<<<< HEAD
import path from 'path';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';
type EventRow = {
  name: string;
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string
};

<<<<<<< HEAD
const LOG_FILE = path.join(
  process.cwd(),
  'data',
  'analytics',
  'events.log.jsonl'
);
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';
type EventRow = {
  name: string, page?: string,
  userType?: string;
  properties?: Record<string, any>;
  at: string
};

const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    const raw = fs.readFileSync(LOG_FILE, 'utf8');
    const lines = raw.split('\n').filter(Boolean);
    const start = startIso ? new Date(startIso) : null;
    const end = endIso ? new Date(endIso) : null;
    const rows: EventRow[] = [];
<<<<<<< HEAD
<<<<<<< HEAD
    return rows;
=======
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (!obj.at) continue;
        const t = new Date(obj.at);
        if (start && t < start) continue;
        if (end && t > end) continue;
        rows.push(obj)
      } catch {}
    }
    return rows
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch {
    return []
  }
<<<<<<< HEAD
=======
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (!obj.at) continue;
        const t = new Date(obj.at);
        if (start && t < start) continue;
        if (end && t > end) continue;
        rows.push(obj)
      } catch {}
    }
    return rows
  } catch {
    return []
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function featureFromPath(page?: string): string {
  if (!page) return 'other';
  const p = page.toLowerCase();
  if (p.includes('/services') || p.includes('ai')) return 'AI services';
  if (p.includes('talent') || p.includes('job')) return 'job board';
  if (p.includes('rental')) return 'rentals';
<<<<<<< HEAD
<<<<<<< HEAD
  return 'other';
=======
  return 'other'
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  const { start, end, userType } = req.query as { start?: string, end?: string, userType?: string };

<<<<<<< HEAD
  const rows = parseLines(start, end).filter(
    r => !userType || userType === 'all' || (r.userType || 'guest') === userType
  );
=======
  return 'other'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  const { start, end, userType } = req.query as { start?: string, end?: string, userType?: string };

  const rows = parseLines(start, end).filter((r) => !userType || userType === 'all' || (r.userType || 'guest') === userType);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const rows = parseLines(start, end).filter((r) => !userType || userType === 'all' || (r.userType || 'guest') === userType);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const byFeature: Record<string, number> = {};
  const byEvent: Record<string, number> = {};
  const byDay: Record<string, number> = {};

<<<<<<< HEAD
<<<<<<< HEAD
  
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  for (const r of rows) {
    const f = featureFromPath(r.page);
    byFeature[f] = (byFeature[f] || 0) + 1;
    byEvent[r.name] = (byEvent[r.name] || 0) + 1;
    const day = r.at.slice(0, 10);
    byDay[day] = (byDay[day] || 0) + 1
  }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const days = Object.keys(byDay).sort();
<<<<<<< HEAD
<<<<<<< HEAD
  const line = days.map(d => ({ date: d, value: byDay[d] }));
=======
  const line = days.map((d) => ({ date: d, value: byDay[d] }));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'];
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }));

<<<<<<< HEAD
  res.status(200).json({ pagesMostUsed, events, line, funnel });
=======
  const line = days.map((d) => ({ date: d, value: byDay[d] }));

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'];
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }));

  res.status(200).json({ pagesMostUsed, events, line, funnel })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ pagesMostUsed, events, line, funnel })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
