import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { title, targetAudience, keyFeatures, additionalNotes, toneInstruction } = req.body;
    
    if (!title || !targetAudience || !keyFeatures) {
      return res.status(400).json({ error: 'Title, target audience, and key features are required' });
    }

    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.

Service Title: ${title}
Target Audience: ${targetAudience}
Key Features: - ${keyFeatures.join('\n- ')}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''}
${toneInstruction}

Requirements:
- 2-3 sentence hook opening that addresses audience needs
- 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;

    // Mock AI generation
    const description = `# ${title}

## What You Get
${keyFeatures.map(feature => `- ${feature}`).join('\n')}

## How It Works
Our streamlined process ensures efficient delivery of ${title.toLowerCase()} services tailored to ${targetAudience.toLowerCase()}.

## Why Choose Us
- Professional expertise
- Customized solutions
- Timely delivery

## Timeline
Most projects are completed within 2-4 weeks depending on complexity.

Ready to get started? Contact us today for a consultation.`;

    res.status(200).json({ description });
  } catch (error) {
    console.error('Service description generation error:', error);
    res.status(500).json({ error: 'Failed to generate service description' });
  }
}