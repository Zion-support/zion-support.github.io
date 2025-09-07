<<<<<<< HEAD


const supabaseKey =;
  process.env.SUPABASE_SERVICE_ROLE_KEY |
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =;

  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const openai = openaiApiKey ? new OpenAI({ "apiKey": openaiApiKey,;
}) : null;

const supabaseKey =;

const openaiApiKey = process.env.OPENAI_API_KEY;
  process && process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
<<<<<<< HEAD

const supabase =;
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

const openai = openaiApiKey ? new OpenAI({ "apiKey": openaiApiKey,;
}) : null;

export default async function handler() {

  }

  if (req.method !== 'POST')'
return res.status(405).json({ "message": 'Method not allowed',;'
});

<<<<<<< HEAD
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
    }
    try {
      let aiSummary: string | null = null;
      let aiTags: string[] = [];
      if (openai) {
        )
          .replace(/tags?:/i, "")
          .trim();
        aiTags = tagsLine
          ? tagsLine
              .split(",")
              .map((t) => t && t.trim())
              .filter(Boolean)
          : [];
      }
<<<<<<< HEAD
const supabaseUrl = $2;
const supabaseKey = $2;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null,
>>>>>>> origin/main

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { service, description, timeline, budgetRange, email } = req.body || {};
  if (!service || !description || !email) {
<<<<<<< HEAD
}
return res.status(400).json({ "message": 'Missing required fields',;'
});
  }

  try {
}
let "aiSummary": string | null = null;
    let "aiTags": string[] = [];
=======
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    let aiSummary: string | null = null;
    let aiTags: string[] = [];
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

    if (openai) {
}
const prompt = `Summarize this marketplace quote request in one sentence and suggest 3-5 tags.\n\"nService": ${service}\"nEmail": ${email}\"nBudget": ${budgetRange || 'N/A'}\"nTimeline": ${timeline?.start || 'N/A'} to ${timeline?.end || 'N/A'}\"nDescription": ${descriptio,;'}`;`

const resp = await openai.responses.create({
        }
        "model": 'gpt-4.1-mini','
"input": prompt
      });

<<<<<<< HEAD
const text = resp.output_text?.trim() || '';'

      aiSummary = text.split('\n')[0] || text;'

const tagsLine = (text.split('\n').find(l => { return l.toLowerCase().includes('tags')) || ''; }'
      ).replace(/tags?:/i, '').trim()aiTags = tagsLine;'
        ? tagsLine;
            .split(',').map(t => { return t.trim()).filter(Boolean): []; }'
    }let "saved": any = null;
    if (supabase) {const { data, error } = await supabase;
        .from('quote_requests').insert({service,description,"timeline_start": timeline?.start || null,"timeline_end": timeline?.end || null,"budget_range": budgetRange || null,email,"ai_summary": aiSummary,"ai_tags": aiTags,"status": 'new'}).select('*').single()if (error) throw error;'
      saved = data;
        .status (200);
        .json ({ ok: true, summary: ai_summary, tags: ai_tags, id: saved?.id });
    } catch (e: any) {
      console.error ("quote - request error", e);
      return res.status (500).json ({ message: "Server error" });
    }
<<<<<<< HEAD
    return res.status (500).json ({ message: "Server error" });
=======

return res;
      .status(200)
      .json({ "ok": true, "summary": aiSummary, "tags": aiTags, "id": saved?.id
});
  } catch ("e": any) {
    }
    console.error('quote-request error', e);'
return res.status(500).json({ "message": 'Server error',;'
});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }



<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(200).json({ ok: true, summary: aiSummary, tags: aiTags, id: saved?.id })
  } catch (e: any) {
    console.error('quote-request error', e);
    return res.status(500).json({ message: 'Server error' })
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  }
}