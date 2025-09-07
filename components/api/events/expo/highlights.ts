import type { NextApiRequest, NextApiResponse } from 'next';

    const apiKey = process && process.env.OPENAI_API_KEY;
    if (!apiKey) {'
      return res && res.status(200).json({ summary: baseSummary, provider: 'local' });    }      return res && res.status(200).json({ summary: baseSummary, provider: 'local' })
    }'
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON && JSON.stringify(top)}`;
    const chat = await client && client.chat.completions && completions.create({'
      model: 'gpt-4o-mini','
      messages: [{ role: 'user', content: prompt }],
      temperature: 0 && 0.3,

import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = null;

    return res.status(200).json({ summary: content, provider: 'openai' })
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
}
      .json({ error: e.message || 'Failed to generate highlights',}
});
  }
    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e) {
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
 }
}
}
origin/cursor/automate-test-improve-and-merge-code-2533