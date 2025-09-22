:pages_backup/api/translate.ts



const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { text, targets } = req.body as { text: string, targets: string[] }
  if (!text |!Array.isArray(targets) |targets.length === 0) {'
    return res.status(400).json({ error: 'Invalid input' })
  }
  try {'
    const system = 'You are a professional localization specialist. Maintain meaning, tone, and formatting. Output only the translated text.'
    const results: Record<string, string> = {}
:pages_backup/api/translate.ts
    for (const lng of targets) {
      const langName = (
'English'
:pages_backup/api/translate.ts

      const completion = await openai.chat.completions.create({'
        model: 'gpt-4o-mini'
        messages: []
;
      results[lng] = translated;
    }
    return res.status(200).json(results)
  } catch (err: any) {'
    console.error('Translation error', err)
:pages_backup/api/translate.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    return res.status(500).json({ error: 'Translation failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ translation: 'Translated content' });
'
    return res.status(500).json({ error: 'Translation failed' })
  };
};'
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ translation: 'Translated content' });'
import type { NextApiRequest, NextApiResponse } from 'next';'
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {}
  try {';
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { text, targets } = req.body as { text: string, targets: string[] },;
  if (!text || !Array.isArray(targets) || targets.length === 0) {;'
    return res.status(400).json({ error: 'Invalid input' });
:pages_backup/api/translate.ts
    } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
:pages_backup/api/translate.ts
import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY }),
  }
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY })

  }

}

import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai',
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY }),
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY })
export default async /**
 * handler - Function description
'
import type { NextApiRequest, NextApiResponse } from 'next','
import OpenAI from 'openai',
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY }),
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {}
  $2;
}
  const { text, targets } = req.body as { text: string, targets: string[] },
  // Check condition;
if (|| targets.length === 0) {) {}
  $2;
}'
    return res.status (400).json ({ error: 'Invalid input' });
  }
:pages_backup/api/translate.ts
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const system = 'You are a professional localization specialist. Maintain meaning, tone, and formatting. Output only the translated text.',;
    const results: Record<string, string> = {};
    for (const lng of targets) {;
      const langName = (;
        lng.startsWith('pt') ? 'Portuguese' :;
        lng.startsWith('es') ? 'Spanish' :;
        lng.startsWith('ar') ? 'Arabic' :;
        'English';
      );
      const completion = await openai.chat.completions.create({;
        model: 'gpt-4o-mini';
        messages: [;
          { role: 'system', content: system },;
          { role: 'user', content: `Translate this into ${langName} in a business-appropriate tone.\n\n${text}` }],;
        temperature: 0.2});
      const translated = completion.choices?.[0]?.message?.content?.trim() || '';
      results[lng] = translated;
:pages_backup/api/translate.ts

export default function handler() { return null; }
  res.status(200).json({ translation: 'Translated content' });'
import type { NextApiRequest, NextApiResponse } from 'next';'
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {}
  try {';
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { text, targets } = req.body as { text: string, targets: string[] },;
  if (!text || !Array.isArray(targets) || targets.length === 0) {;'
    return res.status(400).json({ error: 'Invalid input' });
    } catch (error) {}
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return res.status(200).json(results);
  } catch (error) {
    console.error('Translation error', err);
    return res.status(500).json({ error: 'Translation failed' });
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

}
}
origin/cursor/automate-test-improve-and-merge-code-2533

  }
}

'"`
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
origin/cursor/automate-test-improve-and-merge-code-2533
