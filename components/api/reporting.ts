import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest  } from '@/utils/auth';
import { authenticateRequest } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';
interface ReportingData {
<<<<<<< HEAD
  byTenant: Record<string, {
    funnel: { stage: string, count: number}[],
    timeToHireDays: number,
    costPerHireUsd?: number,
    updatedAt: string}>
}

<<<<<<< HEAD

=======
const FILE = null;
  byTenant: Record<
    string
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    {
=======
  byTenant: Record<string, {}
    funnel: { stage: string, count: number,}
}[];
    timeToHireDays: number;
    costPerHireUsd?: number;

<<<<<<< HEAD
const FILE = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    {
=======
    {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
}
  >;

origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
    updatedAt: string
  }>
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const method = (req.method || 'GET').toUpperCase($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const tenantId = $2;
=======
  const method = (req.method |'GET').toUpperCase()
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const tenantId = auth.tenantId!;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  if (method === 'GET') {
    const entry = data.byTenant[tenantId] |{
      funnel: []
      timeToHireDays: 0
      updatedAt: new Date().toISOString()
    }
    return res.status(200).json(entry);  }
  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{};    const entry = data.byTenant[tenantId] |{ funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() }
    return res.status(200).json(entry)
<<<<<<< HEAD
    const updated = updateJsonFile<ReportingData>(
      FILE
=======
  >;

<<<<<<< HEAD
  const method = (req.method |'GET').toUpperCase()
=======
}'
const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} }
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
';
  const method = (req.method || 'GET').toUpperCase(),;

'
  const method = (req.method |'GET').toUpperCase()'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const tenantId = auth.tenantId!;'
  if (method === 'GET') {}
    const data = readJsonFile<ReportingData>(FILE, FALLBACK);
    const entry = data.byTenant[tenantId] |{}
      funnel: []
      timeToHireDays: 0;
      updatedAt: new Date().toISOString()
    }
    return res.status(200).json(entry);  }'
  if (method === 'POST') {}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{};    const entry = data.byTenant[tenantId] |{ funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() }
    return res.status(200).json(entry)
    const updated = updateJsonFile<ReportingData>(
<<<<<<< HEAD
      FILE
const entry = data.byTenant[tenantId] || {
      funnel: [],
      timeToHireDays: 0,
      updatedAt: new Date().toISOString(),
    };
    return res.status(200).json(entry);
  }

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
const updated = updateJsonFile<ReportingData>(
      FILE,
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      curr => {
        next[tenantId] = {
=======
      FILE;
      curr => {}
        next[tenantId] = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          funnel: funnel |next[tenantId]?.funnel |[]
          timeToHireDays:'
            typeof timeToHireDays === 'number'
<<<<<<< HEAD
              ? timeToHireDays
              : next[tenantId]?.timeToHireDays |0
          costPerHireUsd:
            typeof costPerHireUsd === 'number'
              ? costPerHireUsd
              : next[tenantId]?.costPerHireUsd
=======
              ? timeToHireDays;
              : next[tenantId]?.timeToHireDays |0;
          costPerHireUsd:'
            typeof costPerHireUsd === 'number'
              ? costPerHireUsd;
              : next[tenantId]?.costPerHireUsd;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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

  return res.status(405).json({ error: 'Method not allowed',}
});
    return res.status(200).json({ ok: true });
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}