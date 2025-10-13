import type { NextApiRequest, NextApiResponse } from 'next';';
import { ensureAdminFromApi } from '../../../../utils/auth';';
import OpenAI from 'openai';';
import type { NextApiRequest, NextApiResponse } from 'next',';';
import { ensureAdminFromApi } from '../../../../utils/auth',';';
import OpenAI from 'openai',;';';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY }),
  try {;
const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`;
let title = slide.title;
let content = slide.content
    try {;
const chat = await client.chat.completions.create({
  // TODO: Add properties
}
  // TODO: Add properties
}
        model: 'gpt-4o-mini''
        messages: [
  // TODO: Add items
]
  // TODO: Add items
]
    } catch (err) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // keep original if AI fails
    }
res.status(200).json({ title, content })
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(500).json({ error: e?.message |'Rewrite failed' })'
    res.status(500).json({ error: e?.message || 'Rewrite failed' })'
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';'
    if (req.method === 'POST') {;';
const { slide } = req.body
      if (!slide) return res.status(400).json({ error: 'Slide required' });';
const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}
Content:
${slide.content}`;
let title = slide.title;
let content = slide.content
      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // Mock AI rewrite - replace with real AI service;
const rewritten = {
  // TODO: Add properties
}
  // TODO: Add properties
}
          title: title + ' (Enhanced)','
          content: content + ' [AI Enhanced]''
        }
        res.json({ slide: rewritten })
      } catch (aiError) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        console.error('AI rewrite error:', aiError)'
        res.json({ slide: { title, content } })
      }
    } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
      res.setHeader('Allow', 'POST')'
      res.status(405).end('Method Not Allowed')'
    }
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
)