
<<<<<<< HEAD
=======
<<<<<<< HEAD
const section = String(req.query.section || 'General');
  const dir = resolveDataPath(path.join('dataroom', section));
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  const dir = resolveDataPath(path.join("dataroom", section));
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String(req.query.section |"General");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const section = String(req.query.section || "General");
  const dir = resolveDataPath(path.join("dataroom", section));
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======



=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
