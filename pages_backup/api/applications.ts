<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
import { readJsonFile, writeJsonFile } from '../../utils/fileUtils';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'data/applications.json';
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query,
    let apps = readJsonFile<Application[]>(FILE, []),
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId)),
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug)),
    res.status(200).json({ applications: apps }),
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
const FILE = 'applications.json'

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
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
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
    const { jobId, talentSlug } = req.query
    let apps = readJsonFile<Application[]>(FILE, [])
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId))
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug))
    res.status(200).json({ applications: apps })
>>>>>>> main
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
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
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
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
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
      return
    }

    const app: Application = {
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
origin/cursor/automate-test-improve-and-merge-code-2533
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
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
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
<<<<<<< HEAD:pages/api/applications.ts
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
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
<<<<<<< HEAD

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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
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
<<<<<<< HEAD:pages/api/applications.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
