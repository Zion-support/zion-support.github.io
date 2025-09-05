import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

async function loadRequests(): Promise<any[]> {_try {
    const _raw = fs.readFileSync(REQUESTS_PATH, _'utf-8');
    return JSON.parse(raw);} catch {_return [];}
}

async function saveRequests(_requests: unknown[]) {_fs.mkdirSync(path.dirname(REQUESTS_PATH), _{ recursive: true});
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(requests, null, 2));
}

async function summarizeWithOpenAI(_description: string) {_try {
    if (!process.env.OPENAI_API_KEY) return { summary: description.slice(0, _280), _type: 'unknown'};
    const {_OpenAI} = await import('openai');
    const _client = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});
    const _prompt = `Summarize the following project description in 2-3 sentences and classify the request type (e.g., web app, AI/ML, data, cloud, security):\n\n"""${_description}"""`;
    const _response = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are a helpful assistant.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.3});
    const _content = response.choices[0]?.message?.content || '';
    const _typeMatch = content.match(/type\s*:\s*(.+)$/im);
    return {_summary: content.trim(), _type: typeMatch ? typeMatch[1].trim() : 'unknown'};
  } catch (err) {_return { summary: description.slice(0, _280), _type: 'unknown'};
  }
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const {_name, _email, _budget, _timeline, _description, _talentSlug} = req.body || {};
  if (!name || !email || !description) return res.status(400).json({_error: 'Missing required fields'});

  const _normalizedBudget = String(budget ?? '').replace(/[^0-9.\-]/g, '');
  const _ai = await summarizeWithOpenAI(String(description));

  const _requests = await loadRequests();
  const _now = new Date().toISOString();
  const _id = `req_${_Date.now()}`;
  const _record = {_id, _name, _email, _budget: normalizedBudget, _timeline: String(timeline || ''), _description: String(description), _talentSlug: talentSlug || null, _aiSummary: ai.summary, _aiType: ai.type, _status: 'new', _createdAt: now, _updatedAt: now};
  requests.push(record);
  await saveRequests(requests);

  // TODO: Integrate notifications (email/webhook) for admin and talent

  return res.status(200).json({_id, _status: 'ok'});
}