<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
type EventRow = {
  name: string,
  page?: string,
  user_type?: string,
  properties?: Record < string, any>,
  at: string;
},
const LOG_FILE = path.join (process.cwd (), 'dataanalyticsevents.log.jsonl'),
function parse_lines (start_iso?: string, end_iso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [],
    const raw = fs.readFileSync(LOG_FILE, 'utf8'),
    const lines = raw.split('\n').filter(Boolean),
    const start = startIso ? new Date(startIso) : null,
    const end = endIso ? new Date(endIso) : null,
    const rows: EventRow[] = [],
    for (const line of lines) {
      try {
        const obj = JSON.parse(line),
        if (!obj.at) continue,
        const t = new Date(obj.at),
        if (start && t < start) continue,
        if (end && t > end) continue,
        rows.push(obj)
      } catch {}
    }
    return rows
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

type EventRow = {

<<<<<<< HEAD
    }
    return rows;

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
    const lines = raw.trim().split('\n').filter(Boolean);
    const rows: EventRow[] = [];
    
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        const t = new Date(obj.at).getTime();
        const start = startIso ? new Date(startIso).getTime() : 0;
        const end = endIso ? new Date(endIso).getTime() : Infinity;
        
        if (t < start) continue;
        if (end && t > end) continue;
        rows.push(obj);
      } catch {
        // Skip invalid JSON lines
      }
    }
    return rows;
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    return rows;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch {
    return [];
  }
}

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function featureFromPath(page?: string): string {
if (!page) return 'other'
  const p = page.toLowerCase()
  if (p.includes('/services') |p.includes('ai')) return 'AI services'
  if (p.includes('talent') |p.includes('job')) return 'job board'
  if (p.includes('rental')) return 'rentals'
  return 'other'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  const { start, end, userType } = req.query as { 
    start?: string; 
    end?: string; 
    userType?: string; 
  };
  const rows = parseLines(start, end).filter((r) => 
    !userType || userType === 'all' || (r.userType || 'guest') === userType
  );
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })
  const { start, end, userType } = req.query as { start?: string, end?: string, userType?: string }
  const rows = parseLines(start, end).filter((r) => !userType |userType === 'all' |(r.userType |'guest') === userType)
  const byFeature: Record<string, number> = {}
  const byEvent: Record<string, number> = {}
  const byDay: Record<string, number> = {}
  for (const r of rows) {
    const f = featureFromPath(r.page)
    byFeature[f] = (byFeature[f] |0) + 1
    byEvent[r.name] = (byEvent[r.name] |0) + 1
    const day = r.at.slice(0, 10)
    byDay[day] = (byDay[day] |0) + 1
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
.sort((a, b) => b.value - a.value)
  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
<<<<<<< HEAD
<<<<<<< HEAD
=======

    .sort((a, b) => b.value - a.value);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    .sort((a, b) => b.value - a.value),



    .sort((a, b) => b.value - a.value);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    .sort((a, b) => b.value - a.value),


<<<<<<< HEAD
<<<<<<< HEAD
}
=======
  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));
=======
  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const funnelStages = [
    'Visit',
    'AI Prompt Used',
    'Post Created',
    'Message Sent',
  ];
  const funnel = funnelStages.map((stage) => ({ 
    label: stage, 
    value: byEvent[stage] || 0 
  }));
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  res.status(200).json({ pagesMostUsed, events, line, funnel });


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function featureFromPath (page?: string): string {
// Check condition
if (return 'other', ) {
  $2
}
  const p = page.toLowerCase (),
  if (|| p.includes ('ai')) return 'AI services', ) {
  $2
}
  if (|| p.includes ('job')) return 'job board', ) {
  $2
}
  if () return 'rentals', ) {
  $2
}
  return 'other';
}
export default async /**
 * handler - Function description
 */
function handler() {
  const { allowed } = await ensureAdminFromApi (req),
  if (return res.status (403).json ({ error: 'Forbidden' }), ) {
  $2
}
  const { start, end, user_type } = req.query as { start?: string, end?: string, user_type?: string },
  const rows = parse_lines (start, end).filter ((r) => !user_type || user_type === 'all' || (r.user_type || 'guest') === user_type),
  const by_feature: Record < string, number> = {},
  const by_event: Record < string, number> = {},
  const by_day: Record < string, number> = {},
  for (const r of rows) {
    const function = featureFromPath (r.page),
    by_feature[f] = (by_feature[f] || 0) + 1,
    by_event[r.name] = (by_event[r.name] || 0) + 1,
    const day = r.at.slice (0, 10),
    by_day[day] = (by_day[day] || 0) + 1;
  }
  const pagesMostUsed = Object.entries (by_feature);
    .map (([label, value]) => ({ label, value }));
.sort ((a, b) => b.value - a.value),
  const events = Object.entries (by_event);
    .map (([label, value]) => ({ label, value }));
    .sort ((a, b) => b.value - a.value),
  const days = Object.keys (by_day).sort (),
  const line = days.map ((d) => ({ date: d, value: by_day[d] })),
  const funnel_stages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnel_stages.map ((stage) => ({ label: stage, value: by_event[stage] || 0 })),
  res.status (200).json ({ pagesMostUsed, events, line, funnel });
}
;
<<<<<<< HEAD
<<<<<<< HEAD
};

    .sort((a, b) => b.value - a.value)
  const days = Object.keys(byDay).sort()
  const line = days.map((d) => ({ date: d, value: byDay[d] }))
  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent']
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] |0 }))
  res.status(200).json({ pagesMostUsed, events, line, funnel });
}

    .sort((a, b) => b.value - a.value),

  const days = Object.keys(byDay).sort(),
  const line = days.map((d) => ({ date: d, value: byDay[d] })),

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),
;
  res.status(200).json({ pagesMostUsed, events, line, funnel });
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await ensureAdminFromApi(req);
    
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).end('Method Not Allowed');
    }

    const { start, end } = req.query;
    const events = parseLines(start as string, end as string);
    
    res.json({ events });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
