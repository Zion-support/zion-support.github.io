import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
<<<<<<< HEAD
) {  try {
=======
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const top = agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
<<<<<<< HEAD
      return res.status(200).json({ summary: baseSummary, provider: 'local' });    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json({ summary: baseSummary, provider: 'local' });
=======
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const chat = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });
<<<<<<< HEAD
=======
=======
    const chat = await client.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.3 });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const content = chat.choices?.[0]?.message?.content || baseSummary;
    return res.status(200).json({ summary: content, provider: 'openai' });
  } catch (e: any) {
<<<<<<< HEAD
    return res
      .status(500)
      .json({ error: e.message || 'Failed to generate highlights' });
  }
=======
<<<<<<< HEAD
    return res
      .status(500)
      .json({ error: e.message || 'Failed to generate highlights' });
  }
=======
    const chat = await client.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.3 });
    const content = chat.choices?.[0]?.message?.content || baseSummary;
    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to generate highlights' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: e.message || 'Failed to generate highlights' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
