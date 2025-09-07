import type { NextApiRequest, NextApiResponse } from 'next;
import { authenticateRequest  } from @/utils/auth';
import { authenticateRequest } from '@/utils/auth;
import { readJsonFile, updateJsonFile } from @/utils/fileDb';
interface ReportingData {

    {
=======
  byTenant: Record<string, {}
    funnel: { stage: string, count: number}
}[];
    timeToHireDays: number;
    costPerHireUsd?: number;


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      updated_at: string;
    }
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
=======
    updatedAt: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }>

  if (method === 'GET) {
    const entry = data.byTenant[tenantId] |{
      funnel: []
      timeToHireDays: 0
      updatedAt: new Date().toISOString()
    }
    return res.status(200).json(entry);  }
  if (method === POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}    const entry = data.byTenant[tenantId] |{ funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() }
    return res.status(200).json(entry)

  const auth = authenticateRequest(req, method === 'GET);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const tenantId = auth.tenantId!;
  if (method === 'GET') {}
    const data = readJsonFile<ReportingData>(FILE, FALLBACK);
    const entry = data.byTenant[tenantId] |{}
      funnel: []
      timeToHireDays: 0;
      updatedAt: new Date().toISOString()
    }
    return res.status(200).json(entry);  }
  if (method === POST') {}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}    const entry = data.byTenant[tenantId] |{ funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() }
    return res.status(200).json(entry)
    const updated = updateJsonFile<ReportingData>(

          funnel: funnel |next[tenantId]?.funnel |[]
          timeToHireDays:'
            typeof timeToHireDays === number

          updatedAt: new Date().toISOString()
        }
        return { byTenant: next }
      }
<<<<<<< HEAD
      FALLBACK
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }
    const data = readJsonFile<ReportingData>(FILE, FALLBACK),
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() },
    return res.status(200).json(entry)
  }

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {},
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = $2;
      next[tenantId] = {
        funnel: funnel || next[tenantId]?.funnel || [],
        timeToHireDays: typeof timeToHireDays = $2;
        costPerHireUsd: typeof costPerHireUsd = $2;
        updatedAt: new Date().toISOString()},
      return { byTenant: next}
    }, FALLBACK),
=======
      FALLBACK;
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }

  return res.status(405).json({ error: Method not allowed}
});
    return res.status(200).json({ ok: true });
  }
return res.status(405).json({ error: 'Method not allowed'}
});
}