<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
async function loadRequests(): Promise<any[]> {
  try {
    const raw = null;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
 const response = await client.chat.completions.create ({
  model: 'gpt-4o-mini';
messages: [ {
  role: 'system', content: 'You are a helpful assistant.'
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
 const response = await client.chat.completions.create ({
  model: 'gpt-4o-mini';
messages: [ {
  role: 'system', content: 'You are a helpful assistant.' 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// Create utility
export const Create = () => {
  // Implementation here
  return null;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
{
  role: 'user', content: prompt
}];
temperature: 0.3
});
<<<<<<< HEAD
const content = response.choices[0]?.message?.content |'';
const typeMatch = content.match (/type\s*:\s* (.+) $/im);
      return { summary: description.slice(0, 280), type: 'unknown' };    const { OpenAI } = await import('openai');async function saveRequests(requests: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(requests, null, 2))
}
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
async function summarizeWithOpenAI(description: string) {
  try {
    if (!process.env.OPENAI_API_KEY) return { summary: description.slice(0, 280), type: 'unknown' }
=======
const content = response.choices[0]?.message?.content || '';
const typeMatch = content.match (/type\s*:\s* (.+) $/im);

      return { summary: description.slice(0, 280), type: 'unknown' };
    const { OpenAI } = await import('openai');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e.g., web app, AI/ML, data, cloud, security):\n\n"""${description}"""`;
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
<<<<<<< HEAD
        { role: 'system', content: 'You are a helpful assistant.' }
        { role: 'user', content: prompt }
      ]
      temperature: 0.3
=======
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    });
    const content = response.choices[0]?.message?.content |'';
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return {
      summary: content.trim()
      type: typeMatch ? typeMatch[1].trim() : 'unknown'
    }
  } catch (err) {
    return { summary: description.slice(0, 280), type: 'unknown' }
  }
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const { name, email, budget, timeline, description, talentSlug } =
    req.body |{}
  if (!name |!email |!description)
    return res.status(400).json({ error: 'Missing required fields' });    const content = response.choices[0]?.message?.content |'';
    const typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return { summary: content.trim(), type: typeMatch ? typeMatch[1].trim() : 'unknown' }
  } catch (err) {
    return { summary: description.slice(0, 280), type: 'unknown' }
  }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, budget, timeline, description, talentSlug } = req.body |{}
  if (!name |!email |!description) return res.status(400).json({ error: 'Missing required fields' });
  const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
=======

  
}

const { name, email, budget, timeline, description, talentSlug } =
    req.body || {};
  if (!name || !email || !description)
    return res.status(400).json({ error: 'Missing required fields' });

  
}

const normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const ai = await summarizeWithOpenAI(String(description));
  const requests = await loadRequests();
  const now = new Date().toISOString();
  const id = `req_${Date.now()}`;
  const record = {
<<<<<<< HEAD
    id
    name
    email
    budget: normalizedBudget
    timeline: String(timeline |'')
    description: String(description)
    talentSlug: talentSlug |null
    aiSummary: ai.summary
    aiType: ai.type
    status: 'new'
    createdAt: now
    updatedAt: now
  };  requests.push(record);    id;
    name;
    email;
    budget: normalizedBudget;
    timeline: String(timeline |'');
    description: String(description);
    talentSlug: talentSlug |null;
    aiSummary: ai.summary;
    aiType: ai.type;
    status: 'new';
    createdAt: now
    updatedAt: now}
=======
    id,
    name,
    email,
    budget: normalizedBudget,
    timeline: String(timeline || ''),
    description: String(description),
    talentSlug: talentSlug || null,
    aiSummary: ai.summary,
    aiType: ai.type,
    status: 'new',
    createdAt: now,
    updatedAt: now,
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  requests.push(record);
  await saveRequests(requests);

  // TODO: Integrate notifications (email/webhook) for admin and talent
<<<<<<< HEAD
return res.status(200).json({ id, status: 'ok' });
}
=======

  return res.status(200).json({ id, status: 'ok' });
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
