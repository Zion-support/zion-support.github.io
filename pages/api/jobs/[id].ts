import type { NextApiRequest, NextApiResponse } from "next";"
import { readJsonFile, writeJsonFile } from "../../../utils/db";"
import type { Job } from "../../../utils/types";"
import { rateLimit } from "../../../utils/rateLimit";"
import { getRequestUserEmail, isAdminEmail } from "../../../utils/auth";"

const FILE = "jobs.json";"

export default function handler() {
  }
  if (!rateLimit(req, res)) return;
  const { id } = req && req.query;
  const jobs = readJsonFile<Job[]>(FILE, []);

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.setHeader('Allow', ['GET', 'PATCH']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ job: { id: req.query.id } });
}
