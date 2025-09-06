import type { NextApiRequest, NextApiResponse } from 'next';
import { readOrgData, filterOrgData } from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const data = readOrgData($2);
  const parseArray = $2;
    return Array.isArray(v) ? v : v.split().map((s) => s.trim()).filter(Boolean)
  },

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