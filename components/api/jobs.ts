<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const JOBS_FILE = null;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
const JOBS_FILE = path.join(process.cwd(), 'data', 'jobs', 'jobs.json');
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
 
}
  try {
    const jobs = (await fs.pathExists(JOBS_FILE))
      ? await fs.readJSON(JOBS_FILE)
      : [];
    return res.status(200).json({ jobs });
 
} catch (e) {
    return res.status(500).json({ error: 'Failed to load jobs' });
<<<<<<< HEAD
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  try {
    const jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : [];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(200).json({ jobs })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load jobs" })
}
}
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
