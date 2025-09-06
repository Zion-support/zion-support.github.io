<<<<<<< HEAD


<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
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

import OpenAI from 'openai';

type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
<<<<<<< HEAD
<<<<<<< HEAD


  return completion.output_text;
}

=======
Company: ${opts && opts.company || 'Confidential'}
Location: ${opts && opts.location || 'Remote'}
Key skills: ${(opts && opts.tags || []).join() || 'N/A'}
=======
Key skills: ${(opts.tags || []).join() || 'N/A'};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
<<<<<<< HEAD
  });
  return completion && completion.output_text;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
=======
Key skills: ${(opts.tags || []).join() || 'N/A'};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
    input: prompt;
});
<<<<<<< HEAD
  return completion.output_text;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
});
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
  return completion.output_text;
}

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey })
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
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });


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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
