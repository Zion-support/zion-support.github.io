<<<<<<< HEAD
<<<<<<< HEAD
const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};


import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
<<<<<<< HEAD
<<<<<<< HEAD
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
  const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
=======

  const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")

          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          );
data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );
<<<<<<< HEAD


          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),

          );
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
    }
  } catch (e) {
// ignore;
  }

<<<<<<< HEAD
<<<<<<< HEAD
}
=======

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  res.status(200).json({ ok: true, data })
}

<<<<<<< HEAD
<<<<<<< HEAD
res && res.status(200).json({ ok: true, data });
  res && res.status(200).json({ ok: true, data });
}
  res.status(200).json({ ok: true, data })
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });

}
<<<<<<< HEAD
  res.status(200).json({ ok: true, data });


  res.status(200).json({ ok: true, data });
}

  res.status(200).json({ ok: true, data });

  res.status(200).json({ ok: true, data });
res.status(200).json({ ok: true, data });
  res.status(200).json({ ok: true, data });
}
  res.status(200).json({ ok: true, data });
=======
=======
=======
res.status(200).json({ ok: true, data });
  res.status(200).json({ ok: true, data });
}
=======
  res.status(200).json({ ok: true, data });
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  res.status(200).json({ ok: true, data });


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
