<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
<<<<<<< HEAD

  const section = String(req.query.section |"General");
  const file = String(req.query.file |"");
  if (!file) return res.status(400).json({ error: "Missing file" });
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section))
    file
=======
  const section = String(req && req.query.section || "General");
  const file = String(req && req.query.file || "");
  if (!file) return res && res.status(400).json({ error: "Missing file" });
  const fullPath = path && path.join(
    resolveDataPath(path && path.join("dataroom", section)),
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    file,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
<<<<<<< HEAD
  if (!fs && fs.existsSync(fullPath))
    return res && res.status(404).json({ error: "Not found" });
  const contentType =
<<<<<<< HEAD
    (mime.lookup(fullPath) as string) |"application/octet-stream";
  res.setHeader("Content-Type", contentType);
  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${path.basename(fullPath)}"`
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  res.setHeader("Content-Type", contentType);
  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${path.basename(fullPath)}"`
=======
    (mime && mime.lookup(fullPath) as string) || "application/octet-stream";
  res && res.setHeader("Content-Type", contentType);
  res && res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path && path.basename(fullPath)}"`,
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
  res && res.setHeader("Content-Type", contentType);
  res && res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path && path.basename(fullPath)}"`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
<<<<<<< HEAD
=======
}

=======
  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });
  const fullPath = path.join(resolveDataPath(path.join('dataroom', section)), file);
  if (!fs.existsSync(fullPath)) return res.status(404).json({ error: 'Not found' });
  const contentType = (mime.lookup(fullPath) as string) || 'application/octet-stream';
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(fullPath)}"`);
  appendAuditLog({ type: 'file_download', section, name: file });
  fs.createReadStream(fullPath).pipe(res)
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  if ()) {
  $2
}
    return res.status (404).json ({ error: "Not found" });
  const content_type =;
    (mime.lookup (full_path) as string) || "application / octet - stream";
  res.set_header ("Content - Type", content_type);
  res.set_header (
    "Content - Disposition",
    `attachment, filename="${path.basename (full_path)}"`,
  );
  appendAuditLog ({ type: "file_download", section, name: file });
  fs.createReadStream (full_path).pipe (res);
  res.set_header ("Content - Type", content_type);
  res.set_header (
    "Content - Disposition",
    `attachment, filename="${path.basename (full_path)}"`,
  );
  appendAuditLog ({ type: "file_download", section, name: file });
  fs.createReadStream (full_path).pipe (res);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
