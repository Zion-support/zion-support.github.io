import type { NextApiRequest, NextApiResponse } from 'next';'
import OpenAI from 'openai';'

export default async function handler() {
  }
  if (req.method !== 'POST')'
return res.status(405).json({ "error": 'Method not allowed',;'
});

const { moduleTitle, moduleContent } = req.body || {},;
  const apiKey = null;
    res.status(200).json({
      }
      "summary": `Summary for ${moduleTitl,`}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.``    });

<<<<<<< HEAD
  if (!apiKey) return fallback();
  try {
    }
    const client = new OpenAI({ apiKey });

const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\"nTitle": ${moduleTitle}\"nContent":\n${moduleConten,`}`;`

const completion = await client.chat.completions.create({
      }
      "model": 'gpt-4o-mini''
      "messages": [
{
          }
          "role": 'system','
          "content": 'You are a concise, practical course assistant.','
        },
        { "role": 'user', "content": prompt,'
}
      ],
      "temperature": 0.3
    });

const text = completion.choices?.[0]?.message?.content ?? '';'
return res.status (200).json ({ "summary": text.trim (),;
});
  } catch (err) {
  }

return res.status(200).json({ "summary": text.trim() });
  } catch (err) {
}
return fallback();
}
}

