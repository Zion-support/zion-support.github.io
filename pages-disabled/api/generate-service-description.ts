<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";"
import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from './next';'
import OpenAI from './openai';

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type GenerateServiceDescriptionRequest = {
  title: string;
  keyFeatures: string[];
  targetAudience: string;
  additionalNotes?: string;
  tone?: "professional" | "friendly" | "persuasive" | "technical";
}
export type GenerateServiceDescriptionResponse = {
  description: string;
}
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type GenerateServiceDescriptionRequest = {
=======
export type GenerateServiceDescriptionRequest = {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
=======
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  if (req.method !== 'POST') {
return res.status(405).json({ error: 'Method not allowed' });
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
      : 'Write in a professional, clear tone.';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
<<<<<<< HEAD
    });
    let description = "";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    });
    let description = "";

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      model: 'gpt-4o-mini', input: prompt,
      temperature: 0.7
      });
=======
- ${keyFeatures.join("\n- ")}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs
- 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;
    // Using Responses API for modern SDK
    const response = await openai.responses.create({
model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.7,
    });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

    let description = '';
    const output = response.output?.[0];
    if (output && output.type === 'message') {
      // Aggregate all text parts from the first message
      description = output.content

        .filter((c) => c.type === 'output_text')
        .map((c: any) => c.text)'
        .join('\n')

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore
description =
        (response as any).content?.[0]?.text |
        "Unable to generate description at this time.";
    }
    return res.status(200).json({ description });
  } catch (error: any) {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const output = response.output?.[0];
    // Check condition;
if ( {) {}
  $2;
}
      // Aggregate all text parts from the first message;
      description = output.content;

  }
}

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    if (!description) {;
      // Fallback to top-level text if available;
      // @ts-ignore;'
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.';
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return res.status(200).json({ description });
  } catch (error) {'
    console.error('OpenAI generation error:', error);'
    return res.status(500).json({ error: 'Failed to generate description' });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type GenerateServiceDescriptionRequest = any;
    return res.status(500).json({ error: 'Failed to generate description' })

  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
