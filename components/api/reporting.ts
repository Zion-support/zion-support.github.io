import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import {authenticate_request} from '@/utils / auth';
import {readJsonFile, updateJsonFile} from '@/utils / file_db';
interface ReportingData {
  by_tenant: Record<;
    string,
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      updated_at: string;
    }

<<<<<<< HEAD
<<<<<<< HEAD
  const method = (req.method || 'GET').toUpperCase(),;


  byTenant: Record<string, {
  >;  by_tenant: Record < string, {
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
  const method = (req.method || 'GET').toUpperCase(),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    updatedAt: string
  }>
}



const FILE = 'reporting.json';
const FALLBACK: ReportingData = { byTenant: {} }
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const method = (req.method || 'GET').toUpperCase(),;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    const { funnel, timeToHireDays, costPerHireUsd } = req && req.body || {};
  }
  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req && req.body || {};


    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};

=======
<<<<<<< HEAD
    funnel: { stage: string, count: number }[]
    timeToHireDays: number
    costPerHireUsd?: number,
    updated_at: string;
  }>;
}


  }
  if (method === 'POST') {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const { funnel, timeToHireDays, costPerHireUsd } = req && req.body || {};

=======

    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const updated = updateJsonFile<ReportingData>(
      FILE
      curr => {

        const next = curr && curr.byTenant || {};

<<<<<<< HEAD
<<<<<<< HEAD
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
    const updated = updateJsonFile<ReportingData>(
      FILE
      curr => {
        const next = curr && curr.byTenant || {};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  return res && res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr && curr.byTenant || {};
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() };
    return res.status(200).json(entry)
  }
  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr.byTenant || {};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  return res && res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr && curr.byTenant || {};

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      next[tenantId] = {
        funnel: funnel |next[tenantId]?.funnel |[];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays |0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd
        updatedAt: new Date().toISOString()}
      return { byTenant: next }
    }, FALLBACK);
<<<<<<< HEAD
<<<<<<< HEAD
    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }
=======

    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }
<<<<<<< HEAD
  return res && res.status(405).json({ error: 'Method not allowed' });
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const FILE = 'reporting.json';
const FALLBACK: ReportingData = { by_tenant: {} }
;
export default /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'GET').toUpperCase (),
  const auth = authenticate_request (req, method === 'GET');
  if (return res.status (401).json ({ error: auth.error })) {
  $2
}
  const tenant_id = auth.tenant_id!;
;
  // Check condition
if ( {) {
  $2
}
    const data = readJsonFile < ReportingData>(FILE, FALLBACK);
    const entry = data.by_tenant[tenant_id] || {
      funnel: [],
      timeToHireDays: 0,
      updated_at: new Date ().toISOString (),
    }
    return res.status (200).json (entry);  }
  // Check condition
if ( {) {
  $2
}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {}    const entry = data.by_tenant[tenant_id] || { funnel: [], timeToHireDays: 0, updated_at: new Date ().toISOString () }
    return res.status (200).json (entry);
  }
  // Check condition
if ( {) {
  $2
}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {}
    const updated = updateJsonFile < ReportingData>(
      FILE,
      curr => {
        const next = curr.by_tenant || {}
        next[tenant_id] = {
          funnel: funnel || next[tenant_id]?.funnel || [],
          timeToHireDays:;
            typeof timeToHireDays === 'number';
              ? timeToHireDays;
              : next[tenant_id]?.timeToHireDays || 0,
          costPerHireUsd:;
            typeof costPerHireUsd === 'number';
              ? costPerHireUsd;
              : next[tenant_id]?.costPerHireUsd,
          updated_at: new Date ().toISOString (),
        }
        return { by_tenant: next }
      },
      FALLBACK);
    return res.status (200).json (updated.by_tenant[tenant_id]);
  }
  return res.status (405).json ({ error: 'Method not allowed' });    const updated = updateJsonFile < ReportingData>(FILE, (curr) => {
      const next = curr.by_tenant || {}
      next[tenant_id] = {
        funnel: funnel || next[tenant_id]?.funnel || [];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenant_id]?.timeToHireDays || 0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenant_id]?.costPerHireUsd,
        updated_at: new Date ().toISOString ()}
      return { by_tenant: next }
    }, FALLBACK);
    return res.status (200).json (updated.by_tenant[tenant_id]);
  }
return res.status (405).json ({ error: 'Method not allowed' });

}
<<<<<<< HEAD
<<<<<<< HEAD
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};


return res.status(405).json({ error: 'Method not allowed' });
}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
