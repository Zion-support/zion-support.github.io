<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { authenticateRequest } from '@/utils/auth',
import { readJsonFile, updateJsonFile } from '@/utils/fileDb',

interface ReportingData {
  byTenant: Record<string {
    funnel: { stage: string, count: number }[],
    timeToHireDays: number,
    costPerHireUsd?: number,
    updatedAt: string
  }>
}

const FILE = 'reporting.json',
const FALLBACK: ReportingData = { byTenant: {} },

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase(),
  const auth = authenticateRequest(req, method === 'GET'),
  if (!auth.ok) return res.status(401).json({ error: auth.error }),
  const tenantId = auth.tenantId!,

  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK),
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() },
    return res.status(200).json(entry)
  }

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {},
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr.byTenant || {},
      next[tenantId] = {
        funnel: funnel || next[tenantId]?.funnel || [],
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays || 0),
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd,
        updatedAt: new Date().toISOString()},
      return { byTenant: next }
    }, FALLBACK),
    return res.status(200).json(updated.byTenant[tenantId])
  }

  return res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

interface ReportingData {_byTenant: Record<string, _{
    funnel: { stage: string; count: number}[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
  }>;
}

const _FILE = 'reporting.json';
const FALLBACK: ReportingData = {_byTenant: {} };

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _method = (req.method || 'GET').toUpperCase();
  const _auth = authenticateRequest(req, _method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error});
  const _tenantId = auth.tenantId!;

  if (method === 'GET') {_const _data = readJsonFile<ReportingData>(FILE, _FALLBACK);
    const _entry = data.byTenant[tenantId] || { funnel: [], _timeToHireDays: 0, _updatedAt: new Date().toISOString()};
    return res.status(200).json(entry);
  }

  if (method === 'POST') {_const { funnel, _timeToHireDays, _costPerHireUsd} = req.body || {};
    const _updated = updateJsonFile<ReportingData>(_FILE, _(curr) => {_const _next = curr.byTenant || {};
      next[tenantId] = {_funnel: funnel || next[tenantId]?.funnel || [], _timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays || 0), _costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd, _updatedAt: new Date().toISOString()};
      return {_byTenant: next};
    }, FALLBACK);
    return res.status(200).json(updated.byTenant[tenantId]);
  }

  return res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}