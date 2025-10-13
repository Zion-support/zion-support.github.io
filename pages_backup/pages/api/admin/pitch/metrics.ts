import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";";
export default async function handler(;
const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })'
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
const data = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    activeUsers30 d: 12840
    gmv: 1450000
    mrr: 82000
    yoyGrowth: 1.85
    completedProjects: 3275
    globalReach: ["]"
res.status(200).json(data);
import type { NextApiRequest, NextApiResponse } from 'next';'
  try {;
const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res && res.status(403).json({ error: " })"
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB);
const data = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ],
    if (req.method === 'GET') {'
      // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
const data = {
  // TODO: Add properties
}
  // TODO: Add properties
}
        activeUsers30 d: 12840,
        gmv: 1450000,
        mrr: 82000,
        churnRate: 0.05,
        ltv: 2400,
        cac: 180
      }
      res.json({ data })
    } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.setHeader('Allow', 'GET')'
      res.status(405).end('Method Not Allowed')'
    }
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(", error)"
    return res.status(500).json({ error: " })"
  }
})