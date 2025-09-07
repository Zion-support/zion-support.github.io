import type { NextApiRequest, NextApiResponse } from 'next';
  }

  };
  const data = readOrgData();

  const data = readOrgData();
  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined;
    return Array && Array.isArray(v)

import {readOrgData, filterOrgData} from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {}
    return res.status(405).json({ error: 'Method not allowed',}
});
  }
return Array.isArray(v)
origin/cursor/automate-test-improve-and-merge-code-2533
      ? v
      : v
      ? v;
      : v;
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
  }
  const filters: OrgFilters = {

const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) || 'all';
    role_types: parse_array (req.query.role_types) as RoleType[] | undefined;
    departments: parse_array (req.query.departments);
    categories: parse_array (req.query.categories);
    zones: parse_array (req.query.zones);
    regions: parse_array (req.query.regions);
    countries: parse_array (req.query.countries);
    search: (req.query.search as string) || undefined,
    team_only: req.query.team_only === 'true' ? true : undefined}
;
  const filtered = filterOrgData (data, filters);
  return res.status (200).json (filtered);
  }
;
  const filtered = filterOrgData (data, filters);
  return res.status (200).json (filtered);  return res.status (200).json (filtered);
}

    view: (req.query.view as OrgFilters['view']) |'all'
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
departments: parseArray(req.query.departments)
    categories: parseArray(req.query.categories)
    zones: parseArray(req.query.zones)
    regions: parseArray(req.query.regions)
    countries: parseArray(req.query.countries)}
    search: (req.query.search as string) |undefined;}
teamOnly: req.query.teamOnly === 'true' ? true : undefined,  }
;
  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) |'all';

    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;}
    departments: parseArray(req.query.departments)categories: parseArray(req.query.categories)zones: parseArray(req.query.zones)regions: parseArray(req.query.regions)countries: parseArray(req.query.countries)search: (req.query.search as string) |undefined;}
    teamOnly: req.query.teamOnly = == 'true' ? true : undefined,  }
;
  const filters: OrgFilters = {view: (req.query.view as OrgFilters['view']) |'all';
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req.query.departments)categories: parseArray(req.query.categories)zones: parseArray(req.query.zones)regions: parseArray(req.query.regions)countries: parseArray(req.query.countries)search: (req.query.search as string) |undefined;}
    teamOnly: req.query.teamOnly = == 'true' ? true : undefine,}
}
;
  const filtered = filterOrgData(data, filters);
  return res.status(200).json(filtered);
origin/cursor/automate-test-improve-and-merge-code-2533

