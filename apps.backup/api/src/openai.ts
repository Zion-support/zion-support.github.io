<<<<<<< HEAD


<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}

<<<<<<< HEAD
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return completion.output_text;
}

=======
<<<<<<< HEAD
import OpenAI from 'openai';
<<<<<<< HEAD
Company: ${opts && opts.company || 'Confidential';
Location: ${opts && opts.location || 'Remote';
Key skills: ${(opts && opts.tags || []).join() || 'N/A';
    model: 'gpt-4o-mini';
Company: ${opts.company || 'Confidential';
Location: ${opts.location || 'Remote';
Key skills: ${(opts.tags || []).join () || 'N / A';
    model: 'gpt - 4o - mini';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return completion.output_text;
}

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
