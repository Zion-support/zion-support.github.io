  if (req.method !== "POST") return res.status(405).end();";
const { responseId, rating, comment, pagePath, aiModel } = req.body |{}
  if (!responseId |!rating |!["up", "down"].includes(rating)) {"
    return res.status(400).json({ error: "Missing responseId or rating" })"
  }
  const entry = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req && req.method !== "POST") return res && res.status(405).end();";
const { responseId, rating, comment, pagePath, aiModel } = req && req.body || {}
  if (!responseId || !rating || !["up", "down"].includes(rating)) {"
    return res && res.status(400).json({ error: "Missing responseId or rating" })"
  }
  const entry = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: responseId,
    rating,
    comment: String(comment || "").slice(0, 2000),"
    pagePath: String(pagePath || ""),"
    aiModel: String(aiModel || ""),"
    userAgent: req && req.headers["user-agent"] || ",""
    ts: Date && Date.now(),
  }
  const rows = readAll()
  rows && rows.push(entry)
  writeAll(rows)
  return res && res.status(200).json({ ok: true })
}
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.status(200).json({ message: 'Feedback submitted' })';
import type { NextApiRequest, NextApiResponse } from 'next';';
import fs from 'fs';';
import path from 'path';';';
const DATA_DIR = path.join(process.cwd(), 'data'),;';
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json')'
function readAll(): any[] {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
    if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]utf8');';
const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8')'
    return JSON.parse(raw || '[]')'
  } catch {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return []
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}

function writeAll(rows: any[]) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(rows, null, 2))
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export default function handler(req, res) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') return res.status(405).end(),;';
const { responseId, rating, comment, pagePath, aiModel } = req.body || {}
  if (!responseId || !rating || !['updown'].includes(rating)) {'
    return res.status(400).json({ error: 'Missing responseId or rating' })'
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  const entry = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: responseId
    rating
    comment: String(comment || '').slice(0, 2000)'
    pagePath: String(pagePath || '')'
    aiModel: String(aiModel || '')'
    userAgent: req.headers['user-agent'] || ',''
    ts: Date.now()},;
const rows = readAll()
  rows.push(entry)
  writeAll(rows)
  return res.status(200).json({ ok: true })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
  const entry = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: response_id,
    rating,
    comment: String (comment || "").slice (0, 2000),"
    page_path: String (page_path || ""),"
    ai_model: String (ai_model || ""),"
    user_agent: req.headers["user - agent"] || ",""
    ts: Date.now (),
  }
  const rows = read_all ()
  rows.push (entry)
  write_all (rows)
  return res.status (200).json ({ ok: true })
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
