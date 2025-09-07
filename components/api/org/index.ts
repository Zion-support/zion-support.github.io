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

