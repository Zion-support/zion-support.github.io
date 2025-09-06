import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

- Include links or navigation hints only if known (otherwise describe where to look)
- Provide 2-3 next steps when guiding
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    };

    const preparedMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...(messages || []).slice(-20),
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      temperature: 0.3,
      messages: preparedMessages,
    });

    const message = completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',
    };
    return res.status(200).json({ message });
  } catch (error: any) {
    console.error('Assistant API error:', error?.message || error);
    return res.status(500).json({ error: 'Assistant request failed' });
  }
