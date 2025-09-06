import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json');
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalsindex && dataproposalsindex.json");
async function ensureStore() {
  await fs && fs.ensureFile(FILE_PATH);
  try {


    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch {
    await fs && fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 });
  }
}

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
  res && res.status(405).json({ error: "Method not allowed" });

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156


