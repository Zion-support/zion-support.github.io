import fs from "fs"
import path from "path"
  kind: any
const DATA_DIR = path.join(process.cwd(), "data", "runtime"
const DB_PATH = path.join(DATA_DIR, "feedback.json"
  if (!fs.existsSync(DB_PATH) fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), "utf-8"
  const raw = fs.readFileSync(DB_PATH, "utf-8"
  const data = JSON.parse(raw || "{}"
  fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), "utf-8"