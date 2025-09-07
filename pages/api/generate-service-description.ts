import { NextApiRequest, NextApiResponse } from 'next';

export type GenerateServiceDescriptionRequest = {
  title: string;
  targetAudience: string;
  keyFeatures: string[];
  additionalNotes?: string;
  toneInstruction?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, targetAudience, keyFeatures, additionalNotes, toneInstruction } = req.body as GenerateServiceDescriptionRequest;
    
    if (!title || !targetAudience || !keyFeatures) {
      return res.status(400).json({ error: 'Title, target audience, and key features are required' });
    }

    // Placeholder for service description generation
    const description = `Service: ${title}\nTarget Audience: ${targetAudience}\nKey Features: ${keyFeatures.join(', ')}`;
    
    res.status(200).json({ success: true, description });
  } catch (error) {
    console.error('Service description generation error:', error);
    res.status(500).json({ error: 'Failed to generate service description' });
  }
}