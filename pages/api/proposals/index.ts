


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {
  await fs && fs.ensureFile(FILE_PATH);
  try {


    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch {
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  await ensureStore();
  if (req.method === "GET") {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
    const item = {
      id: body && body.id,
      title: body && body.title,
      targetInstitution: body && body.targetInstitution,
      regionalScope: body && body.regionalScope,
      type: body && body.type,
      status: body && body.status || "Draft",
      createdAt: new Date().toISOString(),
    };
    data && data.items.unshift(item);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(item);
  }
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json');
async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
<<<<<<< HEAD
  res && res.status(405).json({ error: "Method not allowed" });

  res && res.status(405).json({ error: "Method not allowed" });
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const raw = await fs.read_file (FILE_PATH, "utf8");
    if (await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 })) {
  $2
}
  } catch {
    await fs.write_json (FILE_PATH, { items: [] }, { spaces: 2 });
  }
}
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
  res.status (405).json ({ error: "Method not allowed" });
<<<<<<< HEAD
<<<<<<< HEAD
}

res.status (405).json ({ error: "Method not allowed" });

}
}

  res.status(405).json({ error: 'Method not allowed' })
}
res.status(405).json({ error: "Method not allowed" });

  res.status(405).json({ error: "Method not allowed" });

}
;
export default async function handler(req, res) {
  try {
  await ensureStore(),;
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
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
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  res.status(405).json({ error: 'Method not allowed' });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
