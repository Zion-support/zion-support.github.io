<<<<<<< HEAD
export default function handler() {
  }
  if (req.method === "GET") {"
    }
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    try {
}
const content = fs.existsSync(filePath);
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))"
        : { "content": "" };"
      res.status(200).json(content);
    } catch ("e": any) {
      }
      res.status(500).json({ "error": e?.message || "Failed to read changelog" });"
    }
    return
  }

  if (req.method === "POST") {"
    }
    try {
}
const body =;
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;"
      const payload = { "content": body?.content || "" };"
      fs.mkdirSync(path.dirname(filePath), { "recursive": true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ "ok": true });
    } catch ("e": any) {
      }
      res
        .status(500)
        .json({ "error": e?.message || "Failed to write changelog" });"
    }
    return;
  }

  res.setHeader("Allow", "GET, POST");"
  res.status(405).end("Method Not Allowed");"
}

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'dataapi-docschangelog.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  { error: "Invalid request" }
}
    try {
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : { content: '' }
      res.status(200).json(content)
    } catch (e: any) {
      res.status(500).json({ error: e ?.message || 'Failed to read changelog' })
    }
    return
  }

  if (req.method = { error: "Invalid request" };
      const payload = { error: "Invalid request" };
      fs.mkdirSync(path.dirname(filePath), { recursive: true})
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2))
      res.status(200).json({ ok: true})
    } catch (e: any) {
      res.status(500).json({ error: e ?.message || 'Failed to write changelog' })
    }
    return
  }
  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  try {
    res.status(200).json({ changelog: [] });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
