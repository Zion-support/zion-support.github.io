import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { text, targetLanguage } = req.body;
    
    if (!text || !targetLanguage) {
      return res.status(400).json({ error: 'Text and target language are required' });
    }

    // Mock translation - replace with actual translation service
    const translatedText = `[Translated to ${targetLanguage}] ${text}`;

    res.status(200).json({ 
      success: true,
      originalText: text,
      translatedText,
      targetLanguage
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Translation failed' });
  }
}