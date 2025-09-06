
type EventRow = {

    }
    return rows;

  name: string;
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string;
};


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
    }
    return rows;
  } catch {
    return [];
  }
}
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
.sort((a, b) => b.value - a.value)
  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
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
