<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const JOBS_FILE = path.join(process.cwd(), "data", "jobs", "jobs.json");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const JOBS_FILE = path.join(process.cwd(), 'data', 'jobs', 'jobs.json');

export default async function handler(
  req: NextApiRequest,
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
<<<<<<< HEAD
    return res.status(500).json({ error: 'Failed to load jobs' });
  }
=======
<<<<<<< HEAD
    return res.status(500).json({ error: 'Failed to load jobs' });
  }
=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const JOBS_FILE = path.join(process.cwd(), "data", "jobs", "jobs.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  try {
    const jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : [];
    return res.status(200).json({ jobs })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load jobs" })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: "Failed to load jobs" })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
