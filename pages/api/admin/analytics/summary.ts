import type { NextApiRequest, NextApiResponse } from 'next',;'
import fs from 'fs',;'
import path from 'path',;'
import { ensureAdminFromApi } from '../../../../utils/auth',;
type EventRow = {}
  name: string,
  page?: string,
  userType?: string,
  properties?: Record<string, any>,
  at: string;
},
'
const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl'),

function parseLines(startIso?: string, endIso?: string): EventRow[] {}
  try {}
    if (!fs.existsSync(LOG_FILE)) return [],'
    const raw = fs.readFileSync(LOG_FILE, 'utf8'),'
    const lines = raw.split('\n').filter(Boolean),
    const start = startIso ? new Date(startIso) : null,
    const end = endIso ? new Date(endIso) : null,
    const rows: EventRow[] = [],
    for (const line of lines) {}
      try {}
        const obj = JSON.parse(line),
        if (!obj.at) continue,
        const t = new Date(obj.at),
        if (start && t < start) continue,
        if (end && t > end) continue,
        rows.push(obj)
      } catch {}
    }
    return rows;
  } catch {}
    return []
  }
}





  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value),

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value),

  const days = Object.keys(byDay).sort(),
  const line = days.map((d) => ({ date: d, value: byDay[d] })),
'
  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),

  res.status(200).json({ pagesMostUsed, events, line, funnel });
};'