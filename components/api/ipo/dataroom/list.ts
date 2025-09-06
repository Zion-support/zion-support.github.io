<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD
  const section = String(req.query.section |"General");
  const dir = resolveDataPath(path.join("dataroom", section));
=======
  const section = String(req.query.section || 'General');
  const dir = resolveDataPath(path.join('dataroom', section));
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
=======
  const section = String(req && req.query.section || "General");
  const dir = resolveDataPath(path && path.join("dataroom", section));
  if (!fs && fs.existsSync(dir)) return res && res.status(200).json([]);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
