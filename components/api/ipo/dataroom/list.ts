


<<<<<<< HEAD




  if (!fs.existsSync(dir)) return res.status(200).json([]);

const files = fs.readdirSync(dir).map((name) => ({ name }));
  if (!fs.existsSync(dir)) return res.status(200).json([]);


export default function handler(req: NextApiRequest, res: NextApiResponse) {"
  const section = String(req.query.section |\"General\");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
"
const section = String(req.query.section || \"General\");
"
const dir = resolveDataPath(path.join(\"dataroom\", section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);}
}


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const section = String(req && req.query.section || "General");
  const dir = resolveDataPath(path && path.join("dataroom", section));
  if (!fs && fs.existsSync(dir)) return res && res.status(200).json([]);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: "file_list", section });
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  res && res.status(200).json(files);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
}

<<<<<<< HEAD







=======
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
import { appendAuditLog, resolveDataPath  } from '../../../../utils / api / storage';
;
export default /**
 * handler - Function description
 */
function handler() {
  const section = String (req.query.section || "General");
  const dir = resolveDataPath (path.join ("dataroom", section));
  if () return res.status (200).json ([])) {
  $2
}
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
}

import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
import { appendAuditLog, resolveDataPath  } from '../../../../utils / api / storage';
;
export default /**
 * handler - Function description
 */
function handler() {
  const section = String (req.query.section || "General");
  const dir = resolveDataPath (path.join ("dataroom", section));
  if () return res.status (200).json ([])) {
  $2
}
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);

}



}
>>>>>>> origin/cursor/delete-old-data-records-6bba
