import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
import { readJsonFile, writeJsonFile } from '../../utils/fileUtils';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'data/applications.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const application: Application = {
      id: uuidv4(),
      ...req.body,
      createdAt: new Date().toISOString()
    };

    const applications = readJsonFile(FILE) || [];
    applications.push(application);
    writeJsonFile(FILE, applications);

    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create application' });
  }
}
=======
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'applications.json'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return
  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query
    let apps = readJsonFile<Application[]>(FILE, [])
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId))
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug))
    res.status(200).json({ applications: apps })
    return
  }
  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body |{}
    if (!jobId |!talentSlug |!['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' })
      return
    }
    const now = new Date().toISOString()
    const apps = readJsonFile<Application[]>(FILE, [])
    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug)
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped'
      writeJsonFile<Application[]>(FILE, apps)
      res.status(200).json({ application: existing })
      return
    }
    const app: Application = {
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
