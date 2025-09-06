<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}



  if (!u) return res.status(404).json({ error: 'Not found' });

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  if (!requireSuperadminApi(req, res)) return;

  const id = String(req && req.query.id || "");
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.status(200).json({ opens: u && u.opens || 0 });
  res && res.status(200).json({ opens: u && u.opens || 0 });

}

<<<<<<< HEAD

=======
  if (!u) return res.status(404).json({ error: 'Not found' });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
