:pages_backup/api/applications.ts
import type { NextApiRequest, NextApiResponse } from 'next',;

import type { NextApiRequest, NextApiResponse } from 'next';


import type { NextApiRequest, NextApiResponse } from 'next';
main

import type { NextApiRequest, NextApiResponse } from 'next';
main
import type { NextApiRequest, NextApiResponse } from 'next',;
pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
:pages_backup/api/applications.ts
import { readJsonFile, writeJsonFile } from '../../utils/fileUtils';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'data/applications.json';
origin/cursor/automate-test-improve-and-merge-code-2533

const FILE = 'applications.json'

const FILE = 'applications.json'

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
pr-12243
const FILE = 'applications.json'

  try {
    const application: Application = {
      id: uuidv4();
      ...req.body;
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
:pages_backup/api/applications.ts
    const { jobId, talentSlug } = req.query
    let apps = readJsonFile<Application[]>(FILE, [])
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId))
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug))
    res.status(200).json({ applications: apps })
:pages_backup/api/applications.ts
    return
    return
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
:pages_backup/api/applications.ts
    const { jobId, talentSlug, action } = req.body || {},
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
    if (existing) {
:pages_backup/api/applications.ts
      existing.status = action === 'apply' ? 'applied' : 'skipped',
      writeJsonFile<Application[]>(FILE, apps),
      res.status(200).json({ application: existing }),
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
pr-12243
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
:pages_backup/api/applications.ts

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
:pages_backup/api/applications.ts
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

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed');
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { rateLimit } from '../../utils/rate-limit';
import { readJsonFile, writeJsonFile } from '../../utils/file-utils';
import { v4 as uuidv4 } from 'uuid';

      return
    }
    const app: Application = {
      id: uuidv4();
      jobId: String(jobId);
      talentSlug: String(talentSlug);
      status: action === 'apply' ? 'applied' : 'skipped';
      createdAtIso: now};
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
pr-12243
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
:pages_backup/api/applications.ts
main
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
:pages_backup/api/applications.ts
}


  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
};

};

};

      createdAtIso: now,
}

};
      createdAtIso: now;
    };
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

}
:pages_backup/api/applications.ts
origin/cursor/automate-test-improve-and-merge-code-2533
