import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
  const data = {
<<<<<<< HEAD
    activeUsers30d: 12840,
    gmv: 1450000,
    mrr: 82000,
    yoyGrowth: 1.85,
    completedProjects: 3275,
    globalReach: ['US', 'EU', 'APAC', 'LATAM'],
    funnel: [
      { stage: 'Visitors', value: 250000 },
      { stage: 'Leads', value: 38000 },
      { stage: 'Opportunities', value: 8200 },
      { stage: 'Conversions', value: 1650 }
    ],
    clients: [
      { name: 'Fortune 500 Co', summary: 'Automated LLM evaluation pipeline, 23% cost reduction' },
      { name: 'Global Retailer', summary: 'AI catalog enrichment, 9% revenue lift in A/B' }
    ]
  };

  res.status(200).json(data);
<<<<<<< HEAD
=======
    activeUsers30d: 12840, gmv: 1450000,
    mrr: 82000, yoyGrowth: 1.85,
    completedProjects: 3275, globalReach: ['USEUAPACLATAM'],
    funnel: [
      
      { stage: 'Visitors', value: 250000 },
      { stage: 'Leads', value: 38000 },
      { stage: 'Opportunities', value: 8200 },
      { stage: 'Conversions', value: 1650 }
    ],
    clients: [
      { name: 'Fortune 500 Co', summary: 'Automated LLM evaluation pipeline, 23% cost reduction' },
      { name: 'Global Retailer', summary: 'AI catalog enrichment, 9% revenue lift in A/B' }
    ]
  };

  res.status(200).json(data)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
