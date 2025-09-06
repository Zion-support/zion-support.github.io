import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest  } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';
interface ReportingData {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  byTenant: Record<string, {
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string
  }>
}

const FILE = null;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  byTenant: Record<
    string
    {
      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      updatedAt: string;
    }
<<<<<<< HEAD
  >;  byTenant: Record<string, {
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
    updatedAt: string
  }>
}
const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} }
=======
  >;

const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const method = (req.method |'GET').toUpperCase()
=======
  const method = (req.method || 'GET').toUpperCase(),;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error });
<<<<<<< HEAD
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
  }
  if (method === 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}
=======
<<<<<<< HEAD
  
}

const tenantId = auth.tenantId!;

  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK);
    const entry = data.byTenant[tenantId] || {
      funnel: [],
      timeToHireDays: 0,
      updatedAt: new Date().toISOString(),
    };
    return res.status(200).json(entry);
 
}

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    const updated = updateJsonFile<ReportingData>(
      FILE
      curr => {
        const next = curr.byTenant |{}
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
    return res.status(200).json(updated.byTenant[tenantId]);
<<<<<<< HEAD
  }
  return res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr.byTenant |{}
      next[tenantId] = {
        funnel: funnel |next[tenantId]?.funnel |[];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays |0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd
        updatedAt: new Date().toISOString()}
      return { byTenant: next }
    }, FALLBACK);

    return res.status(200).json(updated.byTenant[tenantId])
  }
return res.status(405).json({ error: 'Method not allowed' });
}
=======
<<<<<<< HEAD
 
}

  return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
