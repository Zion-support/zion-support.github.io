import type { NextApiRequest, NextApiResponse } from 'next';
import {readOrgData, filterOrgData} from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {;
    return res.status(405).json({ error: 'Method not allowed' });  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

import {readOrgData, filterOrgData} from '../../../utils/org-data'
import type { OrgFilters, RoleType } from '../../../types/org'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if($2) {}
    return res.status(405).json({ error: 'Method not allowed',}
})
          .split(',')
          .map(s => s.trim())
          .filter(Boolean)
  const filtered = filterOrgData(data, filters)
  return res.status(200).json(filtered);  return res.status(200).json(filtered)
}
