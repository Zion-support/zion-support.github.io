<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
;
const openai = new OpenAI({ apiKey:process.env.OPENAI_API_KEY });
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.status(405).json({ error:'Method not allowed' });
    return;
  }
  const { screenName, role } = req.body || {}
  if (!screenName) {;
    res.status(400).json({ error:'screenName is required' });
    return;
  }
;
  try {;
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen:${screenName}\n- Primary role:${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
;
    const completion = await openai.chat.completions.create({;
      model:'gpt-4o-mini',;
      messages:[;
        { role:'system', content:'You are a senior product designer. Respond with a compact wireframe outline.' },;
        { role:'user', content:prompt }],;
      temperature:0.4,;
      max_tokens:400});
;
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({ suggestion });
  } catch (e:any) {;
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') :'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error:message });
=======
import type {_NextApiRequest, _NextApiResponse} from 'next'
import OpenAI from 'openai'

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY})

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'})
    return
  }
  const {_screenName, _role} = req.body || {}
  if (!screenName) {_res.status(400).json({ error: 'screenName is required'})
    return
  }

  try {_const _prompt = `Propose a concise wireframe layout (sections, _primary actions, _information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${_role || 'Talent'}\n- Return a compact outline with bullets and short labels.`

    const _completion = await openai.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are a senior product designer. Respond with a compact wireframe outline.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.4,
      max_tokens: 400})

    const _suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.'
    res.status(200).json({_suggestion})
  } catch (e: unknown) {_const _message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.'
    res.status(500).json({ error: message})
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}