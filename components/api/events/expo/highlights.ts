import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = null;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {  try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
=======
  try {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    const top = agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`;
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
<<<<<<< HEAD
      return res.status(200).json({ summary: baseSummary, provider: 'local' });    }      return res.status(200).json({ summary: baseSummary, provider: 'local' })
    }
=======
      return res.status(200).json({ summary: baseSummary, provider: 'local' });
   
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`;
    const chat = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [{ role: 'user', content: prompt }]
      temperature: 0.3
    });
    const content = chat.choices?.[0]?.message?.content |baseSummary;
    return res.status(200).json({ summary: content, provider: 'openai' });
 
} catch (e: any) {
    return res
      .status(500)
<<<<<<< HEAD
      .json({ error: e.message |'Failed to generate highlights' });
  }    const content = chat.choices?.[0]?.message?.content |baseSummary;

    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message |'Failed to generate highlights' })
}
<<<<<<< HEAD
}
=======
      .json({ error: e.message || 'Failed to generate highlights' });
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
