import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
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
    activeUsers30d: 12840,
    gmv: 1450000,
    mrr: 82000,
    funnel: [
      { stage: "Visitors", value: 250000 }
      { stage: "Leads", value: 38000 }
      { stage: "Opportunities", value: 8200 }
      { stage: "Conversions", value: 1650 }
    ]
    clients: [
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {
        name: "Fortune 500 Co"
        summary: "Automated LLM evaluation pipeline, 23% cost reduction"
      }
      {
    ],
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
=======
  }
;
res.status (200).json (data);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
