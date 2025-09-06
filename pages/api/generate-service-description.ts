import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  const { title, targetAudience, keyFeatures, additionalNotes, toneInstruction } = req.body;
  
  if (!title || !targetAudience || !keyFeatures) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }
  
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${title} Target Audience: ${targetAudience} Key Features: - ${keyFeatures.join('\n- ')} ${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''} ${toneInstruction} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a professional marketing copywriter specializing in service descriptions.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });
    
    const description = completion.choices?.[0]?.message?.content || 'No description generated.';
    
    res.status(200).json({ description });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate description' });
  }
}