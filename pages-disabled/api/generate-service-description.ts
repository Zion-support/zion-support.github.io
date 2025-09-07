<<<<<<< HEAD:pages/api/generate-service-description.ts
=======
import type { NextApiRequest, NextApiResponse } from "next";"
import OpenAI from "openai";

import type { NextApiRequest, NextApiResponse } from './next';'
import OpenAI from './openai';

>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/generate-service-description.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:pages/api/generate-service-description.ts
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement generateservicedescription logic
    res.status(200).json({ message: 'generateservicedescription endpoint' });
  } catch (error) {
    console.error('Error in generateservicedescription:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${req.body?.title || 'Service'} Target Audience: ${req.body?.targetAudience || 'General'} Key Features: - ${req.body?.keyFeatures?.join('\n- ') || 'Feature 1'} ${req.body?.additionalNotes ? `Additional Notes: ${req.body.additionalNotes}` : ''} ${req.body?.toneInstruction || ''} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  res.status(200).json({ description: 'Service description generated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type GenerateServiceDescriptionRequest = {

  title: string;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {

    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.
Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:

    });
    let description = "";

${additionalNotes ? `Additional Notes: ${additionalNotes}` : ""}
${toneInstruction}
Requirements:
- 2-3 sentence hook opening that addresses audience needs

      model: 'gpt-4o-mini', input: prompt,

      temperature: 0.7
      });

    let description = '';
    const output = response.output?.[0];
    if (output && output.type === 'message') {
      // Aggregate all text parts from the first message
      description = output.content

        .filter((c) => c.type === 'output_text')
        .map((c: any) => c.text)'
        .join('\n')

    }
    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore

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

  }
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/generate-service-description.ts
}