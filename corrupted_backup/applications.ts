import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (!rateLimit(req, res)) return;

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
    if (jobId) apps = apps.filter(a => a.jobId === String(jobId));
    if (talentSlug)
      apps = apps.filter(a => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return;
  }

  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {};
    if (!jobId || !talentSlug || !['apply', 'skip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return;
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);

    const existing = apps.find(
      a => a.jobId === jobId && a.talentSlug === talentSlug
    );
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
      createdAtIso: now,
    };
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
=======
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ applications: [] });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
