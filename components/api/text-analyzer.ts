import type { NextApiRequest, NextApiResponse } from 'next';

interface TextAnalysisResult {
  }
}
export default async function handler(

  req: NextApiRequest

  res: NextApiResponse<TextAnalysisResult | { error: string }>
) {
  }
  try {
    const { text } = req && req.body;

    // Basic statistics

    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text

text: string;
  statistics: {characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    syllables: number;

    fleschKincaidGrade: number;
    gunningFog: number;
    smog: number;
    colemanLiau: number;

export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse<TextAnalysisResult | { error: string } />
) {
  if (req.method !== 'POST') {}
return res.status(405).json({ error: 'Method not allowed'}
});
  }
  try {}
    const { text } = req.body;

    }
    if (text.length > 10000) {
      return res}
        .status(400)}
        .json({ error: 'Text too long (max 10,000 characters)' });
    }

    // Basic statistics

    res.status(500).json({ error: 'Internal server error' })
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533

"
