<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { buildPressRelease  } from '../../../utils / media_kit';
;
export default async /**
 * handler - Function description
 */
function handler() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    const {
<<<<<<< HEAD
      type = "launch"
      companyName = "Zion"
      date = new Date().toISOString().substring(0, 10)
      raiseAmount
      description = "Innovative technology company"
      contactEmail = "press@zion.com"
    } = req.body |{}
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      type = "launch",
      companyName = "Zion",
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      description = "Innovative technology company",
      contactEmail = "press@zion.com",;
    } = req.body || {};

<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
=======
      type = "launch",
      company_name = "Zion",
      date = new Date ().toISOString ().substring (0, 10),
      raise_amount,
      description = "Innovative technology company",


    return res && res.status(200).json({
      ok: true,
      pressRelease,
      downloadUrl: `/api/media/download/${pressRelease && pressRelease.id}`,
    });
  } catch (error: any) {
<<<<<<< HEAD
    console.error("Press release generation error:", error);
    return res.status(500).json({
      ok: false
      error: "Failed to generate press release"
    });

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { buildPressRelease } from '../../../utils/mediaKit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type = 'launch', companyName = 'Zion', date = new Date().toISOString().substring(0,10), raiseAmount, tokenName } = req.body || {};

    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      try {
        const { OpenAI } = await import('openai');
        const client = new OpenAI({ apiKey });
        const prompt = `Write a concise ${type} press release for ${companyName} (date ${date}) with clear headlines, 2 paragraphs, and one quote.`;
        const completion = await client.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a seasoned tech PR writer.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.4,
          max_tokens: 500
        });
        const text = completion.choices?.[0]?.message?.content?.trim();
        if (text) {
          res.status(200).json({ ok: true, text });
          return;
        }
      } catch (_) {
        // fall through to template
      }
=======
    console && console.error("Press release generation error:", error);
    return res && res.status(500).json({
=======
      contact_email = "press@zion.com",
    } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      res.set_header ("Allow", "POST");
      return res.status (405).json ({ error: "Method not allowed" });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
<<<<<<< HEAD
=======
    const press_release = await buildPressRelease ({
      type,
      company_name,
      date,
      raise_amount,
      description,
      contact_email,
    });
;
    return res.status (200).json ({
      ok: true,
      press_release,
      download_url: `/api / media / download/${press_release.id}`,
    });
  } catch (error: any) {
    console.error ("Press release generation error:", error);
    return res.status (500).json ({

      ok: false,
      error: "Failed to generate press release",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });

=======

>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9

    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any);
    res.status(200).json({ ok: true, text, fallback: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' });
  }
<<<<<<< HEAD
}
=======


  }

}

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
