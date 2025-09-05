import OpenAI from 'openai',
type OpenAIClient = OpenAI,

<<<<<<< HEAD
export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey })
}

export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
  }),
  return completion.output_text
=======
export function createOpenAIClient(_apiKey: string): OpenAIClient {_return new OpenAI({ apiKey});
}

export async function generateJobPost(_openai: OpenAIClient, _role: string, _opts: unknown): Promise<string> {_const _prompt = `Create a concise, _compelling job post for a ${role}.
Company: ${_opts.company || 'Confidential'}
Location: ${_opts.location || 'Remote'}
Key skills: ${_(opts.tags || []).join(', _') || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const _completion = await openai.responses.create({_model: 'gpt-4o-mini', _input: prompt});
  return completion.output_text;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}