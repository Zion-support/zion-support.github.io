import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  try {

    const apiKey = process && process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  try {

    const apiKey = process && process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { agendaItems } from '../../../../data/expo/agenda';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = null;
  try {
    const top = agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`;
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
return res.status(200).json({ summary: baseSummary, provider: 'local' });
    }
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`;
const chat = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    });
    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai' });
  } catch (e: any) {
    return res
      .status(500)
<<<<<<< HEAD
<<<<<<< HEAD
      .json({ error: e && e.message || 'Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai' })
=======
<<<<<<< HEAD
      .json({ error: e && e.message || 'Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai' })
=======
      .json({ error: e.message || 'Failed to generate highlights' });
  }
    return res.status(200).json({ summary: content, provider: 'openai' })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      .json({ error: e.message || 'Failed to generate highlights' });
  }
    return res.status(200).json({ summary: content, provider: 'openai' })
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  };
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
