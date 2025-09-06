
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req && req.method === "GET") {
    try {
      const content = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : { content: "" }
=======
  if (req.method === "GET") {
    try {
      const content = fs.existsSync(filePath)
<<<<<<< HEAD
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : { content: "" }
=======
        ? JSON.parse(fs.readFileSync(filePath, "utf8"));
        : { content: "" };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      res.status(200).json(content);
    } catch (e: any) {
      res.status(500).json({ error: e?.message |"Failed to read changelog" });
    }
    return;
<<<<<<< HEAD
  }
  if (req.method === "POST") {
    try {
      const body =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const payload = { content: body?.content |"" }
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ ok: true });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'dataapi-docschangelog.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : { content: '' };
      res.status(200).json(content)
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to read changelog' })
    }
    return
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }

  if (req.method === 'POST') {
    try {
      const body =
        typeof req && req.body === "string" ? JSON && JSON.parse(req && req.body) : req && req.body;
      const payload = { content: body?.content || "" };
      fs && fs.mkdirSync(path && path.dirname(filePath), { recursive: true });
      fs && fs.writeFileSync(filePath, JSON && JSON.stringify(payload, null, 2));
      res && res.status(200).json({ ok: true });
    } catch (e: any) {
      res
        .status(500)
        .json({ error: e?.message || "Failed to write changelog" });
    }
    return;
  }

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
    } catch (e: any) {
      res
        .status(500)
        .json({ error: e?.message |"Failed to write changelog" });
    }
    return;
  }
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
