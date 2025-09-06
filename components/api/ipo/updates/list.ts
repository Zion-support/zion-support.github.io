import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;






  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



  res.status(200).json(data)

}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/feature/merge-conflicts-and-improvements


