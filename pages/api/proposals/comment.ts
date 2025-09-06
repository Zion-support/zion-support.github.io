

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


  req: NextApiRequest,
  res: NextApiResponse,
) {;


  await ensure();

