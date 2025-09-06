<<<<<<< HEAD:pages_backup/api/docs/changelog.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/changelog.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const content = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf8"));
        : { content: "" };
      res.status(200).json(content);
    } catch (e: any) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const filePath = null;
  res.status(405).end('Method Not Allowed')
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    }
    return;
  }

  if (req.method === 'POST') {
    try {
<<<<<<< HEAD

<<<<<<< HEAD
=======
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
=======
const body =
        typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      const payload = { content: body?.content || '' };
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ ok: true })
<<<<<<< HEAD:pages_backup/api/docs/changelog.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/changelog.ts
    } catch (e: any) {
      res
        .status(500)
        .json({ error: e?.message |"Failed to write changelog" });
    }
    return;
  }

<<<<<<< HEAD:pages_backup/api/docs/changelog.ts
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/changelog.ts
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {


<<<<<<< HEAD:pages_backup/api/docs/changelog.ts
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/changelog.ts

res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
}

<<<<<<< HEAD:pages_backup/api/docs/changelog.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/changelog.ts
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    try {
      const content = fs.exists_sync (file_path);
        ? JSON.parse (fs.readFileSync (file_path, "utf8"));
        : { content: "" }
      res.status (200).json (content);
    } catch (e: any) {
      res.status (500).json ({ error: e?.message || "Failed to read changelog" });
    }
    return;
  }
  // Check condition
if ( {) {
  $2
}
    try {
      const body =;
        typeof req.body === "string" ? JSON.parse (req.body) : req.body;
      const payload = { content: body?.content || "" }
      fs.mkdir_sync (path.dirname (file_path), { recursive: true });
      fs.writeFileSync (file_path, JSON.stringify (payload, null, 2));
      res.status (200).json ({ ok: true });
    } catch (e: any) {
      res;
        .status (500);
        .json ({ error: e?.message || "Failed to write changelog" });
    }
    return;
  }
  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD:pages_backup/api/docs/changelog.ts
<<<<<<< HEAD
=======
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/docs/changelog.ts
