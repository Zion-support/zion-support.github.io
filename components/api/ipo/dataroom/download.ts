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