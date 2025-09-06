<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const REQUESTS_PATH = path.join(process.cwd(), "data", "requests.json");
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const raw = null;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    res.status(200).json({ items })
=======
  } catch {
    res && res.status(200).json({ items: [] });
  }
  try {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
  } catch {
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
const REQUESTS_PATH = path.join (process.cwd (), "data", "requests.json");
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const raw = fs.readFileSync (REQUESTS_PATH, "utf - 8");
    const items = JSON.parse (raw);
    res.status (200).json ({ items });
  } catch {
    res.status (200).json ({ items: [] });
  }
  try {
<<<<<<< HEAD
  try {;
    const raw = fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON.parse(raw);
    res.status(200).json({ items });
=======
    const raw = fs.readFileSync (REQUESTS_PATH, "utf - 8");
    const items = JSON.parse (raw);
    res.status (200).json ({ items });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  } catch {
    res.status (200).json ({ items: [] });
  }
}
}
