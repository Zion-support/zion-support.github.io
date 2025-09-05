<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { v4 as uuidv4 } from 'uuid',
import { readJsonFile, writeJsonFile } from '../../utils/db',
import type { Application } from '../../utils/types',
import { rateLimit } from '../../utils/rateLimit',
const FILE = 'applications.json',

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
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_Application} from '../../utils/types';

const _FILE = 'applications.json';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!rateLimit(req, _res)) return;

  if (req.method === 'GET') {
    const { jobId, _talentSlug} = req.query;
    let _apps = readJsonFile<Application[]>(FILE, []);
    if (jobId) apps = apps.filter(_(a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter(_(a) => a.talentSlug === String(talentSlug));
    res.status(200).json({_applications: apps});
    return;
  }

  if (req.method === 'POST') {_const { jobId, _talentSlug, _action} = req.body || {};
    if (!jobId || !talentSlug || !['apply', 'skip'].includes(action)) {_res.status(400).json({ error: 'Invalid request'});
      return;
    }

    const _now = new Date().toISOString();
    const _apps = readJsonFile<Application[]>(FILE, []);

    const _existing = apps.find(_(a) => a.jobId === jobId && a.talentSlug === talentSlug);
    if (existing) {_existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, _apps);
      res.status(200).json({ application: existing});
      return;
    }

    const app: Application = {_id: uuidv4(), _jobId: String(jobId), _talentSlug: String(talentSlug), _status: action === 'apply' ? 'applied' : 'skipped', _createdAtIso: now};
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({_application: app});
    return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')
}