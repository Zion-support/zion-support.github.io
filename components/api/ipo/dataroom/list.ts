<<<<<<< HEAD
const section = String(req.query.section || 'General');
  const dir = resolveDataPath(path.join('dataroom', section));
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String(req.query.section |"General");
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const section = String(req.query.section || "General");
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const dir = resolveDataPath(path.join("dataroom", section));
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
  const section = String(req && req.query.section || "General");
  const dir = resolveDataPath(path && path.join("dataroom", section));
  if (!fs && fs.existsSync(dir)) return res && res.status(200).json([]);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
  const files = fs && fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: "file_list", section });
  res && res.status(200).json(files);
}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
