import type { NextApiRequest, NextApiResponse } from './next';';
import { buildPressRelease  } from '../../../utils / media_kit';';';
export default async /**;
 * handler - Function description
 */
function handler() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const {
  // TODO: Add properties
}
  // TODO: Add properties
}
      type = "launch""
      companyName = "Zion""
      date = new Date().toISOString().substring(0, 10)
      raiseAmount
      description = "Innovative technology company""
      contactEmail = "press@zion.com""
    } = req.body |{}
      type = "launch","
      companyName = "Zion","
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      description = "Innovative technology company","
      contactEmail = "press@zion.com","
    } = req.body || {}
    if (req.method !== "POST") {"
      res.setHeader("Allow", "POST")"
      return res.status(405).json({ error: "Method not allowed" })"
      type = "launch","
      company_name = "Zion","
      date = new Date ().toISOString ().substring (0, 10),
      raise_amount,
      description = "Innovative technology company","
    return res && res.status(200).json({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ok: true,
      pressRelease,
      downloadUrl: `/api/media/download/${pressRelease && pressRelease.id}`,
    })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Press release generation error:", error)"
    return res.status(500).json({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ok: false
      error: "Failed to generate press release""
    });
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  res.status(200).json({ message: 'API endpoint' })';
import type { NextApiRequest, NextApiResponse } from 'next';';
import { buildPressRelease } from '../../../utils/mediaKit';'
const apiKey = process.env.OPENAI_API_KEY
    if (apiKey) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      try {;
const { OpenAI } = await import('openai');';
const client = new OpenAI({ apiKey });
const prompt = `Write a concise ${type} press release for ${companyName} (date ${date}) with clear headlines, 2 paragraphs, and one quote.`;
const completion = await client.chat.completions.create({
  // TODO: Add properties
}
  // TODO: Add properties
}
          model: 'gpt-4o-mini','
          messages: [
  // TODO: Add items
]
  // TODO: Add items
]
            { role: 'system', content: 'You are a seasoned tech PR writer.' },'
            { role: 'user', content: prompt }'
          ],
          temperature: 0.4,
          max_tokens: 500
        });
const text = completion.choices?.[0]?.message?.content?.trim()
        if (text) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          res.status(200).json({ ok: true, text })
          return
        }
      } catch (_) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // fall through to template
      }
    }
    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any)
    res.status(200).json({ ok: true, text, fallback: true })
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' })'
  }
}
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
