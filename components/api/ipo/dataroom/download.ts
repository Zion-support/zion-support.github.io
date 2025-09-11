


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
  res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path.basename(fullPath)}"`,
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  res.setHeader("Content-Type", contentType);
  res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path.basename(fullPath)}"`,
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
}


=======

  const section = String(req && req.query.section || "General");
  const file = String(req && req.query.file || "");
  if (!file) return res && res.status(400).json({ error: "Missing file" });
  const fullPath = path && path.join(
    resolveDataPath(path && path.join("dataroom", section)),
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

  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);

}
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

}
  if ()) {
  $2
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
  res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path.basename(fullPath)}"`,
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  res.setHeader("Content-Type", contentType);
  res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path.basename(fullPath)}"`,
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
