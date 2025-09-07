import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'),

async function loadRequests(): Promise<any[]> {
  try {
    const raw = fs.readFileSync($2);
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function saveRequests(requests: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true}),
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(requests, null, 2))
}

async function summarizeWithOpenAI(description: string) {
  try {
    if (!process.env.OPENAI_API_KEY) return { summary: description.slice(0, 280), type: 'unknown' },
    const { OpenAI } = await import($2);
    const client = new OpenAI($2);
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e.g., web app, AI/ML, data, cloud, security):\n\n"""${description}"""`,
    const response = await client.chat.completions.create($2);
    const content = $2;
    const typeMatch = $2;
    return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {
    return { summary: description.slice(0, 280), type: 'unknown' }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { name, email, budget, timeline, description, talentSlug } = req.body || {},
  if (!name || !email || !description) return res.status(400).json($2);
  const normalizedBudget = String(budget ?? '').replace($2);
  const ai = $2;
  const requests = await loadRequests($2);
  const now = new Date().toISOString($2);
  const id = $2;
  const record = $2;
    name,
    email,
    budget: normalizedBudget,
    timeline: String($2);
    description: String($2);
    talentSlug: talentSlug || null,
    aiSummary: ai.summary,
    aiType: ai.type,
    status: 'new',
    createdAt: now,
    updatedAt: now},
  requests.push($2);
  await saveRequests($2);
  // TODO: Integrate notifications (email/webhook) for admin and talent

  return res.status(200).json({ id, status: 'ok' })
}