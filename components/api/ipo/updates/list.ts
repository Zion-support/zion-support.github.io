import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);
}



  res.status(200).json(data)

}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
