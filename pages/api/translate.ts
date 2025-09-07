import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, languages } = req.body || {};
    
    if (!text || !languages || !Array.isArray(languages)) {
      return res.status(400).json({ error: 'Text and languages array are required' });
    }

    // Placeholder for translation logic
    const results: Record<string, string> = {};
    
    for (const lng of languages) {
      const languageName = lng.startsWith('es') ? 'Spanish' :
        lng.startsWith('ar') ? 'Arabic' :
        'English';
      results[lng] = `Translated to ${languageName}: ${text}`;
    }

    res.status(200).json({ success: true, results });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Failed to translate text' });
  }
}