:pages_backup/api/proposals/index.ts


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
:pages_backup/api/proposals/index.ts


import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";

:pages_backup/api/proposals/index.ts
import type { NextApiRequest, NextApiResponse } from "next";"
import fs from "fs-extra";"
import path from "path";"
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {}
  await fs && fs.ensureFile(FILE_PATH);
try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });'
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs-extra';'
import path from 'path';'
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json'),;
async function ensureStore() { return null; }
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
:pages_backup/api/proposals/index.ts


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

:pages_backup/api/proposals/index.ts
const FILE_PATH = path.join(process.cwd(), 'data', 'proposals', 'index.json');

async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8');
if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
:pages_backup/api/proposals/index.ts
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch {
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
:pages_backup/api/proposals/index.ts
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse

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
:pages_backup/api/proposals/index.ts
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
:pages_backup/api/proposals/index.ts
  } catch {
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
:pages_backup/api/proposals/index.ts
) {
  } catch (error) {
    console.error("Error:", error);

  } catch {}
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}

  } catch (error) {"
    console.error("Error:", error);"
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

:pages_backup/api/proposals/index.ts
export default async function handler(
req: NextApiRequest,
  res: NextApiResponse,
) {;
  await ensureStore();
  if (req.method === "GET") {
export default async function handler() { return null; }
  if (req.method === "GET") {}
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }"
  if (req.method === "POST") {}
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
:pages_backup/api/proposals/index.ts

"
  if (req && req.method === "POST") {}
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
:pages_backup/api/proposals/index.ts
    const item = {
      id: body && body.id,
      title: body && body.title,
      targetInstitution: body && body.targetInstitution,
      regionalScope: body && body.regionalScope,
      type: body && body.type,"
      status: body && body.status || "Draft",
      createdAt: new Date().toISOString(),

  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
    const item = {
:pages_backup/api/proposals/index.ts
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
:pages_backup/api/proposals/index.ts
  res && res.status(405).json({ error: "Method not allowed" });

}

:pages_backup/api/proposals/index.ts
}
const FILE_PATH = path.join (process.cwd (), "dataproposalsindex.json");
async /**
 * ensure_store - Function description;
 */
function ensure_store() {}
  await fs.ensure_file (FILE_PATH);
:pages_backup/api/proposals/index.ts
  try {
    const raw = await fs.read_file (FILE_PATH, "utf8");
    if (await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 })) {}
  $2;
}
:pages_backup/api/proposals/index.ts
  } catch {
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
export default async /**
 * handler - Function description
  } catch {}
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
export default async /**;
 * handler - Function description;
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
:pages_backup/api/proposals/index.ts
    const item = {
      id: body.id,
      title: body.title,
      target_institution: body.target_institution,
      regional_scope: body.regional_scope,
      type: body.type,"
      status: body.status || "Draft",
      created_at: new Date ().toISOString (),
    }
    data.items.unshift (item);
    await fs.write_json (FILE_PATH, data, { spaces: 2 });
    return res.status (201).json (item);
  }
:pages_backup/api/proposals/index.ts
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
}
res.status (405).json ({ error: "Method not allowed" });

  res.status (405).json ({ error: "Method not allowed" });
  res.status(405).json({ error: "Method not allowed" });
  res.status(405).json({ error: "Method not allowed" });

}
origin/cursor/automate-test-improve-and-merge-code-20a4



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
:pages_backup/api/proposals/index.ts
    } catch (error) {
    console.error("Error:", error);
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
:pages_backup/api/proposals/index.ts
  res.status(405).json({ error: 'Method not allowed' });


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

:pages_backup/api/proposals/index.ts
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
:pages_backup/api/proposals/index.ts





id: body.id,
      title: body.title,
      targetInstitution: body.targetInstitution,
      regionalScope: body.regionalScope,
      type: body.type,
      status: body.status || 'Draft',
      createdAt: new Date().toISOString(),

id: body.id;
      title: body.title;
      targetInstitution: body.targetInstitution;
      regionalScope: body.regionalScope;
      type: body.type;
      status: body.status || 'Draft';
      createdAt: new Date().toISOString();
    };
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(item);
  }
  res.status(405).json({ error: 'Method not allowed' });

}}
:pages_backup/api/proposals/index.ts
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
