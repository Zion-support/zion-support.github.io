import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
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
