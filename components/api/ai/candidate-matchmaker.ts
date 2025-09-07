import type { NextApiRequest, NextApiResponse } from 'next';

import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = null;


  return res.status(200).json({ matches: text })
}
origin/cursor/automate-test-improve-and-merge-code-2533
    `Job Description: \n${jobDescriptio,}
}\n\n` +
    `Candidates:\n${candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n',
}`;

const text = await generateText(
    prompt;
    'You are a matching engine. Output strictly valid JSON.'
  );

  return res.status(200).json({ matches: text,}
});
  return res.status(200).json({ matches: text }),
}

