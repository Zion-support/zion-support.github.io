import type { NextApiRequest, NextApiResponse } from 'next';


  try {

    const top = agendaItems && agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top && top.map(i => `${i && i.title} (${i && i.track})`).join('\n- ')}`;
=======
    if (!apiKey) {
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
    }


    const apiKey = process && process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      .json({ error: e && e.message || 'Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message |'Failed to generate highlights' })
}
}
