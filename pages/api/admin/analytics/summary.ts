import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';
type EventRow = $2;
  page?: string,
  userType?: string,
  properties?: Record<string, any>,
  at: string},

const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl'),

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [],
    const raw = fs.readFileSync($2);
    const lines = raw.split('\n').filter($2);
    const start = $2;
    const end = $2;
    const rows: EventRow[] = [],
    for (const line of lines) {
      try {
        const obj = JSON.parse($2);
        if (!obj.at) continue,
        const t = new Date($2);
        if (start && t < start) continue,
        if (end && t > end) continue,
        rows.push(obj)
      } catch {}
    }
    return rows
  } catch {
    return []
  }
}

function featureFromPath(page?: string): string {
  if (!page) return 'other',
  const p = page.toLowerCase($2);
  if (p.includes('/services') || p.includes('ai')) return 'AI services',
  if (p.includes('talent') || p.includes('job')) return 'job board',
  if (p.includes('rental')) return 'rentals',
  return 'other'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi($2);
  if (!allowed) return res.status(403).json($2);
  const { start, end, userType } = req.query as { start?: string, end?: string, userType?: string },

  const rows = parseLines(start, end).filter((r) => !userType || userType = $2;
  const byFeature: Record<string, number> = {},
  const byEvent: Record<string, number> = {},
  const byDay: Record<string, number> = {},

  for (const r of rows) {
    const f = featureFromPath($2);
    byFeature[f] = (byFeature[f] || 0) + 1,
    byEvent[r.name] = (byEvent[r.name] || 0) + 1,
    const day = r.at.slice($2);
    byDay[day] = (byDay[day] || 0) + 1
  }

  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value),

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value),

  const days = Object.keys(byDay).sort($2);
  const line = days.map((d) => ({ date: d, value: byDay[d] })),

  const funnelStages = $2;
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),

  res.status(200).json({ pagesMostUsed, events, line, funnel })
}