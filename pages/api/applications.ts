<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> main
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
<<<<<<< HEAD
const FILE = 'applications.json',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query,
    let apps = readJsonFile<Application[]>(FILE, []),
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId)),
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug)),
    res.status(200).json({ applications: apps }),
=======
const FILE = 'applications.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query
    let apps = readJsonFile<Application[]>(FILE, [])
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId))
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug))
    res.status(200).json({ applications: apps })
>>>>>>> main
    return
  }

  if (req.method === 'POST') {
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
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return
    }

    const app: Application = {
<<<<<<< HEAD
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
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
>>>>>>> main
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
<<<<<<< HEAD
}




=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
