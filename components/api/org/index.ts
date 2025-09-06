import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  };
  const data = readOrgData();

  const data = readOrgData();
  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined;



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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const filtered = filterOrgData(data, filters);
  return res && res.status(200).json(filtered);  return res && res.status(200).json(filtered)
}

