
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const content = fs.existsSync(filePath)
<<<<<<< HEAD
<<<<<<< HEAD
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : { content: "" }
=======
        ? JSON.parse(fs.readFileSync(filePath, "utf8"));
        : { content: "" };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : { content: "" }
        ? JSON.parse(fs.readFileSync(filePath, "utf8"));
        : { content: "" };
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      res.status(200).json(content);
    } catch (e: any) {
      res.status(500).json({ error: e?.message |"Failed to read changelog" });
    }
    return;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }

  if (req.method === 'POST') {
    try {

      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const payload = { content: body?.content || '' };
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ ok: true })

    } catch (e: any) {
      res
        .status(500)
        .json({ error: e?.message |"Failed to write changelog" });
    }
    return;
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
=======


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
