=======


import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';

export type GenerateServiceDescriptionRequest = {
  title: string;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
};
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


  title: string;
  keyFeatures: string[];
  targetAudience: string;
  additionalNotes?: string;

<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {

    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:

${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore


  }

}

  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
