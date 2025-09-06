<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/applications.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> main
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
=======

import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
<<<<<<< HEAD
const FILE = 'applications.json',
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { readJsonFile, writeJsonFile } from '../../utils/fileUtils';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'data/applications.json';
origin/cursor/automate-test-improve-and-merge-code-2533

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query,
    let apps = readJsonFile<Application[]>(FILE, []),
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId)),
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug)),
    res.status(200).json({ applications: apps }),
<<<<<<< HEAD:pages_backup/api/applications.ts
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const FILE = 'applications.json'

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
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return

  if (req.method === 'GET') {
<<<<<<< HEAD
<<<<<<< HEAD
    const { jobId, talentSlug } = req.query
    let apps = readJsonFile<Application[]>(FILE, [])
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId))
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug))
    res.status(200).json({ applications: apps })
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
    return
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
if (jobId) apps = apps.filter(a => a.jobId === String(jobId));
    if (talentSlug)
      apps = apps.filter(a => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return;
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  if (req.method === 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/applications.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
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
<<<<<<< HEAD:pages_backup/api/applications.ts
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const { jobId, talentSlug, action } = req.body || {}
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return
    }

    const app: Application = {
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/applications.ts
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
<<<<<<< HEAD
<<<<<<< HEAD
      createdAtIso: now},
    apps.push(app),
    writeJsonFile<Application[]>(FILE, apps),
    res.status(201).json({ application: app }),
=======
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
      createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
};

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
origin/cursor/automate-test-improve-and-merge-code-2533
