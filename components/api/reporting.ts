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
}