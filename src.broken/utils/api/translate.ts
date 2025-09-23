import OpenAI from 'openai';

export type SupportedProvider = 'openai' | 'deepl' | 'none';

const provider: SupportedProvider = (process.env.TRANSLATION_PROVIDER as SupportedProvider) || (process.env.OPENAI_API_KEY ? 'openai' : process.env.DEEPL_API_KEY ? 'deepl' : 'none');

let openai: OpenAI | null = null;
if (provider === 'openai') {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

async function translateWithOpenAI(text: string, to: string, from?: string): Promise<string> {
  if (!openai) throw new Error('OpenAI not configured');
  const system = 'You translate text. Respond with only the translated content without extra commentary.';
  const user = `Translate to ${to}.${from ? ` Source language is ${from}.` : ''}\n\n${text}`;
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: system },
