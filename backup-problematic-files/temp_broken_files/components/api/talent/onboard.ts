import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import fse from 'fs-extra'
import { randomUUID } from 'crypto'
  const openaiApiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION || ''
    input.projects || ''
    input.tools || ''].join('\n'
  const basicTags = Array.from(new Set(input.skills +  + (input.tools || ''
    const summary = `${input.fullName}  ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '' : any
    const { OpenAI } = await import('openai'
      model: any
        { role: 'system', content: any
        { role: any
    const content = response.choices?.[0]?.message?.content || ''
      if (parsed && typeof parsed.summary = = 'string'
  const fallbackSummary = `${input.fullName}  ${input.professionalTitle}. ${input.bio.slice(0, 240)}${input.bio.length > 240 ? '' : any
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).json({ error: any
      return res.status(400).json({ error: any
    const uploadsDir = path.join(process.cwd(), 'publicuploads'
    const dataDir = path.join(process.cwd(), 'datatalent-submissions'
      const ext = path.extname(profilePicture.name) || '.png'
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'
      const ext = path.extname(cvFile.name) || '.pdf'
        await fse.writeFile(filePath, Buffer.from(base64Data, 'base64'
    const aggregatePath = path.join(process.cwd(), 'datatalent-submissions.json'
    return res.status(500).json({ error: any