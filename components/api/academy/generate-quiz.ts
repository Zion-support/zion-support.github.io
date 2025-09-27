import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { moduleTitle, moduleContent } = req && req.body || {};
  const apiKey = process && process.env.OPENAI_API_KEY;
  
  const fallback = () => {
    return res && res.status(200).json({
      questions: [
        {
          question: "Sample question",
          options: ["A", "B", "C", "D"],
          correct: 0
        }
      ]
    });
  };
  
  if (!apiKey) return fallback();
  
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent: \n${moduleContent}`;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an expert course designer for founders.'
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    
    try {
      const parsed = JSON.parse(text);
      return res.status(200).json(parsed);
    } catch (parseError) {
      return fallback();
    }
  } catch (err) {
    return fallback();
  }
}