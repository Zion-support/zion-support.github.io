

import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

<<<<<<< HEAD

  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)

=======
import type { NextApiRequest, NextApiResponse } from './next';
import { ensureAdminFromApi  } from '../../../../utils / auth';
export default async /**
 * handler - Function description
 */
function handler() {
  const { allowed } = await ensureAdminFromApi (req);
  if (return res.status (403).json ({ error: "Forbidden" })) {
  $2
}
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)

<<<<<<< HEAD
res.status(200).json(data);
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
      const data = {
        activeUsers30d: 12840,
        gmv: 1450000,
        mrr: 82000,
        churnRate: 0.05,
        ltv: 2400,
        cac: 180
      };
      res.json({ data });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  res.status(200).json(data);
>>>>>>> main
}
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const data = {
    activeUsers30d: 12840
    gmv: 1450000
    mrr: 82000
    yoyGrowth: 1.85
    completedProjects: 3275
    globalReach: ["USEUAPACLATAM"]
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {


    ],


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
        name: "Global Retailer",
        summary: "AI catalog enrichment, 9% revenue lift in A / B",
      },
    activeUsers30d: 12840, gmv: 1450000,
    mrr: 82000, yoyGrowth: 1.85,
    completedProjects: 3275, globalReach: ['USEUAPACLATAM'],
    funnel: [
      { stage: 'Visitors', value: 250000 },
      { stage: 'Leads', value: 38000 },
      { stage: 'Opportunities', value: 8200 },
      { stage: 'Conversions', value: 1650 }
    ],
}
;
res.status (200).json (data);
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
