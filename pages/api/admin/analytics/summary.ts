
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

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';

type EventRow = {

    }
    return rows;

  } catch {
    return [];
  }
}

}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
.sort((a, b) => b.value - a.value)
  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
