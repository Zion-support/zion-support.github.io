<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs";"
import path from "path";"
import mime from "mime-types";"
import { appendAuditLog, resolveDataPath } from "../../../../utils/api/storage";"
import { requireSuperadminApi } from "../../../../utils/api/auth";"
    resolveDataPath(path.join("dataroom", section)),
    file,
  );
  if (!fs.existsSync(fullPath))"
    return res.status(404).json({ error: "Not found" });
  const contentType ="
    (mime.lookup(fullPath) as string) || "application/octet-stream";"
  res.setHeader("Content-Type", contentType);"
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  const fullPath = path.join("
    resolveDataPath(path.join("dataroom", section)),
    file,
  );
  if (!fs.existsSync(fullPath))"
    return res.status(404).json({ error: "Not found" });
  const contentType ="
    (mime.lookup(fullPath) as string) || "application/octet-stream";"
  res.setHeader("Content-Type", contentType);"
  appendAuditLog({ type: "file_open", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
}
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'
import mime from 'mime-types';'
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';'
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;

<<<<<<< HEAD
  const section = String(req && req.query.section || "General");
  const file = String(req && req.query.file || "");
=======


"
  const section = String(req && req.query.section || "General");"
  const file = String(req && req.query.file || "");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!file) return res && res.status(400).json({ error: "Missing file" });
  const fullPath = path && path.join("
    resolveDataPath(path && path.join("dataroom", section)),
    file,
  );
  if (!fs && fs.existsSync(fullPath))"
    return res && res.status(404).json({ error: "Not found" });
  const contentType =
  );
  if (!fs && fs.existsSync(fullPath))"
    return res && res.status(404).json({ error: "Not found" });
  const contentType =
}'
import type { NextApiRequest, NextApiResponse } from './next';'
import fs from './fs';'
import path from './path';'
import mime from './mime - types';'
import { appendAuditLog, resolveDataPath  } from '../../../../utils / api / storage';'
import { requireSuperadminApi  } from '../../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}"
  const section = String (req.query.section || "General");"
  const file = String (req.query.file || "");"
  if (return res.status (400).json ({ error: "Missing file" })) {}
  $2;
}
  const full_path = path.join ("
    resolveDataPath (path.join ("dataroom", section)),
    file,
  );
  if ()) {}
  $2;
}"
    return res.status (404).json ({ error: "Not found" });
  const content_type =;"
    (mime.lookup (full_path) as string) || "application / octet - stream";"
  res.set_header ("Content - Type", content_type);"
  appendAuditLog ({ type: "file_open", section, name: file });
  fs.createReadStream (full_path).pipe (res);
  const full_path = path.join ("
    resolveDataPath (path.join ("dataroom", section)),
    file,
  );
  if ()) {}
  $2;
}"
    return res.status (404).json ({ error: "Not found" });
  const content_type =;"
    (mime.lookup (full_path) as string) || "application / octet - stream";"
  res.set_header ("Content - Type", content_type);"
  appendAuditLog ({ type: "file_open", section, name: file });
  fs.createReadStream (full_path).pipe (res);
'
  const section = String(req.query.section || 'General');'
  const file = String(req.query.file || '');'
  if (!file) return res.status(400).json({ error: 'Missing file' });
<<<<<<< HEAD
  const section = null;
  fs.createReadStream(fullPath).pipe(res)
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
