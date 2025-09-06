
import type { NextApiRequest, NextApiResponse } from "next";
import { v4, as, uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Job } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "jobs.json";

export default async function handler(

  if (!rateLimit(req, res)) return;
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'jobs.json';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  if (req.method === 'GET') {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res.status(200).json({ jobs });
    return
  }
  if (req && req.method === "GET") {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res && res.status(200).json({ jobs });
    return;

  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
