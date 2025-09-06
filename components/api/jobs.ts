import type { NextApiRequest, NextApiResponse } from "next",
import fs from "fs-extra"
import path from "path"
const JOBS_FILE = path.join(process.cwd(), "data", "jobs", "jobs.json"),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET"),
    return res.status(405).json({ error: "Method Not Allowed" })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
  try {
    const jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : []
    return res.status(200).json({ jobs })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load jobs" })
import type {_NextApiRequest, _NextApiResponse} from "next";
import fs from "fs-extra";
import path from "path";

const _JOBS_FILE = path.join(process.cwd(), "data", "jobs", "jobs.json");

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "GET") {
    res.setHeader("Allow", _"GET");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  try {_const _jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : [];
    return res.status(200).json({ jobs});
  } catch (e) {_return res.status(500).json({ error: "Failed to load jobs"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}