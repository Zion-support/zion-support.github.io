

  if (!requireSuperadminApi(req, res)) return;

  const id = String(req && req.query.id || "");
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.status(200).json({ opens: u && u.opens || 0 });
  res && res.status(200).json({ opens: u && u.opens || 0 });

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

  if (!u) return res.status(404).json({ error: 'Not found' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile  } from '../../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const id = String (req.query.id || "");
  const updates = readJsonFile ("updates.json", [] as any[]);
  const u = updates.find ((coordinate_x: any) => x.id === id);
  if (return res.status (404).json ({ error: "Not found" })) {
  $2
}
  res.status (200).json ({ opens: u.opens || 0 });
  res.status (200).json ({ opens: u.opens || 0 });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
  if (!u) return res.status(404).json({ error: 'Not found' });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
