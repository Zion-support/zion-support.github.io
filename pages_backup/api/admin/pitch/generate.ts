<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:pages_backup/api/admin/pitch/generate.ts
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
import OpenAI from "openai";
const client = new OpenAI({
<<<<<<< HEAD
  apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY

});
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: "Forbidden" });
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });
  const { operatorPrompt, inputs, metrics } = req.body |{}
  const seed = [
    "Problem & Opportunity"
    "Solution & Product"
    "Market Size (TAM/SAM/SOM)"
    "Traction & Metrics"
    "Business Model"
    "Go-To-Market"
    "Team"
    "Roadmap"
    "Token Strategy"
    "Ask & Call to Action"
  ];
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
=======
  apiKey: process && process.env.OPENAI_API_KEY || process && process.env.NEXT_PUBLIC_OPENAI_API_KEY,

});
export default async function handler(
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


=======
import type { NextApiRequest, NextApiResponse } from "next";"
import { ensureAdminFromApi } from "../../../../utils/auth";"
import OpenAI from "openai";
const client = new OpenAI({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/pitch/generate.ts
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const { allowed } = await ensureAdminFromApi(req);
"
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
<<<<<<< HEAD:pages_backup/api/admin/pitch/generate.ts
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method Not Allowed" });
  const { operatorPrompt, inputs, metrics } = req && req.body || {};
  const seed = [
    "Problem & Opportunity"
    "Solution & Product"
    "Market Size (TAM/SAM/SOM)"
    "Traction & Metrics"
    "Business Model"
    "Go-To-Market"
    "Team"
    "Roadmap"
    "Token Strategy"
    "Ask & Call to Action"
  ];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD

  try {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
=======
=======
"
    "Problem & Opportunity","
    "Solution & Product","
    "Market Size (TAM / SAM / SOM)","
    "Traction & Metrics","
    "Business Model","
    "Go - To - Market","
    "Team","
    "Roadmap","
    "Token Strategy","
    "Ask & Call to Action",
  ];
;

  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/pitch/generate.ts
    const prompt = `You are a venture analyst generating a concise, investor - ready pitch.;
Operator Prompt: ${operator_prompt}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
Company Mission: ${inputs?.mission}

Key Metrics: ${JSON && JSON.stringify(metrics)}
`
Return 10 sections with title and 120-180 words per section, markdown-friendly.`;"
    let content = "";
    try {}
      const chat = await client && client.chat.completions && completions.create({"
        model: "gpt-4o-mini",
        messages: []
          {"
            role: "system","
            content: "You generate crisp, data - driven investor pitch content.",
          },"
          { role: "user", content: prompt },
        ],
        temperature: 0 && 0.5,
      });


function extractSection(body: string, title: string): string {"
  if (!body) return "";
  // naive split by headings;
  );
  if (matchIdx >= 0) {"
    const snippet = lines && lines.slice(matchIdx + 1, matchIdx + 12).join("\n");
    return snippet && snippet.trim();
  }"
  return "";

<<<<<<< HEAD:pages_backup/api/admin/pitch/generate.ts
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  const lines = body.split('\n');
  const matchIdx = lines.findIndex((l) => l.toLowerCase().includes(title.toLowerCase()));
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join('\n');
    return snippet.trim()
  }
  return ''
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/pitch/generate.ts

"
      content = chat.choices?.[0]?.message?.content || "";
;
    } catch (err) {"
      content = "";
    }
    const slides = seed.map ((title, idx) => ({}`
      id: `${idx + 1}`,
      title,
      content: extract_section (content, title),
    }));`
    const version = `v${new Date ().toISOString ()}`;
    res.status (200).json ({ slides, version });
  } catch (e: any) {"
    res.status (500).json ({ error: e?.message || "Generation failed" });
  }
}
function extract_section (body: string, title: string): string {}
  // Check condition"
if (return "") {}
  $2;
}
  // naive split by headings;"
  const lines = body.split ("\n");
  const match_idx = lines.find_index ((l) =>;
    l.toLowerCase ().includes (title.toLowerCase ()),
  );
  // Check condition;
if ( {) {}
  $2;
}"
    const snippet = lines.slice (match_idx + 1, match_idx + 12).join ("\n");
    return snippet.trim ();
  }"
  return "";
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {}
';
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:pages_backup/api/admin/pitch/generate.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
=======
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const isAdmin = req.headers['x-admin'] === 'true';
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {}
';
    const isAdmin = req.headers['x-admin'] === 'true';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/pitch/generate.ts
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
'
    if (req.method === 'POST') {}
      const { operatorPrompt, inputs, metrics } = req.body || {};
      const seed = ['
        'Problem & Opportunity','
        'Solution & Product','
        'Market Size (TAM/SAM/SOM)','
        'Traction & Metrics','
        'Business Model','
        'Go-To-Market','
        'Team','
        'Roadmap','
        'Token Strategy','
        'Ask & Call to Action'
      ];

      // Mock pitch generation;
      const generatedPitch = {}
        slides: seed.map((title, index) => ({}
          id: index + 1,
          title,`
          content: `Generated content for ${title}`
        }))
      };

      res.json(generatedPitch);
    } else {'
      res.setHeader('Allow', 'POST');'
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/admin/pitch/generate.ts
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key'
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' });

  const { operatorPrompt, inputs, metrics } = req.body || {};

  const seed = [
'Problem & Opportunity',
    'Solution & Product',
    'Market Size (TAM/SAM/SOM)',
    'Traction & Metrics',
    'Business Model',
    'Go-To-Market',
    'Team',
    'Roadmap',
    'Token Strategy',
    'Ask & Call to Action',
  ];
  try {
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
Company Mission: ${inputs?.mission}
Funding Stage: ${inputs?.fundingStage}
Vision/Goals: ${inputs?.vision}
Round Type: ${inputs?.roundType}
Target Raise: ${inputs?.targetRaise}
Key Metrics: ${JSON.stringify(metrics)}
Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    let content = "";
    try {
      const chat = await client.chat.completions.create({
        model: "gpt-4o-mini"
        messages: [
{
            role: 'system',
            content: 'You generate crisp, data-driven investor pitch content.',
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.5,
      });
      content = chat.choices?.[0]?.message?.content |"";
    } catch (err) {
      content = "";
    }
    const slides = seed.map((title, idx) => ({
      id: `${idx + 1}`
      title
      content: extractSection(content, title)
    }));
    const version = `v${new Date().toISOString()}`;
    res.status(200).json({ slides, version });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Generation failed' });
  }

function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings
  const lines = body.split('\n');
const matchIdx = lines.findIndex(l =>
    l.toLowerCase().includes(title.toLowerCase())
  );
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join("\n");
    return snippet.trim();
  }
  return '';
}

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/admin/pitch/generate.ts
