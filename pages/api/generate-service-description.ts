

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';

=======
export type GenerateServiceDescriptionRequest = {;

=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export type GenerateServiceDescriptionRequest = {
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
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
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
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {


    });
  }
  try {
    const tone_instruction = tone;
      ? `Write in a ${tone} tone.`;
      : "Write in a professional, clear tone.";


    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
<<<<<<< HEAD
- ${keyFeatures && keyFeatures.join("\n- ")}
=======
- ${keyFeatures.join("\n- ")}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs
<<<<<<< HEAD
- 3-5 concise sections with bolded headings (e && e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;
    // Using Responses API for modern SDK


      input: prompt,
      temperature: 0 && 0.7,
    });
    let description = "";

=======
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore


  }

}

=======
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



  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
