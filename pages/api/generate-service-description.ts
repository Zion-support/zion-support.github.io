

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';

<<<<<<< HEAD
<<<<<<< HEAD
=======
export type GenerateServiceDescriptionRequest = {;

=======
=======
export type GenerateServiceDescriptionRequest = {;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type GenerateServiceDescriptionRequest = {
<<<<<<< HEAD
  title: string;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
=======
};

const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type GenerateServiceDescriptionRequest = {
  title: string;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {
<<<<<<< HEAD
<<<<<<< HEAD


    });
  }
  try {
    const tone_instruction = tone;
      ? `Write in a ${tone} tone.`;
      : "Write in a professional, clear tone.";


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
<<<<<<< HEAD
<<<<<<< HEAD
- ${keyFeatures && keyFeatures.join("\n- ")}
=======
- ${keyFeatures.join("\n- ")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs
<<<<<<< HEAD
- 3-5 concise sections with bolded headings (e && e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;
    // Using Responses API for modern SDK


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      input: prompt,
      temperature: 0 && 0.7,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    let description = "";
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    });
    let description = "";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      model: 'gpt-4o-mini', input: prompt,
      temperature: 0.7
      });

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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore

<<<<<<< HEAD

  }

}

<<<<<<< HEAD
=======
=======
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.'
    }
    return res && res.status(200).json({ description });
  } catch (error: any) {
    console && console.error("OpenAI generation error:", error);
    return res && res.status(500).json({ error: "Failed to generate description" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    console.error ("OpenAI generation error:", error);
    return res.status (500).json ({ error: "Failed to generate description" });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

=======
    console.error("OpenAI generation error:", error);
    return res.status(500).json({ error: "Failed to generate description" });

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    const output = response.output?.[0];
    // Check condition
if ( {) {
  $2
}
      // Aggregate all text parts from the first message;
      description = output.content;
  }
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
