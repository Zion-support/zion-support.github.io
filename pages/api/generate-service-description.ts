import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export type GenerateServiceDescriptionRequest = {
  title: string;
  keyFeatures: string[];
  targetAudience: string;
  additionalNotes?: string;
  tone?: 'professional' | 'friendly' | 'persuasive' | 'technical'
};

export type GenerateServiceDescriptionResponse = {
<<<<<<< HEAD
  description: string;
=======
export type GenerateServiceDescriptionRequest = {
  title: string, keyFeatures: string[],
  targetAudience: string, additionalNotes?: string,
  tone?: 'professional' | 'friendly' | 'persuasive' | 'technical'
};

export type GenerateServiceDescriptionResponse = {
  description: string
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  description: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { title, keyFeatures, targetAudience, additionalNotes, tone } = req.body as GenerateServiceDescriptionRequest;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' })
  }

  if (!title || !Array.isArray(keyFeatures) || keyFeatures.length === 0 || !targetAudience) {
    return res.status(400).json({ error: 'Missing required fields: title, keyFeatures, targetAudience' })
  }

  try {
<<<<<<< HEAD
    const toneInstruction = tone
      ? `Write in a ${tone} tone.`
      : 'Write in a professional, clear tone.';
=======
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { title, keyFeatures, targetAudience, additionalNotes, tone } = req.body as GenerateServiceDescriptionRequest;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' })
  }

  if (!title || !Array.isArray(keyFeatures) || keyFeatures.length === 0 || !targetAudience) {
    return res.status(400).json({ error: 'Missing required fields: title, keyFeatures, targetAudience' })
  }

  try {
    const toneInstruction = tone ? `Write in a ${tone} tone.` : 'Write in a professional, clear tone.';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const toneInstruction = tone ? `Write in a ${tone} tone.` : 'Write in a professional, clear tone.';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.

Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
- ${keyFeatures.join('\n- ')}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''}

${toneInstruction}

Requirements:
- 2-3 sentence hook opening that addresses audience needs
- 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;

    // Using Responses API for modern SDK
<<<<<<< HEAD
    const response = await openai.responses.create({
<<<<<<< HEAD
=======
    const response = await openai.chat.completions.create({
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a professional copywriter specializing in service descriptions for tech companies.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    });
=======
      model: 'gpt-4o-mini', input: prompt,
      temperature: 0.7
      });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

<<<<<<< HEAD
    let description = '';
    const output = response.output?.[0];
    if (output && output.type === 'message') {
      // Aggregate all text parts from the first message
      description = output.content
<<<<<<< HEAD
        .filter(c => c.type === 'output_text')
        .map((c: any) => c.text)
        .join('\n');
=======
        .filter((c) => c.type === 'output_text')
        .map((c: any) => c.text)
        .join('\n')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
=======
    const description = response.choices?.[0]?.message?.content || '';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore
<<<<<<< HEAD
<<<<<<< HEAD
      description =
        (response as any).content?.[0]?.text ||
        'Unable to generate description at this time.';
=======
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    return res.status(200).json({ description })
  } catch (error: any) {
    console.error('OpenAI generation error:', error);
    return res.status(500).json({ error: 'Failed to generate description' })
  }
<<<<<<< HEAD
=======
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.'
    }

    return res.status(200).json({ description })
  } catch (error: any) {
    console.error('OpenAI generation error:', error);
    return res.status(500).json({ error: 'Failed to generate description' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
