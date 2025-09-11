

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });


}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}

  return completion.output_text;
}

type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey })
}
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
Company: ${opts.company |'Confidential'}
Location: ${opts.location |'Remote'}
Key skills: ${(opts.tags |[]).join() |'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini'
    input: prompt
});
=======
=======

=======import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}

  return completion.output_text;
}

==============
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
=======