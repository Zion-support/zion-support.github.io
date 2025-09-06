<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'applications.json';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
<<<<<<< HEAD
    if (jobId) apps = apps.filter(a => a.jobId === String(jobId));
    if (talentSlug)
      apps = apps.filter(a => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return;
=======
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {};
<<<<<<< HEAD
    if (!jobId || !talentSlug || !['apply', 'skip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return;
=======
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);

<<<<<<< HEAD
    const existing = apps.find(
      a => a.jobId === jobId && a.talentSlug === talentSlug
    );
=======
    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
<<<<<<< HEAD
      return;
    }

    const app: Application = {
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
      createdAtIso: now,
    };
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
      return
    }

    const app: Application = {
      id: uuidv4(), jobId: String(jobId),
      talentSlug: String(talentSlug), status: action === 'apply' ? 'applied' : 'skipped',
      createdAtIso: now};
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return
  }

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
