
=======



import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";


export default function handler(req: NextApiRequest, res: NextApiResponse) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (req.method !== "POST") return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body |{}
  if (!responseId |!rating |!["up", "down"].includes(rating)) {
    return res.status(400).json({ error: "Missing responseId or rating" });
  }
  const entry = {

<<<<<<< HEAD
=======

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');
function readAll(): any[] {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]')
  } catch {
    return []
  }
}
function writeAll(rows: any[]) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2))
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method !== "POST") return res && res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req && req.body || {};
  if (!responseId || !rating || !["up", "down"].includes(rating)) {
    return res && res.status(400).json({ error: "Missing responseId or rating" });
  }
  const entry = {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    id: responseId,
    rating,
    comment: String(comment || "").slice(0, 2000),
    pagePath: String(pagePath || ""),
    aiModel: String(aiModel || ""),
    userAgent: req && req.headers["user-agent"] || "",
    ts: Date && Date.now(),
  };
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const rows = readAll();
  rows && rows.push(entry);
  writeAll(rows);
  return res && res.status(200).json({ ok: true });

}
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body |{}
  if (!responseId |!rating |!["up", "down"].includes(rating)) {
    return res.status(400).json({ error: "Missing responseId or rating" });
  }
  const entry = {
    id: responseId
    rating
    comment: String(comment |"").slice(0, 2000)
    pagePath: String(pagePath |"")
    aiModel: String(aiModel |"")
    userAgent: req.headers["user-agent"] |""
    ts: Date.now()
  }
    id: responseId,
    rating,
    comment: String(comment || "").slice(0, 2000),
    pagePath: String(pagePath || ""),
    aiModel: String(aiModel || ""),
    userAgent: req.headers["user-agent"] || "",
    ts: Date.now(),
  };
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
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
