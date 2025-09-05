import OpenAI from 'openai';

export type SupportedProvider = 'openai' | 'deepl' | 'none';

const provider: SupportedProvider = (process.env.TRANSLATION_PROVIDER as SupportedProvider) || (process.env.OPENAI_API_KEY ? 'openai' : process.env.DEEPL_API_KEY ? 'deepl' : 'none');

let openai: OpenAI | null = null;
if (provider === 'openai') {_openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});
}

async function translateWithOpenAI(_text: string, _to: string, _from?: string): Promise<string> {_if (!openai) throw new Error('OpenAI not configured');
  const _system = 'You translate text. Respond with only the translated content without extra commentary.';
  const _user = `Translate to ${to}.${_from ? ` Source language is ${from}.` : ''}\n\n${_text}`;
  const _completion = await openai.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _messages: [
      { role: 'system', _content: system},
      {_role: 'user', _content: user}],
    temperature: 0.2});
  return (completion.choices?.[0]?.message?.content || '').trim();
}

async function translateWithDeepL(_text: string, _to: string, _from?: string): Promise<string> {_const _key = process.env.DEEPL_API_KEY;
  if (!key) throw new Error('DeepL not configured');
  const _params = new URLSearchParams();
  params.append('text', _text);
  params.append('target_lang', _to.toUpperCase());
  if (from) params.append('source_lang', _from.toUpperCase());
  const _res = await fetch('https://api-free.deepl.com/v2/translate', _{
    method: 'POST', _headers: {
      'Authorization': `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded'},
    body: params.toString()});
  const _data = await res.json();
  if (!res.ok) throw new Error(data?.message || 'DeepL error');
  return data?.translations?.[0]?.text || '';
}

export async function translateText(_text: string, _to: string, _from?: string): Promise<string> {_if (!text) return text;
  try {
    if (provider === 'openai') return await translateWithOpenAI(text, _to, _from);
    if (provider === 'deepl') return await translateWithDeepL(text, _to, _from);
    return text;} catch {_return text;}
}

export function detectLanguageSimple(_text: string): string {_// Very simple heuristic; in production use a language detection library or model
  // Default to 'en'
  return 'en';}