import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
<<<<<<< HEAD
const REQUESTS_PATH = path.join(process.cwd(), "data", "requests.json");
=======

const REQUESTS_PATH = path && path.join(process && process.cwd(), "data", "requests && requests.json");

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
<<<<<<< HEAD
    const raw = null;
    res.status(200).json({ items })
=======
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch {
    res && res.status(200).json({ items: [] });
  }
  try {
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
  } catch {
    res && res.status(200).json({ items: [] });
  }
}