import type { NextApiRequest, NextApiResponse } from 'next';
  }

  };
  const data = readOrgData();

import {readOrgData, filterOrgData} from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {;
    return res.status(405).json({ error: 'Method not allowed' });  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  };
  const data = readOrgData();

  const data = readOrgData();
  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined;
    view: (req && req.query.view as OrgFilters['view']) || 'all',
    roleTypes: parseArray(req && req.query.roleTypes) as RoleType[] | undefined,
    departments: parseArray(req && req.query.departments),
    categories: parseArray(req && req.query.categories),
    zones: parseArray(req && req.query.zones),
    regions: parseArray(req && req.query.regions),
    countries: parseArray(req && req.query.countries),
    search: (req && req.query.search as string) || undefined,
    teamOnly: req && req.query.teamOnly === 'true' ? true : undefined,  };
    return Array.isArray(v) ? v : v.split().map((s) => s.trim()).filter(Boolean)
  };
=======
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })

  }
=======

  };
  const data = readOrgData();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
==============

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const data = readOrgData();
  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined;





}

=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
