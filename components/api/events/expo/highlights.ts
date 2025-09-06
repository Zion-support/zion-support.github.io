import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  try {

    const apiKey = process && process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  };
}
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
