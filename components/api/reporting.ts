import type { NextApiRequest, NextApiResponse } from 'next';


    {
      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      updated_at: string;
    }


    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    updatedAt: string
  }>
}



const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'GET').toUpperCase()
  const method = (req.method || 'GET').toUpperCase(),;
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const tenantId = auth.tenantId!;
  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK);
    const entry = data.byTenant[tenantId] |{
      funnel: []
      timeToHireDays: 0
      updatedAt: new Date().toISOString()
    }
    return res.status(200).json(entry);  }
  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{};    const entry = data.byTenant[tenantId] |{ funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() }
    return res.status(200).json(entry)
=======
    funnel: { stage: string, count: number }[]
    timeToHireDays: number
    costPerHireUsd?: number,
    updated_at: string;
  }>;
}


  }
  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
    const updated = updateJsonFile<ReportingData>(
      FILE
      curr => {

        const next = curr && curr.byTenant || {};

        next[tenantId] = {
          funnel: funnel |next[tenantId]?.funnel |[]
          timeToHireDays:
            typeof timeToHireDays === 'number'
              ? timeToHireDays
              : next[tenantId]?.timeToHireDays |0
          costPerHireUsd:
            typeof costPerHireUsd === 'number'
              ? costPerHireUsd
              : next[tenantId]?.costPerHireUsd
          updatedAt: new Date().toISOString()
        }
        return { byTenant: next }
      }
      FALLBACK
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }


  return res && res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr && curr.byTenant || {};

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      next[tenantId] = {
        funnel: funnel |next[tenantId]?.funnel |[];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays |0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd
        updatedAt: new Date().toISOString()}
      return { byTenant: next }
    }, FALLBACK);

    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }

  return res && res.status(405).json({ error: 'Method not allowed' });
}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
