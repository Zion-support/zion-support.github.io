import OpenAI from 'openai';






import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
;
export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {;
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}


  return completion.output_text;
}


>>>>>>> origin/feature/merge-conflicts-and-improvements

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



  return completion.output_text;
}

