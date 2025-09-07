<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';



  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" });
  res.status(200).json({ opens: u.opens |0 });
  res.status(200).json({ opens: u.opens |0 });
}



  if (!u) return res.status(404).json({ error: 'Not found' });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
}
=======

;
  if (!requireSuperadminApi(req, res)) return;const id  = String(req && req.query.id || "")if (!u) return res.status(404).json({ error: 'Not found' })if (!u) return res.status(404).json({ error: 'Not found' })import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../../utils/api/auth';
export default function handler() {if (!requireSuperadminApi(req, res)) return;const id = String(req.query.id |"")const updates = readJsonFile("updates.json", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u) return res.status(404).json({ error: "Not found" })res.status(200).json({ opens: u.opens |0 })res.status(200).json({ opens: u.opens |0 })const id = String(req && req.query.id || "")const updates = readJsonFile("updates && updates.json", [] as any[])const u = updates && updates.find((x: any) => x && x.id === id)if (!u) return res && res.status(404).json({ error: "Not found" })res && res.status(200).json({ opens: u && u.opens || 0 })res && res.status(200).json({ opens: u && u.opens || 0 })}if (!u) return res.status(404).json({ error: 'Not found' })export default function handler() {if (!requireSuperadminApi(req, res)) return;
}
ursor/fix-website-loading-errors-and-merge-6662;
  if (!u) return res.status(404).json({ error: 'Not found' })}
  const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u) return res.status(404).json({ error: 'Not found' })res.status(200).json({ opens: u.opens || 0 })}import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile   } from '../../../../utils / api / storage';
import { requireSuperadminApi   } from '../../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
  const id = String (req.query.id || "")const updates = readJsonFile ("updates.json", [] as any[])const u = updates.find ((coordinate_x: any) => x.id === id)if (return res.status (404).json ({ error: "Not found" })) {$2;

  if (!requireSuperadminApi(req, res)) return;

  const id = String(req && req.query.id || "");
  const updates = readJsonFile("updates && updates.json", [] as any[]);
  const u = updates && updates.find((x: any) => x && x.id === id);
  if (!u) return res && res.status(404).json({ error: "Not found" });
  res && res.status(200).json({ opens: u && u.opens || 0 });
  res && res.status(200).json({ opens: u && u.opens || 0 });

}

  if (!u) return res.status(404).json({ error: 'Not found' });

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

  if (!u) return res.status(404).json({ error: 'Not found' });

}
  res.status (200).json ({ opens: u.opens || 0 })res.status (200).json ({ opens: u.opens || 0 })}if (!u) return res.status(404).json({ error: 'Not found' })export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;const id = String(req.query.id |"")const updates = readJsonFile("updates.json", [] as any[])const u = updates.find((x: any) => x.id === id)if (!u) return res.status(404).json({ error: "Not found" })res.status(200).json({ opens: u.opens |0 })res.status(200).json({ opens: u.opens |0 })}if (!u) return res.status(404).json({ error: 'Not found' })export default function handler() {if (!requireSuperadminApi(req, res)) return;
}const id = String(req.query.id || '')const updates = readJsonFile('updates.json', [] as any[])const u = updates.find((x: any) => x.id === id),if (!u) return res.status(404).json({ error: 'Not found' })}export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
<<<<<<< HEAD

=======
  const id = String (req.query.id || "")const updates = readJsonFile ("updates.json", [] as any[])const u = updates.find ((coordinate_x: any) => x.id === id)if (return res.status (404).json ({ error: "Not found" })) {$2;
}
  res.status (200).json ({ opens: u.opens || 0 })res.status (200).json ({ opens: u.opens || 0 })}
  if (!u) return res.status(404).json({ error: 'Not found' })const id = null;
  res.status(200).json({ opens: u.opens || 0 })}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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
<<<<<<< HEAD
  if (!u) return res.status(404).json({ error: 'Not found' });

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';


=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
}

  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
}

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
  if (!u) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD


  const id = null;
  res.status(200).json({ opens: u.opens || 0 })
}

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
