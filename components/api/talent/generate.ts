import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.setHeader('AllowPOST').status(405).end('Method Not Allowed')
  }

  const { name, title, bio, experience, skills } = req.body as {
    name: string,
    title?: string,
    bio?: string,
    experience?: string,
    skills?: string
  },

  if (!name) return res.status(400).json($2);
  try {
    const prompt = `You are assisting with creating a professional marketplace talent profile. Return strict JSON with fields: summary(100-150 words), skills (array of standardized skill tags), title (optimized), category (one of: AI/ML, Engineering, DevOps/Cloud, Security, Data, Product). Use concise, compelling language.

INPUT\nName: ${name}\nCurrent Title: ${title || ''}\nBio: ${bio || ''}\nExperience: ${experience || ''}\nSkills: ${skills || ''}`,

    const completion = await openai.chat.completions.create($2);
    const content = $2;
    const parsed = JSON.parse($2);
    return res.status(200).json({
      name,
      title: parsed.title || title || 'Professional',
      category: parsed.category || null,
      summary: parsed.summary || '',
      skills: Array.isArray(parsed.skills) ? parsed.skills.slice(0, 20) : []})
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'OpenAI error' })
  }
}