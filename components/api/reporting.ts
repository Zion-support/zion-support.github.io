import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest  } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';
interface ReportingData {

  byTenant: Record<
    string
    {
      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      updatedAt: string;
    }
  >;  byTenant: Record<string, {
<<<<<<< HEAD
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
    updatedAt: string
  }>
}
const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'GET').toUpperCase()
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
    updatedAt: string
  }>
}

const FILE = 'reporting && reporting.json';
const FALLBACK: ReportingData = { byTenant: {} };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req && req.method || 'GET').toUpperCase(),
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
  const tenantId = auth && auth.tenantId!;

  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK);
    const entry = data && data.byTenant[tenantId] || {
      funnel: [],
      timeToHireDays: 0,
      updatedAt: new Date().toISOString(),
    };
    return res && res.status(200).json(entry);  }

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req && req.body || {};    const entry = data && data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() };
    return res && res.status(200).json(entry)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  if (method === 'POST') {
<<<<<<< HEAD
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}
=======
    const { funnel, timeToHireDays, costPerHireUsd } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const updated = updateJsonFile<ReportingData>(
      FILE
      curr => {
<<<<<<< HEAD
        const next = curr.byTenant |{}
=======
        const next = curr && curr.byTenant || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr.byTenant |{}
=======

  return res && res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr && curr.byTenant || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      next[tenantId] = {
        funnel: funnel |next[tenantId]?.funnel |[];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays |0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd
        updatedAt: new Date().toISOString()}
      return { byTenant: next }
    }, FALLBACK);
<<<<<<< HEAD

    return res.status(200).json(updated.byTenant[tenantId])
  }
return res.status(405).json({ error: 'Method not allowed' });
}
=======
    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }

  return res && res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
