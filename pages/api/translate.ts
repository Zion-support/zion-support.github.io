import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { text, targets } = req.body;
    
    if (!text || !targets || !Array.isArray(targets)) {
      return res.status(400).json({ error: 'Text and targets are required' });
    }

    const translations: Record<string, string> = {};
    
    for (const lng of targets) {
      const langName = lng.startsWith('pt') ? 'Portuguese' : 
                      lng.startsWith('es') ? 'Spanish' : 
                      lng.startsWith('ar') ? 'Arabic' : 'English';
      
      // Mock translation - in real implementation, you'd call a translation service
      translations[lng] = `[${langName}] ${text}`;
    }

    res.status(200).json({ translations });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
}