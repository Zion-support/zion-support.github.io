import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const {_moduleTitle, _moduleContent} = req.body || {};
  const _apiKey = process.env.OPENAI_API_KEY;

  const _fallback = () => res.status(200).json({_summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});

  if (!apiKey) return fallback();

  try {_const _client = new OpenAI({ apiKey});
    const _prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${_moduleTitle}\nContent:\n${_moduleContent}`;

    const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are a concise, _practical course assistant.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.3});

    const _text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({_summary: text.trim()});
  } catch (err) {_return fallback();}
}