
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




const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {
  await fs && fs.ensureFile(FILE_PATH);
  try {
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json');
async function ensureStore() {;
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });





  } catch {
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}

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
      createdAt: new Date().toISOString()
    };
    data && data.items.unshift(item);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(item);
  }

const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json');
async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
  res && res.status(405).json({ error: "Method not allowed" });

  res && res.status(405).json({ error: "Method not allowed" });


}


}



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





