import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { readOrgData, filterOrgData } from '../../../utils/org-data';
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const data = readOrgData();
  const parseArray = (v?: string | string[]) => {}
    if (!v) return undefined;
    return Array && Array.isArray(v)
import {readOrgData, filterOrgData} from '../../../utils/org-data';
>>>>>>> merged-prs-20250907-203621
import type { OrgFilters, RoleType } from '../../../types/org';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

<<<<<<< HEAD
  const parseArray = (v: string | string[] | undefined) => {
    if (!v) return undefined;
    return Array.isArray(v)
=======
<<<<<<< HEAD
=======
  }}const data  = readOrgData()const data = readOrgData()const parseArray = (v?: string | string[]) => {if (!v) return undefined;
    return Array && Array.isArray(v)import { readOrgData, filterOrgData } from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
export default function handler() {if (req.method !== 'GET') {return res.status(405).json({ error: 'Method not allowed' })}
return Array.isArray(v)? v;
  const filtered = filterOrgData(data, filters)return res.status(200).json(filtered)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
  return res.status(200).json(filtered);  return res.status(200).json(filtered)
=======
import {readOrgData, filterOrgData} from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {}
    return res.status(405).json({ error: 'Method not allowed',}
});
  }
return Array.isArray(v)
      ? v;
      : v;
          .split(',')
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
=======
  return res && res.status(200).json(filtered);
  };
  const filtered = filterOrgData(data, filters);
  return res && res.status(200).json(filtered);  return res && res.status(200).json(filtered)
}



<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {readOrgData, filterOrgData} from '../../../utils / org - data';
import type { OrgFilters, RoleType } from '../../../types / org';
;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ? v
      : v
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
<<<<<<< HEAD
  };

  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) || 'all',
=======
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
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
  const filters: OrgFilters = $2;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined,
    departments: parseArray(req.query.departments),
    categories: parseArray(req.query.categories),
    zones: parseArray(req.query.zones),
    regions: parseArray(req.query.regions),
    countries: parseArray(req.query.countries),
    search: (req.query.search as string) || undefined,
<<<<<<< HEAD
    teamOnly: req.query.teamOnly === 'true' ? true : undefined,
  };

  const data = readOrgData();
  const filtered = filterOrgData(data, filters);
  return res.status(200).json(filtered);
}
=======
    teamOnly: req.query.teamOnly = $2;
  const filtered = filterOrgData($2);
  return res.status(200).json(filtered)
<<<<<<< HEAD
}
=======
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
  return res.status(200).json(filtered);

=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
