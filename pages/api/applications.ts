<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { v4 as uuidv4 } from 'uuid';
import { rateLimit } from '../../utils/rateLimit';
<<<<<<< HEAD
import { readJsonFile, writeJsonFile } from '../../utils/fsdb';

const FILE = 'data/applications.json';

type Application = {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
};

=======
const FILE = 'applications.json';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
<<<<<<< HEAD
    if (jobId) apps = apps.filter(a => a.jobId === String(jobId));
    if (talentSlug)
      apps = apps.filter(a => a.talentSlug === String(talentSlug));
=======
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug));
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    res.status(200).json({ applications: apps });
    return;
  }

  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {};
<<<<<<< HEAD
    if (!jobId || !talentSlug || !['apply', 'skip'].includes(action)) {
=======
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      res.status(400).json({ error: 'Invalid request' });
      return;
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);
<<<<<<< HEAD

    const existing = apps.find(
      a => a.jobId === jobId && a.talentSlug === talentSlug
    );
=======
    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
      return;
    }

    const app: Application = {
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
<<<<<<< HEAD
      createdAtIso: now,
=======
      createdAtIso: now
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return;
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}