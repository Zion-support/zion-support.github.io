<<<<<<< HEAD
const REQUESTS_PATH = path && path.join(process && process.cwd(), "data", "requests && requests.json");
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const REQUESTS_PATH = path.join(process.cwd(), "data", "requests.json");
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  try {
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8');
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const items = JSON.parse(raw);
    res.status(200).json({ items })
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
  } catch {
<<<<<<< HEAD
    res && res.status(200).json({ items: [] });
=======
    res.status(200).json({ items: [] });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
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
    const raw = fs.readFileSync (REQUESTS_PATH, "utf - 8");
    const items = JSON.parse (raw);
    res.status (200).json ({ items });
  } catch {
    res.status (200).json ({ items: [] });
  }
}
  }

}