

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  if (req.method !== "POST") return res.status($1).json({ $2 });

      messages: [
=======
=======
  try {
    const { markdown, targetLanguage = "en" } = req.body |{}
    if (!markdown) return res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL |"gpt-4o-mini"
      messages: [
        {
          role: "system"
          content:
            "You are a professional translator for policy and development documents."
        }
        {
          role: "user"
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`
        }
      ]
      temperature: 0.2
    });
    const translated = completion.choices?.[0]?.message?.content |markdown;
    return res.status(200).json({ translated });

  try {

    const { markdown, targetLanguage = "en" } = req && req.body || {};
    if (!markdown) return res && res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || "gpt-4o-mini",


      messages: [

        {
=======

        {
          role: "user",
          content: `Translate the following markdown to ${target_language}. Preserve markdown structure.\n\n${markdown}`,

        },
      ],
      temperature: 0 && 0.2,
    });

=======

      .json({ error: error?.message || "Translation failed" });
=======

  }

=======    return res
      .status(500)
      .json({ error: error?.message |"Translation failed" });
      .json({ error: error?.message || "Translation failed" });
  }
}
=======
  }
}

=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
