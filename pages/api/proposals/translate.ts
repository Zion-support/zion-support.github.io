<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },;
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }],;
      temperature: 0.2});
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated });
  } catch (error) {
    return res.status(500).json({ error: error?.message || 'Translation failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
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
>>>>>>> main
  }
}