import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
=======
import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type GenerateServiceDescriptionRequest = {
  title: string;
  key_features: string[];
  target_audience: string;
  additional_notes?: string;
  tone?: "professional" | "friendly" | "persuasive" | "technical";
}
export type GenerateServiceDescriptionResponse = {
  description: string;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
=======
};

const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {
  if (req && req.method !== "POST") {
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  const { title, keyFeatures, targetAudience, additionalNotes, tone } =
  }
  if (
=======
}
;
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: "Method not allowed" });
  }
  const { title, key_features, target_audience, additional_notes, tone } =;
    req.body as GenerateServiceDescriptionRequest;
;
  // Check condition
if ( {) {
  $2
}
    return res.status (500).json ({ error: "OpenAI API key not configured" });
  }
  // Check condition
if (||) {
  $2
}
    key_features.length === 0 ||;
    !target_audience) {
    return res.status (400).json ({
      error: "Missing required fields: title, key_features, target_audience",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    });
  }
  try {
    const tone_instruction = tone;
      ? `Write in a ${tone} tone.`;
      : "Write in a professional, clear tone.";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
- ${keyFeatures && keyFeatures.join("\n- ")}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs
- 3-5 concise sections with bolded headings (e && e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;
    // Using Responses API for modern SDK
    const response = await openai && openai.responses.create({
      model: "gpt-4o-mini",
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      input: prompt,
      temperature: 0 && 0.7,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    let description = "";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore
      description =
        (response as any).content?.[0]?.text |
        "Unable to generate description at this time.";
    }

=======

    return res && res.status(200).json({ description });
  } catch (error: any) {
    console && console.error("OpenAI generation error:", error);
    return res && res.status(500).json({ error: "Failed to generate description" });
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
    console.error ("OpenAI generation error:", error);
    return res.status (500).json ({ error: "Failed to generate description" });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
