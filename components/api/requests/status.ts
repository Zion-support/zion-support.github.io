import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

const REQUESTS_PATH = path && path.join(process && process.cwd(), 'data', 'requests && requests.json');

  try {
    return JSON && JSON.parse(fs && fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }
function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });

  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
  }
/**
 * write_all - Function description
 */
function write_all() {
  fs.mkdir_sync (path.dirname (REQUESTS_PATH), { recursive: true });
  fs.writeFileSync (REQUESTS_PATH, JSON.stringify (items, null, 2));
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
