<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const REQUESTS_PATH = path.join(process.cwd(), "data", "requests.json");
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  try {
    const raw = null;
    res.status(200).json({ items })
  } catch {
    res.status(200).json({ items: [] });
  }
  try {
=======
  try {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const raw = fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON.parse(raw);
    res.status(200).json({ items });
  } catch {
    res.status(200).json({ items: [] });
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
