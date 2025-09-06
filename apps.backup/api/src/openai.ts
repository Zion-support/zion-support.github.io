import OpenAI from 'openai';
<<<<<<< HEAD
type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join() || 'N/A'};
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
});
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
  return completion.output_text;
}
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return completion.output_text;
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
