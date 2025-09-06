import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';
import { read_json  } from '../../../utils / fs_db';
import { HelpArticle, match_intent  } from '../../../utils / support';
import { logSupportEventToOperator  } from '../../../utils / operator';
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { session_id, messages } = req.body as {
    session_id?: string;
    messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  }
  if ()) {
  $2
}
    return res.status (400).json ({ error: "messages required" });
;
  const articles = read_json < HelpArticle[]>("help / articles.json", []);
  const last_user = [...messages].reverse ().find ((m) => m.role === "user");
  const intent = last_user;
    ? match_intent (last_user.content, articles);
    : { intent_matched: false, matchedArticleIds: [] }
;
  const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
;
  // Build context with top matched articles as brief references;
  const matched_articles = articles.filter ((a) =>;
    intent.matchedArticleIds.includes (a.id),
  );
  const context = matched_articles;
    .map ((a) => `- ${a.title}: /help/${a.slug}`);
    .join ("\n");
;
  const sys_message = {
    role: "system" as const,
    content:;
      SYSTEM_PROMPT + (context ? `\n_relevant help links:\n${context}` : ""),
  }
;
  try {
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [sys_message, ...messages],
      temperature: 0.2,
    });
;
    const assistant_message =;
      completion.choices?.[0]?.message?.content ??;
      "Let me know how I can help.";
;
    await logSupportEventToOperator ({
      type: "chat_completion",
      session_id: session_id ?? "unknown",
      payload: { intent },
    });
;
    return res.status (200).json ({
      assistant_message,
      meta: {
        intent_matched: intent.intent_matched,
        matchedArticleIds: intent.matchedArticleIds,
        links: matched_articles.map ((a) => ({
          title: a.title,
          href: `/help/${a.slug}`,
        })),
      },
    });
  } catch (e: any) {
    return res.status (200).json ({
      assistant_message:;
        "I could not reach the assistant right now. Please try again in a moment.",
    });
  }
}