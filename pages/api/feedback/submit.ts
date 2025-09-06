<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (req.method !== "POST") return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body |{}
  if (!responseId |!rating |!["up", "down"].includes(rating)) {
    return res.status(400).json({ error: "Missing responseId or rating" });
  }
  const entry = {
<<<<<<< HEAD
    id: responseId
    rating
    comment: String(comment |"").slice(0, 2000)
    pagePath: String(pagePath |"")
    aiModel: String(aiModel |"")
    userAgent: req.headers["user-agent"] |""
    ts: Date.now()
  }
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


  if (req && req.method !== "POST") return res && res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req && req.body || {};
  if (!responseId || !rating || !["up", "down"].includes(rating)) {
    return res && res.status(400).json({ error: "Missing responseId or rating" });
  }
  const entry = {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    id: responseId,
    rating,
    comment: String(comment || "").slice(0, 2000),
    pagePath: String(pagePath || ""),
    aiModel: String(aiModel || ""),
    userAgent: req && req.headers["user-agent"] || "",
    ts: Date && Date.now(),
  };
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const rows = readAll();
  rows && rows.push(entry);
  writeAll(rows);
  return res && res.status(200).json({ ok: true });
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  if (req.method !== 'POST') return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
  if (!responseId || !rating || !['updown'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' })
  }
  const entry = {
    id: responseId, rating,
    comment: String(comment || '').slice(0, 2000),
    pagePath: String(pagePath || ''), aiModel: String(aiModel || ''),
    userAgent: req.headers['user-agent'] || '',
    ts: Date.now()};
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true })

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).end ()) {
  $2
}
  const { response_id, rating, comment, page_path, ai_model } = req.body || {}
  if () {) {
  $2
}
    return res.status (400).json ({ error: "Missing response_id or rating" });
<<<<<<< HEAD
=======
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Feedback submitted' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'data'),;
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');
function readAll(): any[] {;
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {;
    return [];
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
;
function writeAll(rows: any[]) {;
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2));
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
;
export default function handler(req, res) {
  try {
  if (req.method !== 'POST') return res.status(405).end(),;
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
  if (!responseId || !rating || !['updown'].includes(rating)) {;
    return res.status(400).json({ error: 'Missing responseId or rating' });
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
  const entry = {;
    id: responseId;
    rating;
    comment: String(comment || '').slice(0, 2000);
    pagePath: String(pagePath || '');
    aiModel: String(aiModel || '');
    userAgent: req.headers['user-agent'] || '',;
    ts: Date.now()},;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  const entry = {
    id: response_id,
    rating,
    comment: String (comment || "").slice (0, 2000),
    page_path: String (page_path || ""),
    ai_model: String (ai_model || ""),
    user_agent: req.headers["user - agent"] || "",
    ts: Date.now (),
  }
  const rows = read_all ();
  rows.push (entry);
  write_all (rows);
  return res.status (200).json ({ ok: true });
}
<<<<<<< HEAD
=======




<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
