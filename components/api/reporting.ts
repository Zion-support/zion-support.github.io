<<<<<<< HEAD


    {
  byTenant: Record<string, {}
    funnel: { stage: string, count: number,}
}[];
    "timeToHireDays": number;
    costPerHireUsd?: number;
    "updatedAt": string
  }>
}

const FILE = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    {
      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      "updated_at": string;
    }
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
    updatedAt: string
  }>

=======

import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';
interface ReportingData {


import { authenticateRequest  } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';

interface ReportingData {
  byTenant: Record<string, {
    funnel: { stage: string, count: number}[],
    timeToHireDays: number,
    costPerHireUsd?: number,
    updatedAt: string}>

  byTenant: Record<string, {}
    funnel: { stage: string, count: number,}
}[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
  }    />,
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const FILE = null;
    {}
      funnel: { stage: string; count: number,}
}[];
      timeToHireDays: number;
      costPerHireUsd?: number;
      updated_at: string;
    }

<<<<<<< HEAD


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



    const updated = updateJsonFile<ReportingData>(
      FILE
  const method = (req.method |'GET').toUpperCase()
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
      FILE

=======
  >;



    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
    updatedAt: string
  }>
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const tenantId = $2;

const FILE = 'reporting.json';

const FALLBACK: ReportingData = { byTenant: ,}
};
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

 ;
  const method = (req.method || 'GET').toUpperCase(),;

const method = (req.method |'GET').toUpperCase()
 ;
  const auth = authenticateRequest(req, method === 'GET');}
  if (!auth.ok) return res.status(401).json({ error: auth.error,}
});

const tenantId = auth.tenantId!;
  if (method = == 'GET') {
   ;
  const data = readJsonFile<ReportingData    />(FILE, FALLBACK);

>>>>>>> origin/cursor/delete-old-data-records-6bba
const entry = data.byTenant[tenantId] || {
      funnel: [],
      timeToHireDays: 0,}
      updatedAt: new Date().toISOString(),}
    };
    return res.status(200).json(entry);
  }

  if (method = == 'POST') {}
   ;}
  const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};

const updated = updateJsonFile<ReportingData    />(
      FILE,
<<<<<<< HEAD


        const next = curr && curr.byTenant || {};


        next[tenantId] = {
      FILE;
      curr => {}
        next[tenantId] = {}
          funnel: funnel |next[tenantId]?.funnel |[]
          timeToHireDays:'
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




=======
origin/cursor/automate-test-improve-and-merge-code-2533
      curr => {

      }
      FALLBACK
      curr => {
        next[tenantId] = {
          funnel: funnel |next[tenantId]?.funnel |[]
          timeToHireDays:
            typeof timeToHireDays === 'number'
              ? timeToHireDays;
              : next[tenantId]?.timeToHireDays |0;
costPerHireUsd:
            typeof costPerHireUsd === 'number'
              ? costPerHireUsd;
              : next[tenantId]?.costPerHireUsd;
updatedAt: new Date().toISOString()}
       ,}
}
       ;
  return { byTenant: next }
     ,
}
      FALLBACK;
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }
  return res && res.status(405).json({ error: 'Method not allowed' });    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr && curr.byTenant || {};
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() };
    return res.status(200).json(entry)
  }
  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = curr.byTenant || {};


>>>>>>> origin/cursor/delete-old-data-records-6bba
      next[tenantId] = {
        funnel: funnel |next[tenantId]?.funnel |[];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays |0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd
        updatedAt: new Date().toISOString()}
      return { byTenant: next }
    }, FALLBACK);
<<<<<<< HEAD
=======
    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


    return res && res.status(200).json(updated && updated.byTenant[tenantId])
  }
<<<<<<< HEAD
=======
  return res && res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}

<<<<<<< HEAD
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
=======
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};


  return res.status(405).json({ error: 'Method not allowed',}
});
    return res.status(200).json({ ok: true });
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}
<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
