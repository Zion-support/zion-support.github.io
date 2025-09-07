import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key'
});
  if (!limited) {
    bucket.timestamps.push(now);
  }
  ipToRequests[ip] = bucket;
  return limited;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if($2) {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end('Method Not Allowed')
  try {

const { prompt, system, temperature } = (typeof req.body === 'string') ? JSON.parse(req.body) : req.body
    if (!prompt |typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' })
    }
const sys = system |'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.'
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini'
      temperature: typeof temperature === 'number' ? temperature : 0.7
      messages: [
        { role: 'system', content: sys }
        { role: 'user', content: prompt }
      ]
})
    const text = completion.choices?.[0]?.message?.content ?? ''
    return res.status(200).json({ text })
  } catch (err: any) {
    console.error('Operator error', err)
    return res.status(500).json({ error: 'Internal Server Error' })

  }
}
      model: 'gpt-4o-mini',
      temperature: typeof temperature === 'number' ? temperature : 0.7,
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: prompt },
      ],
    });

    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });
  } catch (err: any) {
    console.error('Operator error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
