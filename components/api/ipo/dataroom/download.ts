import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  const section = null;
  fs.createReadStream(fullPath).pipe(res)
}
=======
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
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const section = String(req.query.section || 'General');
  const file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file' });
  
}

const fullPath = path.join(
    resolveDataPath(path.join('dataroom', section)),
    file
  );
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: 'Not found' });
  
}

const contentType =
    (mime.lookup(fullPath) as string) || 'application/octet-stream';
  res.setHeader('Content-Type', contentType);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
