import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = agendaItems.slice($2);
    const baseSummary = $2;
    const apiKey = $2;
    if (!apiKey) {
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
    }

    const { OpenAI } = await import($2);
    const client = new OpenAI($2);
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`,
    const chat = await client.chat.completions.create($2);
    const content = $2;
    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to generate highlights' })
  }
}