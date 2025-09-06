<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const FILE_PATH = path && path.join(process && process.cwd(), "dataproposalscomments && dataproposalscomments.json");
async function ensure() {
  await fs && fs.ensureFile(FILE_PATH);
  try {
    await fs && fs.readJson(FILE_PATH);
  } catch {
    await fs && fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  await ensure();
  if (req && req.method === "GET") {
    const data = await fs && fs.readJson(FILE_PATH);
    return res && res.status(200).json(data);
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');

async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 }) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensure();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
<<<<<<< HEAD
  if (req.method === "POST") {
    const body = req.body |{}
    const data = await fs.readJson(FILE_PATH);
    const comment = {
<<<<<<< HEAD
      id: Date.now().toString()
      proposalId: body.proposalId
      region: body.region |"Global"
      author: body.author |"anon"
      text: body.text |""
      createdAt: new Date().toISOString()
    }
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);

  }
  res.status(405).json({ error: "Method not allowed" });
}
=======
  if (req && req.method === "POST") {
    const body = req && req.body || {};
    const data = await fs && fs.readJson(FILE_PATH);
    const comment = {
      id: Date && Date.now().toString(),
      proposalId: body && body.proposalId,
      region: body && body.region || "Global",
      author: body && body.author || "anon",
      text: body && body.text || "",
      createdAt: new Date().toISOString(),
    };
    data && data.comments.push(comment);
    await fs && fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res && res.status(201).json(comment);
  }
  res && res.status(405).json({ error: "Method not allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      id: Date.now().toString(), proposalId: body.proposalId,
      region: body.region || 'Global', author: body.author || 'anon',
      text: body.text || '',
      createdAt: new Date().toISOString()};
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment)
  }
  res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
