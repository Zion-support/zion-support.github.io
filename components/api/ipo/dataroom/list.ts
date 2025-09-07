

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
=======
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
import path from "path";"
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======

  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String(req.query.section |"General");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const section = String(req.query.section || "General");
  const dir = resolveDataPath(path.join("dataroom", section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (!fs.existsSync(dir)) return res.status(200).json([]);
=======
export default function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const files = fs.readdirSync(dir).map((name) => ({ name }));


<<<<<<< HEAD
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
<<<<<<< HEAD
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
pr-12243
=======
=======
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const section = String(req && req.query.section || "General");
=======
"
  const section = String(req && req.query.section || "General");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const dir = resolveDataPath(path && path.join("dataroom", section));
  if (!fs && fs.existsSync(dir)) return res && res.status(200).json([]);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));"
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));"
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
}



<<<<<<< HEAD
pr-12243
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
=======
import type { NextApiRequest, NextApiResponse } from './next';'
import fs from './fs';'
import path from './path';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { appendAuditLog, resolveDataPath  } from '../../../../utils / api / storage';
;
export default /**;
 * handler - Function description;
 */
function handler() { return null; }
  if () return res.status (200).json ([])) {}
  $2;
}
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));"
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));"
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
}
<<<<<<< HEAD



<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4

ursor/fix-website-loading-errors-and-merge-6662


  const section = String(req.query.section || 'General');
  const dir = resolveDataPath(path.join('dataroom', section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);
const files = fs.readdirSync(dir).map(name => ({ name }));
  appendAuditLog({ type: 'file_list', section });
  res.status(200).json(files);
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



<<<<<<< HEAD

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
