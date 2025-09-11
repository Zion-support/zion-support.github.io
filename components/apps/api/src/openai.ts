import OpenAI from 'openai';


export function createOpenAIClient(apiKey: string): OpenAIClient {;


  return new OpenAI({ apiKey });


}



  return completion.output_text
}
}

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
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
    input: prompt,
  });
  return completion.output_text;Key skills: ${(opts.tags || []).join () || 'N / A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini';
    input: prompt;
  });
  return completion.output_text;
}

}



