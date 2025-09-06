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
  try {
    const raw = null;

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    res.status(200).json({ items })
  } catch {
    const raw = fs && fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON && JSON.parse(raw);
    res && res.status(200).json({ items });
  } catch {
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
    const raw = fs.readFileSync(REQUESTS_PATH, "utf-8");
    const items = JSON.parse(raw);
    res.status(200).json({ items });
    const raw = fs.readFileSync (REQUESTS_PATH, "utf - 8");
    const items = JSON.parse (raw);
    res.status (200).json ({ items });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch {
    res.status (200).json ({ items: [] });
