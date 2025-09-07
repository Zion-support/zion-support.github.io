<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';
interface ReportingData {
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge


import { authenticateRequest  } from '@/utils/auth';
import { readJsonFile, updateJsonFile } from '@/utils/fileDb';

interface ReportingData {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  byTenant: Record<string, {
    funnel: { stage: string, count: number}[],
    timeToHireDays: number,
    costPerHireUsd?: number,
    updatedAt: string}>
<<<<<<< HEAD
}

const FILE = $2;
const FALLBACK: ReportingData = $2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
}
=======
<<<<<<< HEAD
import {authenticate_request} from '@/utils / auth';
import {readJsonFile, updateJsonFile} from '@/utils / file_db';
interface ReportingData {
  by_tenant: Record<;
    string,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  byTenant: Record<string, {}
    funnel: { stage: string, count: number,}
}[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
  }    />,
>>>>>>> origin/chore/fix-lint-and-merge
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
  >;

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number
    updatedAt: string
  }>
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  const method = (req.method || 'GET').toUpperCase($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const tenantId = $2;
<<<<<<< HEAD
  if (method === 'GET') {
    const data = readJsonFile<ReportingData>(FILE, FALLBACK),
    const entry = data.byTenant[tenantId] || { funnel: [], timeToHireDays: 0, updatedAt: new Date().toISOString() },
    return res.status(200).json(entry)
  }
=======
=======


  const method = (req.method || 'GET').toUpperCase(),;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const auth = authenticateRequest(req, method === 'GET');
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const tenantId = auth.tenantId!;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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

    const { funnel, timeToHireDays, costPerHireUsd } = req && req.body || {};

=======

    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> origin/chore/fix-lint-and-merge
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
origin/cursor/automate-test-improve-and-merge-code-2533
      curr => {
<<<<<<< HEAD
=======

        const next = curr && curr.byTenant || {};

<<<<<<< HEAD
    const { funnel, timeToHireDays, costPerHireUsd } = req.body |{}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
    const updated = updateJsonFile<ReportingData>(
      FILE
      curr => {
        const next = curr && curr.byTenant || {};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }
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


<<<<<<< HEAD
return res.status(405).json({ "error": 'Method not allowed',;'
});
return res.status(200).json(updated.byTenant[tenantId]);
  }
return res.status(405).json({ "error": 'Method not allowed',;'
});
}
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
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
<<<<<<< HEAD
    return res.status(200).json(updated.byTenant[tenantId])
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
=======
=======
  return res.status(405).json({ error: 'Method not allowed',}
});
    return res.status(200).json(updated.byTenant[tenantId])
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      next[tenantId] = {
        funnel: funnel |next[tenantId]?.funnel |[];
        timeToHireDays: typeof timeToHireDays === 'number' ? timeToHireDays : (next[tenantId]?.timeToHireDays |0);
        costPerHireUsd: typeof costPerHireUsd === 'number' ? costPerHireUsd : next[tenantId]?.costPerHireUsd
        updatedAt: new Date().toISOString()}
      return { byTenant: next }
    }, FALLBACK);
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
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
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};


return res.status(405).json({ error: 'Method not allowed' });
}
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
