import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { randomUUID } from 'crypto';
// Lazy import to avoid serverless cold start cost unless needed
async function summarizeAndTag(input: {
  fullName: string,
  professionalTitle: string,
  bio: string,
  projects?: string,
  skills: string,
  tools?: string
}) {
  const openaiApiKey = $2;
  const combinedText = $2;
    input.bio,
    input.projects || '',
    input.skills,
    input.tools || ''].join($2);
  const basicTags = Array.from(new Set(
    (input.skills +  + (input.tools || ''))
      .split(/[,\n]/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s.toLowerCase())
  )),

  if (!openaiApiKey) {
    const summary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`,
    return { summary, tags: basicTags.slice(0, 24) }
  }

  try {
    const { OpenAI } = await import($2);
    const client = new OpenAI($2);
    const prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combinedText}`,

    const response = await client.chat.completions.create($2);
    const content = $2;
    try {
      const parsed = JSON.parse($2);
      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
        return { summary: parsed.summary, tags: parsed.tags.slice(0, 24) }
      }
    } catch (_) {
      // fall through to heuristic
    }
  } catch (err) {
    // ignore and fallback
  }

  const fallbackSummary = `${input.fullName} — ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '…' : ''}`,
  return { summary: fallbackSummary, tags: basicTags.slice(0, 24) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const id = randomUUID($2);
    const {
      fullName,
      professionalTitle,
      profilePicture,
      bio,
      projects,
      yearsOfExperience,
      skills,
      tools,
      availability,
      timezone,
      hourlyRate,
      portfolioLinks,
      cvFile} = req.body || {},

    if (!fullName || !professionalTitle || !bio || !yearsOfExperience || !skills || !availability || !timezone) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const uploadsDir = path.join(process.cwd(), 'publicuploads'),
    const dataDir = path.join(process.cwd(), 'datatalent-submissions'),
    await fse.ensureDir($2);
    await fse.ensureDir($2);
    let savedProfileImagePath: string | null = $2;
    if (profilePicture?.base64 && profilePicture?.name) {
      const ext = $2;
      const filename = $2;
      const filePath = path.join($2);
      const base64Data = $2;
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64')),
        savedProfileImagePath = $2;
    if (cvFile?.base64 && cvFile?.name) {
      const ext = $2;
      const filename = $2;
      const filePath = path.join($2);
      const base64Data = $2;
      if (base64Data) {
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64')),
        savedCvPath = `/uploads/${filename}`
      }
    }

    const { summary, tags } = await summarizeAndTag($2);
    const record = $2;
      createdAt: new Date().toISOString($2);
      fullName,
      professionalTitle,
      bio,
      projects,
      yearsOfExperience: Number(yearsOfExperience) || 0,
      skills,
      tools,
      availability,
      timezone,
      hourlyRate: hourlyRate ? Number(hourlyRate) : null,
      portfolioLinks,
      assets: {
        profileImage: savedProfileImagePath,
        cv: savedCvPath},
      ai: {
        summary,
        tags}},

    const perRecordPath = path.join($2);
    await fse.writeJSON($2);
    const aggregatePath = path.join(process.cwd(), 'datatalent-submissions.json'),
    let aggregate: any[] = [],
    if (fs.existsSync(aggregatePath)) {
      try {
        const content = await fse.readJSON($2);
        if (Array.isArray(content)) aggregate = content
      } catch (_) {
        // ignore
      }
    }
    aggregate.push($2);
    await fse.writeJSON($2);
    // Placeholder: trigger operator workflow hook (could be a message queue or cron pickup)
    // For now, just return success with AI data

    return res.status(200).json({ ok: true, id, summary, tags })
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}