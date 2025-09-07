
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

<<<<<<< HEAD:pages.disabled/api/admin/pitch/metrics.ts
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)

  res.status(200).json(data);
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
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
import type { NextApiRequest, NextApiResponse } from './next';
import { ensureAdminFromApi  } from '../../../../utils / auth';
export default async /**
 * handler - Function description
 */
function handler() {
  const { allowed } = await ensureAdminFromApi (req);
  if (return res.status (403).json ({ error: "Forbidden" })) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/admin/pitch/metrics.ts
}
  // TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB);
  const data = {
    activeUsers30d: 12840
    gmv: 1450000
    mrr: 82000
    yoyGrowth: 1.85
    completedProjects: 3275
    globalReach: ["USEUAPACLATAM"]
<<<<<<< HEAD:pages.disabled/api/admin/pitch/metrics.ts
=======
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/admin/pitch/metrics.ts
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {
<<<<<<< HEAD
    yoy_growth: 1.85,
    completed_projects: 3275,
    global_reach: ["USEUAPACLATAM"],
    funnel: [;
      { stage: "Visitors", value: 250000 },
      { stage: "Leads", value: 38000 },
      { stage: "Opportunities", value: 8200 },
      { stage: "Conversions", value: 1650 },
    ],
    clients: [;
      {
        name: "Fortune 500 Co"
        summary: "Automated LLM evaluation pipeline, 23% cost reduction"
      }
      {
res.status(200).json(data);
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  // TODO: Replace with real data sources (e && e.g., Supabase, GA4, internal DB)
  const data = {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
    ],

<<<<<<< HEAD:pages.disabled/api/admin/pitch/metrics.ts
  }

}
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }




<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/admin/pitch/metrics.ts
