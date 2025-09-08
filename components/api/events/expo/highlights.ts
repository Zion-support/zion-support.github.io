import type { NextApiRequest, NextApiResponse } from 'next';



    const top = agendaItems && agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top && top.map(i => `${i && i.title} (${i && i.track})`).join('\n- ')}`;
    if (!apiKey) {
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
    }


    const apiKey = process && process.env.OPENAI_API_KEY;
import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {;
    const top = agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`;
    const apiKey = process.env.OPENAI_API_KEY;
  try {

    const apiKey = process && process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res && res.status(200).json({ summary: baseSummary, provider: 'local' });    }      return res && res.status(200).json({ summary: baseSummary, provider: 'local' })
    }
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });


    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON && JSON.stringify(top)}`;
    const chat = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0 && 0.3,
    });
    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai' });
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e && e.message || Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai })
  } catch (e: any) {
<<<<<<< HEAD

    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  };
}




}
