<<<<<<< HEAD
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
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8');
    const items = JSON.parse(raw);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    res.status(200).json({ items })
=======
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch {
    res && res.status(200).json({ items: [] });
  }
<<<<<<< HEAD
  try {
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
  } catch {
    res && res.status(200).json({ items: [] });
  }
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
