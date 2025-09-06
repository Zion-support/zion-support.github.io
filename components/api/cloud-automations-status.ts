<<<<<<< HEAD
const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
<<<<<<< HEAD
  const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {};
  try {
    if (fs && fs.existsSync(dir)) {
      for (const f of fs && fs.readdirSync(dir)) {
        if (f && f.endsWith(".json")) {
          const fp = path && path.join(dir, f);
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs';
import path from './path';
export default /**
 * handler - Function description
 */
function handler() {
  const dir = path.resolve (process.cwd (), "data / cloud - automations");
  const data: Record < string, any> = {}
  try {
    if () {) {
  $2
}
      for (const f of fs.readdir_sync (dir)) {
        if () {) {
  $2
}
          const fp = path.join (dir, f);
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),
          );
<<<<<<< HEAD
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))
=======
<<<<<<< HEAD

=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
      }
    }
  } catch (e) {
// ignore;
  }
<<<<<<< HEAD
  res && res.status(200).json({ ok: true, data });
  res && res.status(200).json({ ok: true, data });
}
  res.status(200).json({ ok: true, data })
}
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });

}
=======
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true, data });
=======
res.status(200).json({ ok: true, data });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  res.status(200).json({ ok: true, data });
}
=======
  res.status(200).json({ ok: true, data });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
