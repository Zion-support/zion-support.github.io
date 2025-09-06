




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    }
    return rows;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

  } catch {
    return [];
  }
}


function featureFromPath(page?: string): string {
if (!page) return 'other'
  const p = page.toLowerCase()
  if (p.includes('/services') |p.includes('ai')) return 'AI services'
  if (p.includes('talent') |p.includes('job')) return 'job board'
  if (p.includes('rental')) return 'rentals'
  return 'other'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
.sort((a, b) => b.value - a.value)
  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))



    .sort((a, b) => b.value - a.value),



  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),
;
  res.status(200).json({ pagesMostUsed, events, line, funnel });
};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));

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

  res.status(200).json({ pagesMostUsed, events, line, funnel });





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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


