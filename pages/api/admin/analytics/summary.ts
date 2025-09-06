<<<<<<< HEAD
=======
<<<<<<< HEAD
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


      } catch {}
    }
    return rows
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';

type EventRow = {
<<<<<<< HEAD

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

=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
    return rows;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch {
    return [];
  }
}


  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
.sort((a, b) => b.value - a.value)
  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
<<<<<<< HEAD
    .sort((a, b) => b.value - a.value)
  const days = Object.keys(byDay).sort()
  const line = days.map((d) => ({ date: d, value: byDay[d] }))
  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent']
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] |0 }))
  res.status(200).json({ pagesMostUsed, events, line, funnel });
}

    .sort((a, b) => b.value - a.value);
=======
    .sort((a, b) => b.value - a.value),


  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),
;
  res.status(200).json({ pagesMostUsed, events, line, funnel });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
