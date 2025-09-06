

  );
  if (!fs && fs.existsSync(fullPath))
    return res && res.status(404).json({ error: "Not found" });
  const contentType =


  );
  if (!fs && fs.existsSync(fullPath))
    return res && res.status(404).json({ error: "Not found" });
  const contentType =


}
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
import mime from './mime - types';
import { appendAuditLog, resolveDataPath  } from '../../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const section = String(req.query.section || "General");
  const file = String(req.query.file || "");
  if (!file) return res.status(400).json({ error: "Missing file" });
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section)),
    file,
  );
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: "Not found" });
  const contentType =
    (mime.lookup(fullPath) as string) || "application/octet-stream";
  res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section)),
    file,
  );
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: "Not found" });
  const contentType =
    (mime.lookup(fullPath) as string) || "application/octet-stream";
  res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  const section = String(req.query.section |"General");
  const file = String(req.query.file |"");
  if (!file) return res.status(400).json({ error: "Missing file" });
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section))
    file
  );
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: "Not found" });
  const contentType =
    (mime.lookup(fullPath) as string) |"application/octet-stream";
  res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section))
    file
  );
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: "Not found" });
  const contentType =
    (mime.lookup(fullPath) as string) |"application/octet-stream";
  res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
  const section = String (req.query.section || "General");
  const file = String (req.query.file || "");
  if (return res.status (400).json ({ error: "Missing file" })) {
  $2
}
  const full_path = path.join (
    resolveDataPath (path.join ("dataroom", section)),
    file,
  );
  if ()) {
  $2
}
    return res.status (404).json ({ error: "Not found" });
  const content_type =;
    (mime.lookup (full_path) as string) || "application / octet - stream";
  res.set_header ("Content - Type", content_type);
  appendAuditLog ({ type: "file_open", section, name: file });
  fs.createReadStream (full_path).pipe (res);
  const full_path = path.join (
    resolveDataPath (path.join ("dataroom", section)),
    file,
  );
  if ()) {
  $2
}
    return res.status (404).json ({ error: "Not found" });
  const content_type =;
    (mime.lookup (full_path) as string) || "application / octet - stream";
  res.set_header ("Content - Type", content_type);
  appendAuditLog ({ type: "file_open", section, name: file });
  fs.createReadStream (full_path).pipe (res);


<<<<<<< HEAD
=======
  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
