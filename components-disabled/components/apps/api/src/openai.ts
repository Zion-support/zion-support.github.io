import OpenAI from 'openai';
<<<<<<< HEAD:components/apps/api/src/openai.ts

type OpenAIClient = OpenAI;
=======
type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {export function createOpenAIClient(apiKey: string): OpenAIClient {type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {export function createOpenAIClient(apiKey: string): OpenAIClient {return new OpenAI({ apiKey })export async function generateJobPost(openai: OpenAIClient;
  role: string;
  opts: any;
): Promise<string> {const prompt = `Create a concise, compelling job post for a ${role}.;
>>>>>>> origin/merge-pr-12271:components-disabled/components/apps/api/src/openai.ts

export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey });
}

export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
<<<<<<< HEAD:components/apps/api/src/openai.ts
Key skills: ${(opts.tags || []).join(', ') || 'N/A'}
=======
Key skills: ${(opts.tags || []).join(', ') || 'N/A'}export function createOpenAIClient(apiKey: string): OpenAIClient {return new OpenAI({ apiKey })Company: ${opts.company |'Confidential'}
Key skills: ${(opts.tags || []).join(', ') || 'N/A'};


export function createOpenAIClient(apiKey: string): OpenAIClient {;


  return new OpenAI({ apiKey });


Company: ${opts.company |'Confidential'}
Location: ${opts.location |'Remote'}
Key skills: ${(opts.tags |[]).join(', ') |'N/A'}
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join(', ') || 'N/A'}Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({model: 'gpt-4o-mini';
    input: prompt;
  })return completion && completion.output_text;
}type OpenAIClient = OpenAI;export function createOpenAIClient (api_key: string): OpenAIClient {return new OpenAI ({ api_key })export async function generateJobPost (openai: OpenAIClient,role: string,opts: any): Promise < string> {const prompt = `Create a concise, compelling job post for a ${role}.;
Key skills: ${(opts.tags || []).join(', ') || 'N/A'};
>>>>>>> origin/merge-pr-12271:components-disabled/components/apps/api/src/openai.ts
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
  });
<<<<<<< HEAD:components/apps/api/src/openai.ts
  return completion.output_text;
}
=======

  return completion && completion.output_text
}

type OpenAIClient = OpenAI;
;
export function createOpenAIClient (api_key: string): OpenAIClient {
  return new OpenAI ({ api_key });
export async function generateJobPost (
  openai: OpenAIClient,
  role: string,
  opts: any): Promise < string> {
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join (', ') || 'N / A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({model: 'gpt - 4o - mini',input: prompt;
    input: prompt;
    input: prompt;
  })return completion.output_text;Key skills: ${(opts.tags || []).join () || 'N / A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({model: 'gpt - 4o - mini';
    input: prompt;
  })return completion.output_text;
}}}ursor/fix-website-loading-errors-and-merge-6662;
  return completion && completion.output_text;
}}return completion.output_text;
}
}}
    model: 'gpt-4o-mini',input: prompt;
  })return completion.output_text;
  return completion.output_text;
}
}

}



  return completion && completion.output_text
}


}




  return completion.output_text
}
}

}
>>>>>>> origin/merge-pr-12271:components-disabled/components/apps/api/src/openai.ts
