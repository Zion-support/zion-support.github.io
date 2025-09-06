import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
}

;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
