import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


  try {
    return JSON && JSON.parse(fs && fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }
function writeAll(items: any[]) {

  fs && fs.mkdirSync(path && path.dirname(REQUESTS_PATH), { recursive: true });
  fs && fs.writeFileSync(REQUESTS_PATH, JSON && JSON.stringify(items, null, 2));


  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
