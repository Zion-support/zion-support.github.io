<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { agendaItems } from '../../../../data/expo/agenda',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = agendaItems.slice(0, 3),
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`,

    const apiKey = process.env.OPENAI_API_KEY,
    if (!apiKey) {
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
    }

    const { OpenAI } = await import('openai'),
    const client = new OpenAI({ apiKey }),
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`,
    const chat = await client.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.3 }),
    const content = chat.choices?.[0]?.message?.content || baseSummary,
    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to generate highlights' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _top = agendaItems.slice(0, _3);
    const _baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${_i.track})`).join('\n- ')}`;

    const _apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {_return res.status(200).json({ summary: baseSummary, _provider: 'local'});
    }

    const {_OpenAI} = await import('openai');
    const _client = new OpenAI({_apiKey});
    const _prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${_JSON.stringify(top)}`;
    const _chat = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [{ role: 'user', _content: prompt}], temperature: 0.3 });
    const _content = chat.choices?.[0]?.message?.content || baseSummary;
    return res.status(200).json({_summary: content, _provider: 'openai'});
  } catch (e: unknown) {_return res.status(500).json({ error: e.message || 'Failed to generate highlights'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}