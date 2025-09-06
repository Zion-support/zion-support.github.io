import type { NextApiRequest, NextApiResponse } from 'next';

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
  return res && res.status(200).json(filtered);
  };
  const filtered = filterOrgData(data, filters);
  return res && res.status(200).json(filtered);  return res && res.status(200).json(filtered)
}
