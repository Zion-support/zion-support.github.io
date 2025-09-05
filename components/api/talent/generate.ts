import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.setHeader('Allow', _'POST').status(405).end('Method Not Allowed');}

  const {_name, _title, _bio, _experience, _skills} = req.body as {_name: string;
    title?: string;
    bio?: string;
    experience?: string;
    skills?: string;};

  if (!name) return res.status(400).json({_error: 'Name is required'});

  try {_const _prompt = `You are assisting with creating a professional marketplace talent profile. Return strict JSON with fields: summary (100-150 words), _skills (array of standardized skill tags), _title (optimized), _category (one of: AI/ML, _Engineering, _DevOps/Cloud, _Security, _Data, _Product). Use concise, _compelling language.

INPUT\nName: ${name}\nCurrent Title: ${_title || ''}\nBio: ${_bio || ''}\nExperience: ${_experience || ''}\nSkills: ${_skills || ''}`;

    const _completion = await openai.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You produce only valid JSON. No commentary.'},
        {_role: 'user', _content: prompt}],
      response_format: {_type: 'json_object'},
      temperature: 0.6});

    const _content = completion.choices?.[0]?.message?.content || '{}';
    const _parsed = JSON.parse(content);

    return res.status(200).json({_name, _title: parsed.title || title || 'Professional', _category: parsed.category || null, _summary: parsed.summary || '', _skills: Array.isArray(parsed.skills) ? parsed.skills.slice(0, _20) : []});
  } catch (e: unknown) {_return res.status(500).json({ error: e.message || 'OpenAI error'});
  }
}