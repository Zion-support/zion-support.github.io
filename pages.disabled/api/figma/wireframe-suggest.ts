import type { NextApiRequest, NextApiResponse } from 'next';'
import OpenAI from 'openai';
:pages_backup/api/figma/wireframe-suggest.ts
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { screenName, role } = req.body |{}
  if (!screenName) {res.status(400).json({ error: 'screenName is required' });
    return;
  }
:pages_backup/api/figma/wireframe-suggest.ts

  try {const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role |'Talent'}\n- Return a compact outline with bullets and short labels.`;
'
  try {const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role |'Talent'}\n- Return a compact outline with bullets and short labels.`;'
    const completion = await openai.chat.completions.create({model: 'gpt-4o-mini';
      messages: [;'
        { role: 'system', content: 'You are a senior product designer. Respond with a compact wireframe outline.' }'
        { role: 'user', content: prompt }];
      temperature: 0.4;
      max_tokens: 400});'
    const suggestion = completion.choices?.[0]?.message?.content |'No suggestion generated.';
    res.status(200).json({ suggestion });'
  } catch (e: any) {const message = process.env.OPENAI_API_KEY ? (e?.message |'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
:pages_backup/api/figma/wireframe-suggest.ts


;
  try {;'`
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;'
      model: 'gpt-4o-mini',;
:pages_backup/api/figma/wireframe-suggest.ts
const openai = new OpenAI({
const openai = new OpenAI({;
  apiKey: process.env.OPENAI_API_KEY
});
export default async function handler(req, res) {;
  try {;
  if (req.method !== 'POST') {;
    res.status(405).json({;
      error: 'Method not allowed'
    });
    return;
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);

const openai = new OpenAI({}
  apiKey: process.env.OPENAI_API_KEY;
});
export default async function handler(req, res) {}
  try {'
  if (req.method !== 'POST') {}
    res.status(405).json({'
      error: 'Method not allowed';
    });
    return;
    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/api/figma/wireframe-suggest.ts
}
:pages_backup/api/figma/wireframe-suggest.ts
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { screenName, role } = req.body || {};
:pages_backup/api/figma/wireframe-suggest.ts
  if (!screenName) {;
    res.status(400).json({;
      error: 'screenName is required'
    });
    return;
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {;
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;
      model: 'gpt-4o-mini';
      messages: [{;
        role: 'system';
        content: 'You are a senior product designer. Respond with a compact wireframe outline.'
      }, {;
        role: 'user';
        content: prompt
      }];
      temperature: 0.4;
      max_tokens: 400
    });
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({;
      suggestion
    });
  } catch (e: unknown) {;
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({;
      error: message
    });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {;
  try {;
  if (req.method !== '$1') {;
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { screenName, role } = req.body || {  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!screenName) {;'
    res.status(400).json({ error: 'screenName is required' });
    return;
:pages_backup/api/figma/wireframe-suggest.ts
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
:pages_backup/api/figma/wireframe-suggest.ts
  try {;
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;'
      model: 'gpt-4o-mini';
:pages_backup/api/figma/wireframe-suggest.ts


}
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
export default async /**
 * handler - Function description
 */;
function handler() {
  // Check condition;
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method not allowed' });
    res.status (500).json ({ error: message });
    const suggestion = completion.choices?.[0]?.message?.content |'No suggestion generated.';
    res.status(200).json({ suggestion });
  } catch (e: any) {const message = process.env.OPENAI_API_KEY ? (e?.message |'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
:pages_backup/api/figma/wireframe-suggest.ts




;
  try {;'`
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;'
      model: 'gpt-4o-mini',;
:pages_backup/api/figma/wireframe-suggest.ts
const openai = new OpenAI({;
  apiKey: process.env.OPENAI_API_KEY
});
export default async function handler(req, res) {;
  try {;
  if (req.method !== 'POST') {;
    res.status(405).json({;
      error: 'Method not allowed'
    });
    return;
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { screenName, role } = req.body || {};
:pages_backup/api/figma/wireframe-suggest.ts
  if (!screenName) {;
    res.status(400).json({;
      error: 'screenName is required'
    });
    return;
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {;
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;
      model: 'gpt-4o-mini';
      messages: [{;
        role: 'system';
        content: 'You are a senior product designer. Respond with a compact wireframe outline.'
      }, {;
        role: 'user';
        content: prompt
      }];
      temperature: 0.4;
      max_tokens: 400
    });
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({;
      suggestion
    });
  } catch (e: unknown) {;
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({;
      error: message
    });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {;
  try {;
  if (req.method !== '$1') {;
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { screenName, role } = req.body || {  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!screenName) {;'
    res.status(400).json({ error: 'screenName is required' });
    return;
:pages_backup/api/figma/wireframe-suggest.ts
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
try {;
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;'
      model: 'gpt-4o-mini';
:pages_backup/api/figma/wireframe-suggest.ts
  try {
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    const completion = await openai.chat.completions.create({;
      model: 'gpt-4o-mini';

:pages_backup/api/figma/wireframe-suggest.ts
      messages: [;
        { role: 'system', content: 'You are a senior product designer. Respond with a compact wireframe outline.' },;
        { role: 'user', content: prompt }];
      temperature: 0.4;
      max_tokens: 400});
:pages_backup/api/figma/wireframe-suggest.ts
const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({ suggestion });
  } catch (e: any) {;
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
  } catch (error) {
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
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


    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({ suggestion });

  }
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({ suggestion });
  } catch (e: any) {;
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
:pages_backup/api/figma/wireframe-suggest.ts
  } catch (error) {;


    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.';
    res.status(200).json({ suggestion });

  }


  } catch (error) {
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/api/figma/wireframe-suggest.ts

}

}

      messages: [;'
        { role: 'system', content: 'You are a senior product designer. Respond with a compact wireframe outline.' },;'
        { role: 'user', content: prompt }];
      temperature: 0.4;
      max_tokens: 400});

  } catch (error) {'
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({ error: message });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/api/figma/wireframe-suggest.ts


  }


}

}
origin/cursor/automate-test-improve-and-merge-code-2533
'"`

}
origin/cursor/automate-test-improve-and-merge-code-2533

}
origin/cursor/automate-test-improve-and-merge-code-2533
