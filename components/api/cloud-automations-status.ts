<<<<<<< HEAD
=======
const dir = path.resolve(process.cwd(), 'data/cloud-automations');
  const data: Record<string, any> = {};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


<<<<<<< HEAD
  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
<<<<<<< HEAD

<<<<<<< HEAD
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")
=======
  const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
=======
const dir = path && path.resolve(process && process.cwd(), "data/cloud-automations");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),

=======
          data[f.replace(".json", "")] = JSON.parse(
            fs.readFileSync(fp, "utf8")

          );
          data[f.replace (".json", "")] = JSON.parse (
            fs.readFileSync (fp, "utf8"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          );
data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
          );
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(fp, 'utf8'))

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      }
    }
  } catch (e) {
// ignore;
  }
<<<<<<< HEAD

<<<<<<< HEAD
  res.status(200).json({ ok: true, data });
}

  res.status(200).json({ ok: true, data });

=======

}
=======

  res.status(200).json({ ok: true, data })
}

=======
=======
res && res.status(200).json({ ok: true, data });
  res && res.status(200).json({ ok: true, data });
}
  res.status(200).json({ ok: true, data })
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  res.status(200).json({ ok: true, data });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  res.status(200).json({ ok: true, data });
}

  res.status(200).json({ ok: true, data });

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
