<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse,
  from 'next';
import { readOrgData, filterOrgData,
  from '../../../utils/org-data';
import type { OrgFilters, RoleType,
  from '../../../types/org';
export default function handler(req: NextApiRequest,,,
  res: NextApiResponse) {
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/chore/fix-lint-and-merge

import type { OrgFilters, RoleType } from '../../../types/org;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
  if (req.method !== GET') {
    return res.status(405).json({ error: 'Method not allowed })
  }
  if (req.method !== 'GET') {'
}
return res.status(405).json({ "error": 'Method not allowed',;'
});
  }

  };
  const data = readOrgData();

  const data = readOrgData();
  const parseArray = (v?: string | string[]) => {}
    if (!v) return undefined;
    return Array && Array.isArray(v)
import {readOrgData, filterOrgData} from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const data = readOrgData($2);
  const parseArray = $2;
    return Array.isArray(v) ? v : v.split().map((s) => s.trim()).filter(Boolean)
  },

  }}const data  = readOrgData()const data = readOrgData()const parseArray = (v?: string | string[]) => {if (!v) return undefined;
    return Array && Array.isArray(v)import { readOrgData, filterOrgData } from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
export default function handler() {if (req.method !== 'GET') {return res.status(405).json({ error: 'Method not allowed' })}
return Array.isArray(v)? v;
  const filtered = filterOrgData(data, filters)return res.status(200).json(filtered)

  const filters: OrgFilters = {
    view: (req && req.query.view as OrgFilters['view']) || 'all';
    roleTypes: parseArray(req && req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req && req.query.departments);
    categories: parseArray(req && req.query.categories);
    zones: parseArray(req && req.query.zones);
    regions: parseArray(req && req.query.regions);
    countries: parseArray(req && req.query.countries);
    search: (req && req.query.search as string) || undefined,
    teamOnly: req && req.query.teamOnly === 'true' ? true : undefined};

  const filtered = filterOrgData(data, filters);
  return res.status(200).json(filtered);  return res.status(200).json(filtered)
=======
import {readOrgData, filterOrgData} from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/main
  if (req.method !== 'GET') {}
    return res.status(405).json({ error: 'Method not allowed',
  },,
  });
  }
return Array.isArray(v)
      ? v;
      : v;
          .split(',,,
  ')
          .map(s => s.trim())
          .filter(Boolean);
  }

const filters: OrgFilters = {

    view: (req.query.view as OrgFilters['view']) |'all'
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
departments: parseArray(req.query.departments)
    categories: parseArray(req.query.categories)
    zones: parseArray(req.query.zones)
    regions: parseArray(req.query.regions)
    countries: parseArray(req.query.countries)}
    search: (req.query.search as string) |undefined;}
teamOnly: req.query.teamOnly === 'true' ? true : undefined}
  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) |'all';

    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;}
    departments: parseArray(req.query.departments)categories: parseArray(req.query.categories)zones: parseArray(req.query.zones)regions: parseArray(req.query.regions)countries: parseArray(req.query.countries)search: (req.query.search as string) |undefined;}
    teamOnly: req.query.teamOnly = == 'true' ? true : undefined}
  const filters: OrgFilters = {view: (req.query.view as OrgFilters['view']) |'all';
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req.query.departments)categories: parseArray(req.query.categories)zones: parseArray(req.query.zones)regions: parseArray(req.query.regions)countries: parseArray(req.query.countries)search: (req.query.search as string) |undefined;}
    teamOnly: req.query.teamOnly = == 'true' ? true : undefine,}
>>>>>>> origin/chore/fix-lint-and-merge
}
import {readOrgData, filterOrgData} from '../../../utils / org - data';
import type { OrgFilters, RoleType } from '../../../types / org';
;
<<<<<<< HEAD
  const filtered = filterOrgData(data,,,
  filters);
=======
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: 'Method not allowed' });  }export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  const data = readOrgData ();
;
  const parse_array = (v?: string | string[]) =>: any {
    // Check condition
if (return undefined) {
  $2
}
    return Array.is_array (v);
      ? v;
      : v;
          .split (', ');
          .map (string => s.trim ());
          .filter (Boolean);
  }
;
  const filters: OrgFilters = {
return Array.isArray(v)
origin/cursor/automate-test-improve-and-merge-code-2533
      ? v
      : v
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
  }
  const filters: OrgFilters = {}
  const filters: OrgFilters = {'
    view: (req && req.query.view as OrgFilters[view]) || 'all';
    roleTypes: parseArray(req && req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req && req.query.departments);
    categories: parseArray(req && req.query.categories);
    zones: parseArray(req && req.query.zones);
    regions: parseArray(req && req.query.regions);
    countries: parseArray(req && req.query.countries);

  const filtered = filterOrgData(data, filters);
  return res.status(200).json(filtered);  return res.status(200).json(filtered)
}'
import {readOrgData, filterOrgData} from '../../../utils / org - data';'
import type { OrgFilters, RoleType } from '../../../types / org';
;
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (405).json ({ error: 'Method not allowed' });  }export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    return res.status (405).json ({ error: 'Method not allowed' });
  }
  const data = readOrgData ();
;
  const parse_array = (v?: string | string[]) =>: any {}
    // Check condition;
if (return undefined) {}
  $2;
}
    return Array.is_array (v);
      ? v;
      : v;'
          .split (', ');
          .map (string => s.trim ());
          .filter (Boolean);
  }
;
  const filters: OrgFilters = {'
    view: (req.query.view as OrgFilters['view']) || 'all',
    role_types: parse_array (req.query.role_types) as RoleType[] | undefined,
    departments: parse_array (req.query.departments),
    categories: parse_array (req.query.categories),
    zones: parse_array (req.query.zones),
    regions: parse_array (req.query.regions),
    countries: parse_array (req.query.countries),
    search: (req.query.search as string) || undefined,
    team_only: req.query.team_only === 'true' ? true : undefined,  }
;
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
      : v;
          .split(',').map(s => s.trim()).filter(Boolean)}
  const filters: OrgFilters = {const filters: OrgFilters = {view: (req && req.query.view as OrgFilters['view']) || 'all';
    roleTypes: parseArray(req && req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req && req.query.departments)categories: parseArray(req && req.query.categories)zones: parseArray(req && req.query.zones)regions: parseArray(req && req.query.regions)countries: parseArray(req && req.query.countries)search: (req && req.query.search as string) || undefined,teamOnly: req && req.query.teamOnly === 'true' ? true : undefined}const filtered = filterOrgData(data, filters)return res.status(200).json(filtered)return res.status(200).json(filtered)}
import { readOrgData, filterOrgData } from '../../../utils / org - data';
import type { OrgFilters, RoleType } from '../../../types / org';export default /**;
 * handler - Function description;
 */;
function handler() {// Check condition;
if ( {) {$2;
}
    return res.status (405).json ({ error: 'Method not allowed' })}export default /**;
 * handler - Function description;
 */;
function handler() {// Check condition;
if ( {) {$2;
}
    return res.status (405).json ({ error: 'Method not allowed' })}
  const data  = readOrgData ()const parse_array = (v?: string | string[]) =>: any {// Check condition;
if (return undefined) {$2;
}
    return Array.is_array (v)? v;
      : v;
          .split (', ').map (string => s.trim ()).filter (Boolean)}const filters: OrgFilters = {view: (req.query.view as OrgFilters['view']) || 'all',role_types: parse_array (req.query.role_types) as RoleType[] | undefined,departments: parse_array (req.query.departments),categories: parse_array (req.query.categories),zones: parse_array (req.query.zones),regions: parse_array (req.query.regions),countries: parse_array (req.query.countries),search: (req.query.search as string) || undefined,team_only: req.query.team_only === 'true' ? true : undefined,  }const filters: OrgFilters = {view: (req.query.view as OrgFilters['view']) || 'all';
    role_types: parse_array (req.query.role_types) as RoleType[] | undefined;
    departments: parse_array (req.query.departments)categories: parse_array (req.query.categories)zones: parse_array (req.query.zones)regions: parse_array (req.query.regions)countries: parse_array (req.query.countries)search: (req.query.search as string) || undefined,team_only: req.query.team_only === 'true' ? true : undefined}const filtered = filterOrgData (data, filters)return res.status (200).json (filtered)}const filtered = filterOrgData (data, filters)return res.status (200).json (filtered)return res.status (200).json (filtered)}view: (req.query.view as OrgFilters['view']) |'all';
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req.query.departments)categories: parseArray(req.query.categories)zones: parseArray(req.query.zones)regions: parseArray(req.query.regions)countries: parseArray(req.query.countries)search: (req.query.search as string) |undefined;
    teamOnly: req.query.teamOnly === 'true' ? true : undefined,  }
const filters: OrgFilters = {view: (req.query.view as OrgFilters['view']) |'all';
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req.query.departments)categories: parseArray(req.query.categories)zones: parseArray(req.query.zones)regions: parseArray(req.query.regions)countries: parseArray(req.query.countries)search: (req.query.search as string) |undefined;
    teamOnly: req.query.teamOnly === 'true' ? true : undefined}
  const filtered = filterOrgData(data, filters)return res.status(200).json(filtered)
  const filters: OrgFilters = $2;
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined,
    departments: parseArray($2);
    categories: parseArray($2);
    zones: parseArray($2);
    regions: parseArray($2);
    countries: parseArray($2);
    search: (req.query.search as string) || undefined,
    teamOnly: req.query.teamOnly = $2;
  const filtered = filterOrgData($2);
  return res.status(200).json(filtered)
}
    view: (req.query.view as OrgFilters['view']) |'all'
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined
    departments: parseArray(req.query.departments)
    categories: parseArray(req.query.categories)
    zones: parseArray(req.query.zones)
    regions: parseArray(req.query.regions)
    countries: parseArray(req.query.countries)}
    search: (req.query.search as string) |undefined;}
teamOnly: req.query.teamOnly === 'true' ? true : undefined }
  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) |'all';

    view: (req.query.view as OrgFilters['view]) || all';
    role_types: parse_array (req.query.role_types) as RoleType[] | undefined;
    departments: parse_array (req.query.departments);
    categories: parse_array (req.query.categories);
    zones: parse_array (req.query.zones);
    regions: parse_array (req.query.regions);
    countries: parse_array (req.query.countries);

    team_only: req.query.team_only === 'true ? true : undefined}
  const filtered = filterOrgData (data, filters);
  return res.status (200).json (filtered);
  }
  return res.status (200).json (filtered);  return res.status (200).json (filtered);
}

  const filtered = filterOrgData(data, filters);
>>>>>>> origin/main
  return res.status(200).json(filtered);
