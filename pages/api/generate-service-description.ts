import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

interface GenerateServiceDescriptionRequest {
  title: string;
  keyFeatures: string[];
  targetAudience: string;
  additionalNotes?: string;
  tone?: 'professional' | 'casual' | 'technical' | 'friendly';
}

interface GenerateServiceDescriptionResponse {
  description: string;
  shortDescription: string;
  keyBenefits: string[];
  callToAction: string;
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, keyFeatures, targetAudience, additionalNotes, tone } = req.body as GenerateServiceDescriptionRequest;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  if (!title || !Array.isArray(keyFeatures) || keyFeatures.length === 0 || !targetAudience) {
    return res.status(400).json({ error: 'Missing required fields: title, keyFeatures, targetAudience' });
  }

  try {
    const toneInstruction = tone ? `Write in a ${tone} tone.` : 'Write in a professional, clear tone.';

    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.

Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
- ${keyFeatures.join('\n- ')}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''}

${toneInstruction}

Please provide:
1. A detailed service description (3-4 paragraphs)
2. A short description (1-2 sentences)
3. Key benefits (3-5 bullet points)
4. A compelling call-to-action

Format your response as JSON with keys: description, shortDescription, keyBenefits, callToAction`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a professional marketing copywriter specializing in service descriptions. Always respond with valid JSON.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const responseText = completion.choices[0]?.message?.content || '';
    
    try {
      const response = JSON.parse(responseText);
      res.status(200).json(response);
    } catch (parseError) {
      // Fallback if JSON parsing fails
      res.status(200).json({
        description: responseText,
        shortDescription: responseText.split('.')[0] + '.',
        keyBenefits: keyFeatures,
        callToAction: 'Contact us today to learn more!'
      });
    }
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to generate service description' });
  }
}