import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })

  }

  };
  const data = readOrgData();
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



