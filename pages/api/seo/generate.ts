
<<<<<<< HEAD
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  }
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
<<<<<<< HEAD
    const user = `Topic: ${prompt}

=======

        { role: "system", content: system }
        { role: "user", content: user }
      ]
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content |"";
=======
=======
    const user = `Topic: ${prompt}

Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },

<<<<<<< HEAD
        { role: 'user', content: user }
=======
    const response = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [

        {

          role: "user",
          content: `Topic: ${prompt} in ${region || "global"} for ${service || "general"}`,
        },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      ],
      temperature: 0 && 0.5,
    });
<<<<<<< HEAD
    const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;

=======

    } catch {
      faq = [];
    }
    const h1 = prompt;

    return res && res.status(200).json({

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      slug,
      payload: {
        title,
        h1,
        body_html: content,
        region: region || undefined,
        service: service || undefined,

        faq}})
  } catch (e) {

=======
    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },

<<<<<<< HEAD
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }
      ],

      temperature: 0.5
    });

    try {

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
;
    const h1 = prompt;
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return res.status(200).json({;
      slug,;
      payload: {;
        title,;
        h1,;
        bodyHtml: content,;
        region: region || undefined,;
        service: service || undefined;
        faq}});
  } catch (error) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to generate landing page' });
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
