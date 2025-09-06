<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const section = String(req.query.section |"General");
  const file = String(req.query.file |"");
  if (!file) return res.status(400).json({ error: "Missing file" });
  const fullPath = path.join(
<<<<<<< HEAD
    resolveDataPath(path.join("dataroom", section))
    file
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD


=======


>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const section = String(req && req.query.section || "General");
  const file = String(req && req.query.file || "");
  if (!file) return res && res.status(400).json({ error: "Missing file" });
  const fullPath = path && path.join(
    resolveDataPath(path && path.join("dataroom", section)),
    file,
  );
  if (!fs && fs.existsSync(fullPath))
    return res && res.status(404).json({ error: "Not found" });
  const contentType =
    (mime.lookup(fullPath) as string) |"application/octet-stream";
  res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section))
    file
    (mime && mime.lookup(fullPath) as string) || "application/octet-stream";
  res && res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
  const fullPath = path && path.join(
    resolveDataPath(path && path.join("dataroom", section)),
    file,
  );
  if (!fs && fs.existsSync(fullPath))
    return res && res.status(404).json({ error: "Not found" });
  const contentType =
    (mime && mime.lookup(fullPath) as string) || "application/octet-stream";
  res && res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
    (mime.lookup(fullPath) as string) |"application/octet-stream";
  res.setHeader("Content-Type", contentType);
  appendAuditLog({ type: "file_open", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
}

  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });
  const fullPath = path.join(resolveDataPath(path.join('dataroom', section)), file);
  if (!fs.existsSync(fullPath)) return res.status(404).json({ error: 'Not found' });
  const contentType = (mime.lookup(fullPath) as string) || 'application/octet-stream';
  res.setHeader('Content-Type', contentType);
  appendAuditLog({ type: 'file_open', section, name: file });
  fs.createReadStream(fullPath).pipe(res)
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
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
