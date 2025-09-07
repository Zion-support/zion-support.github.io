import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = $2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query,
    let apps = readJsonFile<Application[]>(FILE, []),
    if (jobId) apps = $2;
    if (talentSlug) apps = $2;
    res.status(200).json($2);
    return
  }

  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {},
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json($2);
      return
    }

    const now = new Date().toISOString($2);
    const apps = readJsonFile<Application[]>(FILE, []),

    const existing = $2;
    if (existing) {
      existing.status = $2;
      writeJsonFile<Application[]>(FILE, apps),
      res.status(200).json($2);
      return
    }

    const app: Application = {
      id: uuidv4($2);
      jobId: String($2);
      talentSlug: String($2);
      status: action = $2;
      createdAtIso: now},
    apps.push($2);
    writeJsonFile<Application[]>(FILE, apps),
    res.status(201).json($2);
    return
  }

  res.setHeader($2);
  res.status(405).end('Method Not Allowed')
}