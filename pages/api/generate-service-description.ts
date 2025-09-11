

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';

<<<<<<< HEAD
<<<<<<< HEAD
export type GenerateServiceDescriptionRequest = {;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
export type GenerateServiceDescriptionRequest = {;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';


export type GenerateServiceDescriptionRequest = {
  title: string;


import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';
export type GenerateServiceDescriptionRequest = {
  title: string;
  key_features: string[];
  target_audience: string;
  additional_notes?: string;
  tone?: "professional" | "friendly" | "persuasive" | "technical";
}
export type GenerateServiceDescriptionResponse = {
  description: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type GenerateServiceDescriptionRequest = {
<<<<<<< HEAD
  title: string, keyFeatures: string[],
  targetAudience: string, additionalNotes?: string,
  tone?: 'professional' | 'friendly' | 'persuasive' | 'technical'
};
export type GenerateServiceDescriptionResponse = {
  description: string
};
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
};
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
=======
  title: string;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
};
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
=======
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
=======
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
export type GenerateServiceDescriptionRequest = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type GenerateServiceDescriptionRequest = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  title: string;
  keyFeatures: string[];
  targetAudience: string;
  additionalNotes?: string;
<<<<<<< HEAD
  tone?: "professional" | "friendly" | "persuasive" | "technical";
<<<<<<< HEAD
}
export type GenerateServiceDescriptionResponse = {
  description: string;
}
=======
};
export type GenerateServiceDescriptionResponse = {;
  description: string;
};

const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export type GenerateServiceDescriptionRequest = {
  title: string;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
=======
};

const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { title, keyFeatures, targetAudience, additionalNotes, tone } = req.body as GenerateServiceDescriptionRequest;
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' })
  }
  if (!title || !Array.isArray(keyFeatures) || keyFeatures.length === 0 || !targetAudience) {
    return res.status(400).json({ error: 'Missing required fields: title, keyFeatures, targetAudience' })
  }
  try {
    const toneInstruction = tone ? `Write in a ${tone} tone.` : 'Write in a professional, clear tone.';
  if (req.method !== "POST") {;
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { title, keyFeatures, targetAudience, additionalNotes, tone } =
    req.body as GenerateServiceDescriptionRequest;
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OpenAI API key not configured" });
  }
  if (
    !title |
    !Array.isArray(keyFeatures) |
    keyFeatures.length === 0 |
    !targetAudience
  ) {
    return res.status(400).json({
      error: "Missing required fields: title, keyFeatures, targetAudience"
    });
  }
  try {
    const toneInstruction = tone
      ? `Write in a ${tone} tone.`
      : "Write in a professional, clear tone.";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    });
  }
  try {
    const tone_instruction = tone;
      ? `Write in a ${tone} tone.`;
      : "Write in a professional, clear tone.";


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
<<<<<<< HEAD
- ${keyFeatures.join("\n- ")}
=======
- ${keyFeatures && keyFeatures.join("\n- ")}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs
<<<<<<< HEAD
<<<<<<< HEAD
    const response = await openai && openai.responses.create({
      model: "gpt-4o-mini",
    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.;
Service Title: ${title}
Target Audience: ${target_audience}
Key Features:;
- ${key_features.join ("\n- ")}
${additional_notes ? `Additional Notes: ${additional_notes}` : ""}
${tone_instruction}
Requirements:;
- 2 - 3 sentence hook opening that addresses audience needs;
- 3 - 5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline);
- Use clear, benefit - focused language;
- End with a short call to action`;
    // Using Responses API for modern SDK;
    const response = await openai.responses.create ({
      model: "gpt - 4o - mini",
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
- 3-5 concise sections with bolded headings (e && e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;
    // Using Responses API for modern SDK


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      input: prompt,
      temperature: 0 && 0.7,
    });
    let description = "";
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      model: 'gpt-4o-mini', input: prompt,
      temperature: 0.7
      });
=======
      input: prompt,
      temperature: 0 && 0.7,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    let description = "";

=======
      model: 'gpt-4o-mini', input: prompt,
      temperature: 0.7
      });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let description = '';
    const output = response.output?.[0];
    if (output && output.type === 'message') {
      // Aggregate all text parts from the first message
      description = output.content
        .filter((c) => c.type === 'output_text')
        .map((c: any) => c.text)
        .join('\n')
<<<<<<< HEAD
<<<<<<< HEAD
- 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;
    // Using Responses API for modern SDK
    const response = await openai.responses.create({
      model: "gpt-4o-mini"
      input: prompt
      temperature: 0.7
    });
    let description = "";
    const output = response.output?.[0];
    if (output && output.type === "message") {
      // Aggregate all text parts from the first message
      description = output.content
        .filter((c) => c.type === "output_text")
        .map((c: any) => c.text)
        .join("\n");
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore


<<<<<<< HEAD
  }

}

<<<<<<< HEAD
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.'
    }
    return res && res.status(200).json({ description });
  } catch (error: any) {
    console && console.error("OpenAI generation error:", error);
    return res && res.status(500).json({ error: "Failed to generate description" });
  }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  tone?: 'professional' | 'friendly' | 'persuasive' | 'technical';
};
export type GenerateServiceDescriptionResponse = {
  description: string;
};
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const output = response.output?.[0];
    // Check condition
if ( {) {
  $2
}
      // Aggregate all text parts from the first message;
      description = output.content;
        .filter ((c) => c.type === "output_text");
        .map ((c: any) => c.text);
        .join ("\n");
    }
    // Check condition
if ( {) {
  $2
}
      // Fallback to top - level text if available;
      // @ts - ignore;
      description =;
        (response as any).content?.[0]?.text ||;
        "Unable to generate description at this time.";
    }
    return res.status (200).json ({ description });
  } catch (error: any) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error("OpenAI generation error:", error);
    return res.status(500).json({ error: "Failed to generate description" });

  tone?: 'professional' | 'friendly' | 'persuasive' | 'technical';
};
export type GenerateServiceDescriptionResponse = {
  description: string;
};
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { title, keyFeatures, targetAudience, additionalNotes, tone } = req.body as GenerateServiceDescriptionRequest;
  if (!process.env.OPENAI_API_KEY) {;
    return res.status(500).json({ error: 'OpenAI API key not configured' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (!title || !Array.isArray(keyFeatures) || keyFeatures.length === 0 || !targetAudience) {;
    return res.status(400).json({ error: 'Missing required fields: title, keyFeatures, targetAudience' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const toneInstruction = tone ? `Write in a ${tone} tone.` : 'Write in a professional, clear tone.',;
    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.;
Service Title: ${title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
Target Audience: ${targetAudience  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
Key Features:;
- ${keyFeatures.join('\n- ')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
${toneInstruction  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
Requirements:;
- 2-3 sentence hook opening that addresses audience needs;
- 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline);
- Use clear, benefit-focused language;
- End with a short call to action`,;
    // Using Responses API for modern SDK;
    const response = await openai.responses.create({;
      model: 'gpt-4o-mini';
      input: prompt;
      temperature: 0.7});
    let description = '';
    const output = response.output?.[0];
    if (output && output.type === 'message') {;
      // Aggregate all text parts from the first message;
      description = output.content;
        .filter((c) => c.type === 'output_text');
        .map((c: any) => c.text);
        .join('\n');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
    console.error ("OpenAI generation error:", error);
    return res.status (500).json ({ error: "Failed to generate description" });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console.error ("OpenAI generation error:", error);
    return res.status (500).json ({ error: "Failed to generate description" });
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    if (!description) {;
      // Fallback to top-level text if available;
      // @ts-ignore;
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return res.status(200).json({ description });
  } catch (error) {
    console.error('OpenAI generation error:', error);
    return res.status(500).json({ error: 'Failed to generate description' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }
}
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
