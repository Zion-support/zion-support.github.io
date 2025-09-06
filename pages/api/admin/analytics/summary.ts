<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


      } catch {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    return rows;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
type EventRow = {
  name: string,
  page?: string,
  userType?: string,
  properties?: Record<string, any>,
  at: string
},

const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl'),

function parseLines(startIso?: string, endIso?: string): EventRow[] {
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  name: string;
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
type EventRow = {

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
        rows.push(obj)
      } catch {}

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
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======


      } catch {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    }
    return rows;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

        rows.push(obj)
      } catch {}
=======
function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    const raw = fs.readFileSync(LOG_FILE, 'utf8');
    const lines = raw.split('\n').filter(Boolean);
    const start = startIso ? new Date(startIso) : null;
    const end = endIso ? new Date(endIso) : null;
    const rows: EventRow[] = [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    }

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch {
    return []
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
function featureFromPath(page?: string): string {
  if (!page) return 'other',
  const p = page.toLowerCase(),
  if (p.includes('/services') || p.includes('ai')) return 'AI services',
  if (p.includes('talent') || p.includes('job')) return 'job board',
  if (p.includes('rental')) return 'rentals',
  return 'other'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req),
  if (!allowed) return res.status(403).json({ error: 'Forbidden' }),

  const { start, end, userType } = req.query as { start?: string, end?: string, userType?: string },

  const rows = parseLines(start, end).filter((r) => !userType || userType === 'all' || (r.userType || 'guest') === userType),

  const byFeature: Record<string, number> = {},
  const byEvent: Record<string, number> = {},
  const byDay: Record<string, number> = {},

  for (const r of rows) {
    const f = featureFromPath(r.page),
    byFeature[f] = (byFeature[f] || 0) + 1,
    byEvent[r.name] = (byEvent[r.name] || 0) + 1,
    const day = r.at.slice(0, 10),
    byDay[day] = (byDay[day] || 0) + 1
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
<<<<<<< HEAD
=======
function featureFromPath(page?: string): string {
if (!page) return 'other'
  const p = page.toLowerCase()
  if (p.includes('/services') |p.includes('ai')) return 'AI services'
  if (p.includes('talent') |p.includes('job')) return 'job board'
  if (p.includes('rental')) return 'rentals'
  return 'other'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
<<<<<<< HEAD
  const { start, end, userType } = req.query as {
    start?: string;
    end?: string;
    userType?: string;
  };
  const rows = parseLines(start, end).filter((r) =>
=======
  const { start, end, userType } = req.query as { 
    start?: string; 
    end?: string; 
    userType?: string; 
  };
  const rows = parseLines(start, end).filter((r) => 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value),

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
=======

    .sort((a, b) => b.value - a.value);
    .sort((a, b) => b.value - a.value),


=======

    .sort((a, b) => b.value - a.value);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    .sort((a, b) => b.value - a.value);
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    .sort((a, b) => b.value - a.value),



    .sort((a, b) => b.value - a.value);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

    .sort((a, b) => b.value - a.value);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    .sort((a, b) => b.value - a.value),


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));

<<<<<<< HEAD
=======
  const days = Object.keys(byDay).sort()
  const line = days.map((d) => ({ date: d, value: byDay[d] }))

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent']
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }))
>>>>>>> main
=======
    .sort((a, b) => b.value - a.value);

  const days = Object.keys(byDay).sort();
const line = days.map(d => ({ date: d, value: byDay[d] }));

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const funnelStages = [
    'Visit',
    'AI Prompt Used',
    'Post Created',
    'Message Sent',
  ];
<<<<<<< HEAD
  const funnel = funnelStages.map((stage) => ({ 
    label: stage, 
    value: byEvent[stage] || 0 
  }));
=======
  const funnel = funnelStages.map(stage => ({
    label: stage,
    value: byEvent[stage] || 0,
  }));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  res.status(200).json({ pagesMostUsed, events, line, funnel });


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
function featureFromPath (page?: string): string {
// Check condition
if (return 'other', ) {
  $2
}
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
};
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
=======
};

    .sort((a, b) => b.value - a.value)
  const days = Object.keys(byDay).sort()
  const line = days.map((d) => ({ date: d, value: byDay[d] }))
  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent']
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] |0 }))
  res.status(200).json({ pagesMostUsed, events, line, funnel });
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    .sort((a, b) => b.value - a.value),

  const days = Object.keys(byDay).sort(),
  const line = days.map((d) => ({ date: d, value: byDay[d] })),

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),

  res.status(200).json({ pagesMostUsed, events, line, funnel });
<<<<<<< HEAD
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
};

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  const days = Object.keys(byDay).sort()
  const line = days.map((d) => ({ date: d, value: byDay[d] }))

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent']
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }))

  res.status(200).json({ pagesMostUsed, events, line, funnel });

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
