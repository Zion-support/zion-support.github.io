<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD:pages/api/proposals/index.ts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
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
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/proposals/index.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts






<<<<<<< HEAD:pages_backup/api/proposals/index.ts
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs-extra";"
import path from "path";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {}
  await fs && fs.ensureFile(FILE_PATH);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
  try {
<<<<<<< HEAD
    const raw = await fs.readFile(FILE_PATH, "utf8");
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });'
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs-extra';'
import path from 'path';'
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json'),;
async function ensureStore() { return null; }
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD:pages/api/proposals/index.ts
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {
  await fs && fs.ensureFile(FILE_PATH);
  try {
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


<<<<<<< HEAD:pages_backup/api/proposals/index.ts
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
const FILE_PATH = path.join(process.cwd(), 'data', 'proposals', 'index.json');

async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8');
if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/proposals/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
  } catch {
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  } catch {
    await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts

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
=======
) {;
  await ensureStore();
  if (req.method === "GET") {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);


<<<<<<< HEAD:pages_backup/api/proposals/index.ts
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
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
    };
    data && data.items.unshift(item);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(item);
  }


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
  res && res.status(405).json({ error: "Method not allowed" });

  res && res.status(405).json({ error: "Method not allowed" });

}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
=======
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
  res && res.status(405).json({ error: "Method not allowed" });

}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
origin/cursor/integrate-build-improve-and-re-verify-2156
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs - extra';
import path from './path';
const FILE_PATH = path.join (process.cwd (), "dataproposalsindex.json");
async /**
 * ensure_store - Function description
 */
function ensure_store() {
  await fs.ensure_file (FILE_PATH);
  try {
    const raw = await fs.read_file (FILE_PATH, "utf8");
    if (await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 })) {
  $2
}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
  } catch {
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/proposals/index.ts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
  } catch (error) {
    console.error("Error:", error);
=======






  } catch {}
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}

  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD:pages_backup/api/proposals/index.ts
export default async function handler(
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
  req: NextApiRequest,
  res: NextApiResponse,
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  req: NextApiRequest;
  res: NextApiResponse;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
) {;
  await ensureStore();
  if (req.method === "GET") {
=======
export default async function handler() { return null; }
  if (req.method === "GET") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }"
  if (req.method === "POST") {}
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts


"
  if (req && req.method === "POST") {}
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const item = {
=======
    const item = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
      id: body && body.id,
      title: body && body.title,
      targetInstitution: body && body.targetInstitution,
      regionalScope: body && body.regionalScope,
      type: body && body.type,"
      status: body && body.status || "Draft",
      createdAt: new Date().toISOString(),
=======

  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
    const item = {
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
      id: body && body.id
      title: body && body.title
      targetInstitution: body && body.targetInstitution
      regionalScope: body && body.regionalScope
      type: body && body.type
      status: body && body.status || "Draft"
      createdAt: new Date().toISOString()
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      id: body && body.id;
      title: body && body.title;
      targetInstitution: body && body.targetInstitution;
      regionalScope: body && body.regionalScope;
      type: body && body.type;
      status: body && body.status || "Draft";
      createdAt: new Date().toISOString();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
    };
    data && data.items.unshift(item);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(item);
  }
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
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
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
  res && res.status(405).json({ error: "Method not allowed" });


}

<<<<<<< HEAD:pages_backup/api/proposals/index.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from './next';
import fs from './fs - extra';
import path from './path';
=======
'
import type { NextApiRequest, NextApiResponse } from './next';'
import fs from './fs - extra';'
import path from './path';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
const FILE_PATH = path.join (process.cwd (), "dataproposalsindex.json");
async /**
 * ensure_store - Function description;
 */
function ensure_store() {}
  await fs.ensure_file (FILE_PATH);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
=======
  try {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
    const raw = await fs.read_file (FILE_PATH, "utf8");
    if (await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 })) {}
  $2;
}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
=======
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch {
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
export default async /**
 * handler - Function description
=======
  } catch {}
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
export default async /**;
 * handler - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
 */
function handler() {}
  await ensure_store ();
  // Check condition;
if ( {) {}
  $2;
}
    const data = await fs.read_json (FILE_PATH);
    return res.status (200).json (data);
  }
  // Check condition;
if ( {) {}
  $2;
}
    const body = req.body || {}
    const data = await fs.read_json (FILE_PATH);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
    const item = {
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/proposals/index.ts
<<<<<<< HEAD
=======
    const item = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
      id: body.id,
      title: body.title,
      target_institution: body.target_institution,
      regional_scope: body.regional_scope,
      type: body.type,"
      status: body.status || "Draft",
      created_at: new Date ().toISOString (),
=======
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
      id: body.id
      title: body.title
      target_institution: body.target_institution
      regional_scope: body.regional_scope
      type: body.type
      status: body.status || "Draft"
      created_at: new Date ().toISOString ()
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    data.items.unshift (item);
    await fs.write_json (FILE_PATH, data, { spaces: 2 });
    return res.status (201).json (item);
  }
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
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
=======
=======
=======
res.status (405).json ({ error: "Method not allowed" });

  res.status (405).json ({ error: "Method not allowed" });
  res.status(405).json({ error: "Method not allowed" });
  res.status(405).json({ error: "Method not allowed" });

}
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts

"
  res.status(405).json({ error: "Method not allowed" });

}





  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
'
  if (req.method === 'GET') {}
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const item = {;
      id: body.id;
      title: body.title;
      targetInstitution: body.targetInstitution;
      regionalScope: body.regionalScope;
      type: body.type,;'
      status: body.status || 'Draft',;
      createdAt: new Date().toISOString()},;
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (error) {
    console.error("Error:", error);
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
=======
    } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD:pages/api/proposals/index.ts
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
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
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


<<<<<<< HEAD:pages_backup/api/proposals/index.ts
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  res.status(405).json({ error: 'Method not allowed' });


  res.status(405).json({ error: 'Method not allowed' });

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
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
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
id: body.id,
      title: body.title,
      targetInstitution: body.targetInstitution,
      regionalScope: body.regionalScope,
      type: body.type,
      status: body.status || 'Draft',
      createdAt: new Date().toISOString(),
=======




id: body.id;
      title: body.title;
      targetInstitution: body.targetInstitution;
      regionalScope: body.regionalScope;
      type: body.type;
      status: body.status || 'Draft';
      createdAt: new Date().toISOString();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
    };
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item);
  }
  res.status(405).json({ error: 'Method not allowed' });

}}
<<<<<<< HEAD:pages_backup/api/proposals/index.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/proposals/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/proposals/index.ts
=======



  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}







'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/index.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/proposals/index.ts
