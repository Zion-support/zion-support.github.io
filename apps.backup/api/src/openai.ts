<<<<<<< HEAD
import OpenAI from 'openai',
type OpenAIClient = OpenAI,

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
}
=======
import OpenAI from 'openai';

export function createOpenAIClient(_apiKey: string) {_return new OpenAI({ apiKey});
}

export async function generateText(_openai: OpenAI, _role: string, _opts: unknown) {_const _completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', _messages: [{ role, _content: opts.prompt}],
    ...opts
  });
  
  return completion.choices[0]?.message?.content || '';
}

export async function generateJobPost(_openai: OpenAI, _role: string, _body: unknown) {_const _prompt = `Generate a job posting for a ${role} position. Include requirements, responsibilities, and benefits.`;
  return await generateText(openai, 'user', {_prompt});
}

export async function withUser(_userId: string | null, _fn: (client: unknown) => Promise<any>) {_// Mock implementation - in real app this would use database connection
  const _mockClient = {
    query: async (_sql: string, _params: unknown[]) => {
      console.log('Mock query:', _sql, _params);
      return { rows: []};
    }
  };
  return await fn(mockClient);
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
