<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
const FILE = 'applications.json',

<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query,
    let apps = readJsonFile<Application[]>(FILE, []),
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId)),
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug)),
    res.status(200).json({ applications: apps }),
    return
  }

  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {},
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' }),
      return
    }

    const now = new Date().toISOString(),
    const apps = readJsonFile<Application[]>(FILE, []),

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug),
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped',
      writeJsonFile<Application[]>(FILE, apps),
      res.status(200).json({ application: existing }),
      return
    }

    const app: Application = {
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
      createdAtIso: now},
    apps.push(app),
    writeJsonFile<Application[]>(FILE, apps),
    res.status(201).json({ application: app }),
    return
  }
<<<<<<< HEAD

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed');
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
import { rateLimit } from '../../utils/rate-limit';
import { readJsonFile, writeJsonFile } from '../../utils/file-utils';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      existing.status = action === 'apply' ? 'applied' : 'skipped'
      writeJsonFile<Application[]>(FILE, apps)
      res.status(200).json({ application: existing })
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

type Application = {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
};

const FILE = 'applications.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!rateLimit(req, res)) return;
    
    if (req.method === 'GET') {
      const { jobId, talentSlug } = req.query;
      let apps = readJsonFile<Application[]>(FILE, []);
      
      if (jobId && talentSlug) {
        apps = apps.filter((a) => a.jobId === jobId && a.talentSlug === talentSlug);
      }
      
      res.status(200).json({ applications: apps });
      return;
    }
    
    if (req.method === 'POST') {
      const { jobId, talentSlug, action } = req.body;
      if (!jobId || !talentSlug || !action) {
        res.status(400).json({ error: 'Invalid request' });
        return;
      }
      
      const now = new Date().toISOString();
      const apps = readJsonFile<Application[]>(FILE, []);
      const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
      
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
        createdAtIso: now
      };
      
      apps.push(app);
      writeJsonFile<Application[]>(FILE, apps);
      res.status(201).json({ application: app });
      return;
    }
    
    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
