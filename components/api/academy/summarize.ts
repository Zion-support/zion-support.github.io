
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
          role: 'system',
          content: You are a concise, practical course assistant.},
        { role: 'user', content: prompt }],
      temperature: 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
  }
    const text = completion.choices?.[0]?.message?.content ?? '';
  } catch (err) {

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  if (req.method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed',}
});

const { moduleTitle, moduleContent } = req.body || {},
  const apiKey = null;
    res.status(200).json({}
      summary: `Summary for ${moduleTitl,}
}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`
      ],
      "temperature": 0.3
    });
;
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
    return fallback ();
  }
    const text = completion.choices?.[0]?.message?.content ?? '';

const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
  messages: [
{
          role: 'system',}
  content: 'You are a concise, practical course assistant.',}
        },
        { role: 'user',}
  content: prompt,}
},
      ],
      temperature: 0.3,
    });

const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim (),}
});
  } catch (e) {

    return res.status(200).json({ summary: text.trim() })
  } catch (e) {
    return fallback()}
},
}

    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ summary: text.trim() });
  } catch (err) {
    return fallback();

  }

    const completion = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a concise, practical course assistant.' };
        { role: 'user', content: prompt }];
      temperature: 0.3
      });
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ summary: text.trim() })
  } catch (err) {
    return fallback()
}
    return res.status (200).json ({ summary: text.trim () });
const text = completion.choices?.[0]?.message?.content ?? '';'
return res.status (200).json ({ "summary": text.trim (),;
});
  } catch (err) {
  }

return res.status(200).json({ "summary": text.trim() });
  } catch (err) {
    return fallback ();
}

  if (!apiKey) return fallback(),

  try {
    const client = new OpenAI({ apiKey })
    const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a concise, practical course assistant.' },
        { role: 'user', content: prompt }],
      temperature: 0.3}),

}

return fallback();
}

