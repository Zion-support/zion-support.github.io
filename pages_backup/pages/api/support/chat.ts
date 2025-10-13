import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { readJson } from "../../../utils/fsDb";
import { HelpArticle, matchIntent } from "../../../utils/support";
import { logSupportEventToOperator } from "../../../utils/operator";";
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;
export default async function handler(
  // TODO: Add parameters
)
  req: NextApiRequest
  res: NextApiResponse
) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== ")"
    return res.status(405).json({ error: " });";
const { sessionId, messages } = req.body as {
  // TODO: Add properties
}
  // TODO: Add properties
}
    sessionId?: string
    messages: Array<{ role: " | "assistant"system"; content: string }>"messages required" });"help/articles.json", []);"user");"I could not reach the assistant right now. Please try again in a moment.""messages required" });"help / articles.json", []);"user");"\n");"system" as const,""),"gpt - 4 o - mini","Let me know how I can help.""chat_completion","unknown","
      payload: { intent },
    })
    return res.status (200).json ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      assistant_message,
      meta: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        intentMatched: intent.intentMatched,
        matchedArticleIds: intent.matchedArticleIds,
        links: matched_articles.map ((a) => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
          title: a.title,
          href: `/help/${a.slug}`,
        })),
      },
    })
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
}}}