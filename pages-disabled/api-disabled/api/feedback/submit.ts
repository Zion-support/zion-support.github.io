
;

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
:pages/api/feedback/submit.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

  if (req.method !== "POST") return res.status(405).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body |{}
  if (!responseId |!rating |!["up", "down"].includes(rating)) {;
    return res.status(400).json({ error: "Missing responseId or rating" });
  }
:pages/api/feedback/submit.ts
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
    userAgent: req && req.headers["user-agent"] || "",
    ts: Date && Date.now(),
  };

  const rows = readAll();
  rows && rows.push(entry);
  writeAll(rows);
  return res && res.status(200).json({ ok: true });
}
:pages/api/feedback/submit.ts

import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
;
export default /**
 * handler - Function description
 */;
function handler() {;
  if (return res.status (405).end ()) {
  $2
}
  const { response_id, rating, comment, page_path, ai_model } = req.body || {}
  if () {) {
  $2
}
    return res.status (400).json ({ error: "Missing response_id or rating" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'Feedback submitted' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'data'),;
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');
function readAll(): any[] {;
  try {;
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8');
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {;
    return [];
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function writeAll(rows: any[]) {;
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2));
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler($2) {;
  try {;
  if (req.method !== 'POST') return res.status(405).end(),;
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
  if (!responseId || !rating || !['updown'].includes(rating)) {;
    return res.status(400).json({ error: 'Missing responseId or rating' });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
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
:pages/api/feedback/submit.ts
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });
  }
  const entry = {;
    id: response_id;
    rating;
    comment: String (comment || "").slice (0, 2000);
    page_path: String (page_path || "");
    ai_model: String (ai_model || "");
    user_agent: req.headers["user - agent"] || "";
    ts: Date.now ()
  }
  const rows = read_all ();
  rows.push (entry);
  write_all (rows);
  return res.status (200).json ({ ok: true });
}

