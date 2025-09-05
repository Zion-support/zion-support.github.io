import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const { type = 'launch', _companyName = 'Zion', _date = new Date().toISOString().substring(0, _10), _raiseAmount, _tokenName} = req.body || {};

    const _apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {_try {
        const { OpenAI} = await import('openai');
        const _client = new OpenAI({_apiKey});
        const _prompt = `Write a concise ${_type} press release for ${_companyName} (date ${_date}) with clear headlines, 2 paragraphs, and one quote.`;
        const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
            { role: 'system', _content: 'You are a seasoned tech PR writer.'},
            {_role: 'user', _content: prompt}
          ],
          temperature: 0.4,
          max_tokens: 500});
        const _text = completion.choices?.[0]?.message?.content?.trim();
        if (text) {_res.status(200).json({ ok: true, _text});
          return;
        }
      } catch (_) {_// fall through to template}
    }

    const _text = buildPressRelease(type, {_companyName, _date, _raiseAmount, _tokenName} as any);
    res.status(200).json({_ok: true, _text, _fallback: true});
  } catch (e: unknown) {_res.status(500).json({ ok: false, _error: e?.message || 'Unknown error'});
  }
}