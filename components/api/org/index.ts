<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readOrgData, filterOrgData } from '../../../utils/org-data',
import type { OrgFilters, RoleType } from '../../../types/org',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const data = readOrgData(),

  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined,
    return Array.isArray(v) ? v : v.split().map((s) => s.trim()).filter(Boolean)
  },

  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) || 'all',
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined,
    departments: parseArray(req.query.departments),
    categories: parseArray(req.query.categories),
    zones: parseArray(req.query.zones),
    regions: parseArray(req.query.regions),
    countries: parseArray(req.query.countries),
    search: (req.query.search as string) || undefined,
    teamOnly: req.query.teamOnly === 'true' ? true : undefined},

  const filtered = filterOrgData(data, filters),
  return res.status(200).json(filtered)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_OrgFilters, _RoleType} from '../../../types/org';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed'});
  }
  const _data = readOrgData();

  const _parseArray = (_v?: string | string[]) => {_if (!v) return undefined;
    return Array.isArray(v) ? v : v.split(', _').map(_(s) => s.trim()).filter(Boolean);};

  const filters: OrgFilters = {_view: (req.query.view as OrgFilters['view']) || 'all', _roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined, _departments: parseArray(req.query.departments), _categories: parseArray(req.query.categories), _zones: parseArray(req.query.zones), _regions: parseArray(req.query.regions), _countries: parseArray(req.query.countries), _search: (req.query.search as string) || undefined, _teamOnly: req.query.teamOnly === 'true' ? true : undefined};

  const _filtered = filterOrgData(data, filters);
  return res.status(200).json(filtered);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}