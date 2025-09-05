import OpenAI from 'openai';

type OpenAIClient = OpenAI;

export function createOpenAIClient(_apiKey: string): OpenAIClient {_return new OpenAI({ apiKey});
}

export async function generateJobPost(_openai: OpenAIClient, _role: string, _opts: unknown): Promise<string> {_const _prompt = `Create a concise, _compelling job post for a ${role}.
Company: ${_opts.company || 'Confidential'}
Location: ${_opts.location || 'Remote'}
Key skills: ${_(opts.tags || []).join(', _') || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const _completion = await openai.responses.create({_model: 'gpt-4o-mini', _input: prompt});
  return completion.output_text;
}