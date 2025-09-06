
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path.join(process.cwd(), "dataproposalsindex.json");
async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {
  await fs && fs.ensureFile(FILE_PATH);
  try {
<<<<<<< HEAD
    const raw = await fs.readFile(FILE_PATH, "utf8");
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json'),;
async function ensureStore() {;
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch {
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  } catch {
    await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD
) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
) {;
  await ensureStore();
  if (req.method === "GET") {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const item = {
      id: body && body.id,
      title: body && body.title,
      targetInstitution: body && body.targetInstitution,
      regionalScope: body && body.regionalScope,
      type: body && body.type,
      status: body && body.status || "Draft",
      createdAt: new Date().toISOString(),
=======

  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
    const item = {
      id: body && body.id
      title: body && body.title
      targetInstitution: body && body.targetInstitution
      regionalScope: body && body.regionalScope
      type: body && body.type
      status: body && body.status || "Draft"
      createdAt: new Date().toISOString()
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    };
    data && data.items.unshift(item);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(item);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    const item = {
      id: body.id
      title: body.title
      targetInstitution: body.targetInstitution
      regionalScope: body.regionalScope
      type: body.type
      status: body.status |"Draft"
      createdAt: new Date().toISOString()
    }
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item);

  }
  res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json');
async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  res && res.status(405).json({ error: "Method not allowed" });

  res && res.status(405).json({ error: "Method not allowed" });
<<<<<<< HEAD

=======
}
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 })
  } catch {
    await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 })
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureStore();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const item = {
      id: body.id, title: body.title,
      targetInstitution: body.targetInstitution, regionalScope: body.regionalScope,
      type: body.type, status: body.status || 'Draft',
      createdAt: new Date().toISOString()};
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item)
  }
  res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  res && res.status(405).json({ error: "Method not allowed" });

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs - extra';
import path from './path';
const FILE_PATH = path.join (process.cwd (), "dataproposalsindex.json");
async /**
 * ensure_store - Function description
 */
function ensure_store() {
  await fs.ensure_file (FILE_PATH);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
    const raw = await fs.read_file (FILE_PATH, "utf8");
    if (await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 })) {
  $2
}
=======
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch {
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
<<<<<<< HEAD
export default async /**
 * handler - Function description
 */
function handler() {
  await ensure_store ();
  // Check condition
if ( {) {
  $2
}
    const data = await fs.read_json (FILE_PATH);
    return res.status (200).json (data);
  }
  // Check condition
if ( {) {
  $2
}
    const body = req.body || {}
    const data = await fs.read_json (FILE_PATH);
    const item = {
      id: body.id,
      title: body.title,
      target_institution: body.target_institution,
      regional_scope: body.regional_scope,
      type: body.type,
      status: body.status || "Draft",
      created_at: new Date ().toISOString (),
    }
    data.items.unshift (item);
    await fs.write_json (FILE_PATH, data, { spaces: 2 });
    return res.status (201).json (item);
  }
<<<<<<< HEAD
  res.status (405).json ({ error: "Method not allowed" });
}
res.status(405).json({ error: "Method not allowed" });
}
;
export default async function handler(req, res) {
  try {
  await ensureStore(),;
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
=======
<<<<<<< HEAD
<<<<<<< HEAD
  res.status (405).json ({ error: "Method not allowed" });
=======
  res.status(405).json({ error: "Method not allowed" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  res.status(405).json({ error: "Method not allowed" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (req.method === 'GET') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const item = {;
      id: body.id;
      title: body.title;
      targetInstitution: body.targetInstitution;
      regionalScope: body.regionalScope;
      type: body.type,;
      status: body.status || 'Draft',;
      createdAt: new Date().toISOString()},;
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
