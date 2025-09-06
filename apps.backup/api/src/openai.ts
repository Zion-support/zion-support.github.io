<<<<<<< HEAD
import OpenAI from 'openai';

<<<<<<< HEAD
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
<<<<<<< HEAD
<<<<<<< HEAD
Key skills: ${(opts.tags || []).join() || 'N/A'};
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
});
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
  return completion.output_text;
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey })
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
<<<<<<< HEAD
=======
<<<<<<< HEAD
Key skills: ${(opts.tags || []).join() || 'N/A'};
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
});
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return completion.output_text;
}

Company: ${opts && opts.company || 'Confidential'}
Location: ${opts && opts.location || 'Remote'}
Key skills: ${(opts && opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
  });
  return completion && completion.output_text;
}
type OpenAIClient = OpenAI;
;
export function createOpenAIClient (api_key: string): OpenAIClient {
  return new OpenAI ({ api_key });
}
export async function generateJobPost (openai: OpenAIClient, role: string, opts: any): Promise < string> {
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join () || 'N / A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
    input: prompt;
});
  return completion.output_text;
}
