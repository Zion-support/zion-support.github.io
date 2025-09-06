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
    }
    return rows;
  } catch {
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
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
.sort((a, b) => b.value - a.value)
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
}
