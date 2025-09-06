<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages_backup/api/support/chat.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/support/chat.ts
import OpenAI from 'openai';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import { readJson } from '../../../utils/fsDb';
import { HelpArticle, matchIntent } from '../../../utils/support';
import { logSupportEventToOperator } from '../../../utils/operator';
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;

  const { sessionId, messages } = req.body as {
    sessionId?: string;
    messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  };
  if (!messages || !Array.isArray(messages))
    return res.status(400).json({ error: "messages required" });

  const articles = readJson<HelpArticle[]>("help/articles.json", []);
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const intent = lastUser
    ? matchIntent(lastUser.content, articles)
    : { intentMatched: false, matchedArticleIds: [] };

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Build context with top matched articles as brief references
const matchedArticles = articles.filter(a =>
    intent.matchedArticleIds.includes(a.id)
  );
  const context = matchedArticles
<<<<<<< HEAD
    .map((a) => `- ${a.title}: /help/${a.slug}`)
    .join("\n");
=======
    .map(a => `- ${a.title}: /help/${a.slug}`)
    .join('\n');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

  const sysMessage = {
    role: 'system' as const,
    content:
<<<<<<< HEAD
      SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : "")
  };

<<<<<<< HEAD:pages_backup/api/support/chat.ts
<<<<<<< HEAD
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [sysMessage, ...messages],
      temperature: 0.2,
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/support/chat.ts
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [sysMessage, ...messages]
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
    intent.matchedArticleIds.includes (a.id)
  );
  const context = matched_articles;
    .map ((a) => `- ${a.title}: /help/${a.slug}`);
    .join ("\n");
;
  const sys_message = {
    role: "system" as const
    content:;
      SYSTEM_PROMPT + (context ? `\n_relevant help links:\n${context}` : "")
  }
;
  try {
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini"
      messages: [sys_message, ...messages]
      temperature: 0.2
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : ''),
  };

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
messages: [sysMessage, ...messages],
      temperature: 0.2,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    });

    const assistantMessage =
      completion.choices?.[0]?.message?.content ??
      "Let me know how I can help.";

    await logSupportEventToOperator({
      type: "chat_completion"
      sessionId: sessionId ?? "unknown"
      payload: { intent }
    });
      meta: {
<<<<<<< HEAD
        intentMatched: intent.intentMatched,
        matchedArticleIds: intent.matchedArticleIds,
        links: matchedArticles.map((a) => ({
          title: a.title,
          href: `/help/${a.slug}`,
        })),
      },
=======
        intent_matched: intent.intent_matched
        matchedArticleIds: intent.matchedArticleIds

        links: matched_articles.map ((a) => ({

    return res.status(200).json({
      assistantMessage
      meta: {
        intentMatched: intent.intentMatched
        matchedArticleIds: intent.matchedArticleIds
        links: matchedArticles.map((a) => ({
          title: a.title
          href: `/help/${a.slug}`
        }))
      }
  } catch (e: any) {


<<<<<<< HEAD:pages_backup/api/support/chat.ts
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/support/chat.ts
    });
  } catch (e: any) {
    return res.status(200).json({
      assistantMessage:
        "I could not reach the assistant right now. Please try again in a moment."
    });
  }
<<<<<<< HEAD
}
<<<<<<< HEAD:pages_backup/api/support/chat.ts
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/support/chat.ts
