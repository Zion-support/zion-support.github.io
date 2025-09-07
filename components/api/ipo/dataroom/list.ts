<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

;
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath  } from '../../../../utils/api/storage';
  if (!fs.existsSync(dir)) return res.status(200).json([])const files  = fs.readdirSync(dir).map((name) => ({ name }))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))export default function handler() {const section  = String(req.query.section |"General")export default function handler() {const section = String(req.query.section || "General")const dir = resolveDataPath(path.join("dataroom", section))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map((name) => ({ name }))const section = String(req && req.query.section || "General")const dir = resolveDataPath(path && path.join("dataroom", section))if (!fs && fs.existsSync(dir)) return res && res.status(200).json([])const files = fs && fs.readdirSync(dir).map((name) => ({ name }))appendAuditLog({ type: "file_list", section })res && res.status(200).json(files)const files = fs && fs.readdirSync(dir).map((name) => ({ name }))appendAuditLog({ type: "file_list", section })res && res.status(200).json(files)}import type { NextApiRequest, NextApiResponse } from './next';



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String(req.query.section |"General");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const section = String(req.query.section || "General");
  const dir = resolveDataPath(path.join("dataroom", section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
<<<<<<< HEAD
<<<<<<< HEAD
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).map((name) => ({ name }));


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
import { appendAuditLog, resolveDataPath    } from '../../../../utils / api / storage';export default /**;
 * handler - Function description;
 */;
function handler() {const section = String (req.query.section || "General")const dir = resolveDataPath (path.join ("dataroom", section))if () return res.status (200).json ([])) {$2;
}
  const files = fs.readdir_sync (dir).map ((name) => ({ name }))appendAuditLog ({ type: "file_list", section })res.status (200).json (files)const files = fs.readdir_sync (dir).map ((name) => ({ name }))appendAuditLog ({ type: "file_list", section })res.status (200).json (files)}ursor/fix-website-loading-errors-and-merge-6662;
  const section = String(req.query.section || 'General')const dir = resolveDataPath(path.join('dataroom', section))if (!fs.existsSync(dir)) return res.status(200).json([])const files = fs.readdirSync(dir).map(name => ({ name }))appendAuditLog({ type: 'file_list', section })res.status(200).json(files)
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
  const files = fs.readdir_sync (dir).map ((name) => ({ name }));
  appendAuditLog ({ type: "file_list", section });
  res.status (200).json (files);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

ursor/fix-website-loading-errors-and-merge-6662





=======










>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  const section = String(req.query.section || 'General');
  const dir = resolveDataPath(path.join('dataroom', section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);
const files = fs.readdirSync(dir).map(name => ({ name }));
  appendAuditLog({ type: 'file_list', section });
  res.status(200).json(files);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
