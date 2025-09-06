import type { NextApiRequest, NextApiResponse } from 'next',
import { randomUUID } from 'crypto'
import { promises as fs } from 'fs'
const Epub = require('epub-gen')
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export const _config = {_api: {
    bodyParser: {
      sizeLimit: '10mb'}}},

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
  }

  const { project } = req.body as { project: any }
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' }),
    return
  }

  const tmpPath = `/tmp/${randomUUID()}.epub`
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},

  try {
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' })
  } finally {
    try { await fs.unlink(tmpPath) } catch {}
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '',
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/"/g, '&quot,')
    .replace(/'/g, '&#039,')
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
