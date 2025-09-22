<<<<<<< HEAD:pages/api/support/chat.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import OpenAI from 'openai';
origin/cursor/automate-test-improve-and-merge-code-2533
import { readJson } from '../../../utils/fsDb';
import { HelpArticle, matchIntent } from '../../../utils/support';
import { logSupportEventToOperator } from '../../../utils/operator';
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  // Build context with top matched articles as brief references

export default async function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

import type { NextApiRequest, NextApiResponse } from "next";"
import OpenAI from "openai";"
import { readJson } from "../../../utils/fsDb";"
import { HelpArticle, matchIntent } from "../../../utils/support";"
import { logSupportEventToOperator } from "../../../utils/operator";`
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;

export default async function handler() { return null; }
    return res.status(405).json({ error: "Method not allowed" });
:pages_backup/api/support/chat.ts
>>>>>>> main
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts

  const { sessionId, messages } = req.body as {}
    sessionId?: string;"
    messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  };
  if (!messages || !Array.isArray(messages))"
    return res.status(400).json({ error: "messages required" });
"
  const articles = readJson<HelpArticle[]>("help/articles.json", []);"
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const intent = lastUser;
    ? matchIntent(lastUser.content, articles)
    : { intentMatched: false, matchedArticleIds: [] };

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

:pages_backup/api/support/chat.ts
  // Build context with top matched articles as brief references
const matchedArticles = articles.filter((a) =>
    intent.matchedArticleIds.includes(a.id),
  );
:pages_backup/api/support/chat.ts
  const context = matchedArticles
    .map(a => `- ${a.title}: /help/${a.slug}`)
    .join('\n');
origin/cursor/automate-test-improve-and-merge-code-2533

  const sysMessage = {
role: "system" as const,
    content:"`
      SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : ""),
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {
    const completion = await openai.chat.completions.create({
=======

  try {}
    const completion = await openai.chat.completions.create({"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts
      model: "gpt-4o-mini",
      messages: [sysMessage, ...messages],

:pages_backup/api/support/chat.ts
    const assistantMessage = completion.choices?.[0]?.message?.content ?? 'Let me know how I can help.';

    await logSupportEventToOperator({ type: 'chat_completion', sessionId: sessionId ?? 'unknown', payload: { intent } });

    return res.status(200).json({
      assistantMessage,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [sysMessage, ...messages]
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts
  }
  if ()) {}
  $2;
}"
    return res.status (400).json ({ error: "messages required" });
;"
  const articles = read_json < HelpArticle[]>("help / articles.json", []);"
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
  const context = matched_articles;`
    .map ((a) => `- ${a.title}: /help/${a.slug}`);"
    .join ("\n");
;
  const sys_message = {"
    role: "system" as const,
    content:;"`
      SYSTEM_PROMPT + (context ? `\n_relevant help links:\n${context}` : ""),
  }
;
:pages_backup/api/support/chat.ts
  try {
    const completion = await openai.chat.completions.create ({
<<<<<<< HEAD
      model: "gpt - 4o - mini",
      messages: [sys_message, ...messages],

      temperature: 0.2,
=======
=======
      model: "gpt - 4o - mini"
      messages: [sys_message, ...messages]

      temperature: 0.2

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
=======

      temperature: 0.2

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : ''),
  };

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
messages: [sysMessage, ...messages],
      temperature: 0.2,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    });

    const assistantMessage =
      completion.choices?.[0]?.message?.content ??"
      "Let me know how I can help.";

    await logSupportEventToOperator({"
      type: "chat_completion","
      sessionId: sessionId ?? "unknown",
      payload: { intent },
    });
<<<<<<< HEAD:pages/api/support/chat.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
    return res.status (200).json ({
      assistant_message,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      meta: {
        intent_matched: intent.intent_matched,
        matchedArticleIds: intent.matchedArticleIds,

        links: matched_articles.map ((a) => ({

    return res.status(200).json({
      assistantMessage
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
      meta: {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts

    return res.status(200).json({}
      assistantMessage,
      meta: {}
        intentMatched: intent.intentMatched,
        matchedArticleIds: intent.matchedArticleIds,
:pages_backup/api/support/chat.ts
        links: matchedArticles.map((a) => ({
<<<<<<< HEAD:pages/api/support/chat.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          title: a.title,
=======
        links: matchedArticles.map((a) => ({}
          title: a.title,`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts
          href: `/help/${a.slug}`,
        })),
      },

    });
:pages_backup/api/support/chat.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  } catch (e: any) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          title: a.title
          href: `/help/${a.slug}`
        }))
      }

  } catch (e: any) {

:pages/api/support/chat.ts
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  } catch (e: any) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    });
  } catch (e: any) {}
    return res.status(200).json({}
      assistantMessage:"
        "I could not reach the assistant right now. Please try again in a moment.",
    });

  }
<<<<<<< HEAD
}
<<<<<<< HEAD:pages_backup/api/support/chat.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/chat.ts
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/support/chat.ts
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
