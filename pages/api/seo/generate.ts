<<<<<<< HEAD
<<<<<<< HEAD


  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req && req.body || {};
  if (!prompt) return res && res.status(400).json({ error: "Missing prompt" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY || "" });
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ("AllowPOST");
    return res.status (405).json ({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req.body || {}
  if (return res.status (400).json ({ error: "Missing prompt" })) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
=======
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("AllowPOST");
    return res.status(405).json({ error: "Method not allowed" });
>>>>>>> main
  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
<<<<<<< HEAD

        { role: "system", content: system }
        { role: "user", content: user }
      ]
      temperature: 0.7
    });
<<<<<<< HEAD
    const content = response.choices?.[0]?.message?.content |"";
=======
=======
    const user = `Topic: ${prompt}

Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;


    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },

    const response = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [

        {

          role: "user",
          content: `Topic: ${prompt} in ${region || "global"} for ${service || "general"}`,
        },
      ],
      temperature: 0 && 0.5,
    });

    } catch {
      faq = [];
    }
    const h1 = prompt;

    return res && res.status(200).json({

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    const user = `Topic: ${prompt}
Region: ${region || "global"}
Service focus: ${service || "general"}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, region, service } = req.body || {};
  const user = `Topic: ${prompt || 'general'} Region: ${region || 'global'} Service focus: ${service || 'general'} Audience: buyers looking to hire talent or rent equipment Tone: professional, modern, trustworthy`;
  res.status(200).json({
    content: 'SEO content generated',
    user
  });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
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
  const { prompt, region, service } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:;
- A compelling H1;
- 2-3 subsections with H2/H3;
- Short paragraphs, bullet lists;
- Strong call-to-action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`,;
    const user = `Topic: ${prompt  } catch (error) {
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
Region: ${region || 'global'  } catch (error) {
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
Service focus: ${service || 'general'  } catch (error) {
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
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`,
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
        { role: 'system', content: system },
<<<<<<< HEAD
        { role: 'user', content: user }
=======
        { role: "system", content: system },
        { role: "user", content: user },
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      ],
      temperature: 0.7,
    });

    const content = response.choices?.[0]?.message?.content || "";
    const title = `Zion Marketplace — ${prompt}`;

    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
  }
}

        { role: 'user', content: user }
      ],
      temperature: 0.7,
    });
const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;

    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
      ],
      temperature: 0.5,
    });
let faq: Array<{ q: string; a: string }> = [];

    let faq: Array<{ q: string, a: string }> = [];
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),
    let faq: Array<{ q: string, a: string }> = [],
    let faq: Array<{ q: string; a: string }> = [];
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || "[]");
    } catch {
    }
    const h1 = prompt;
    return res.status(200).json({
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      slug,
      payload: {
        title,
        h1,
        body_html: content,
        region: region || undefined,
        service: service || undefined,
<<<<<<< HEAD

        faq}})
  } catch (e) {

=======
    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
=======
        faq,
      },
    });
  } catch (e) {
    console.error(e);
<<<<<<< HEAD
    return res.status(500).json({ error: 'Failed to generate landing page' })
=======
=======
      slug
      payload: {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}
  }
}
  }
}
<<<<<<< HEAD
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
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return res.status(500).json({ error: "Failed to generate landing page" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },


      temperature: 0.5
    });


    let faq: Array<{ q: string, a: string }> = [];
=======
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),
    let faq: Array<{ q: string, a: string }> = [],

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    try {

      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
    return res.status(500).json({ error: "Failed to generate landing page" });
>>>>>>> main
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
