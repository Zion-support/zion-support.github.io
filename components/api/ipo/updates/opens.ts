<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
<<<<<<< HEAD
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
=======
<<<<<<< HEAD
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}
<<<<<<< HEAD

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}

  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
  res.status(200).json({ opens: u.opens || 0 })
}
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
  if (!u) return res.status(404).json({ error: 'Not found' });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
