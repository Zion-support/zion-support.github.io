import type { NextApiRequest, NextApiResponse } from 'next';
import { readOrgData, filterOrgData } from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });  }
=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const data = readOrgData();

  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    return Array.isArray(v)
      ? v
      : v
          .split(',')
          .map(s => s.trim())
          .filter(Boolean);
<<<<<<< HEAD
  };

  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) || 'all',
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined,
    departments: parseArray(req.query.departments),
    categories: parseArray(req.query.categories),
    zones: parseArray(req.query.zones),
    regions: parseArray(req.query.regions),
    countries: parseArray(req.query.countries),
    search: (req.query.search as string) || undefined,
    teamOnly: req.query.teamOnly === 'true' ? true : undefined,
=======
=======
    return Array.isArray(v) ? v : v.split().map((s) => s.trim()).filter(Boolean)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) || 'all';
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined;
    departments: parseArray(req.query.departments);
    categories: parseArray(req.query.categories);
    zones: parseArray(req.query.zones);
    regions: parseArray(req.query.regions);
    countries: parseArray(req.query.countries);
    search: (req.query.search as string) || undefined;
    teamOnly: req.query.teamOnly === 'true' ? true : undefined};

  const filtered = filterOrgData(data, filters);
<<<<<<< HEAD
  return res.status(200).json(filtered);
=======
    return Array.isArray(v) ? v : v.split().map((s) => s.trim()).filter(Boolean)
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const filtered = filterOrgData(data, filters);
<<<<<<< HEAD
  return res.status(200).json(filtered);
=======
  return res.status(200).json(filtered)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(200).json(filtered)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
