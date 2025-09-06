import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { readJson } from '../../../utils/fsDb';
import { HelpArticle, matchIntent } from '../../../utils/support';
import { logSupportEventToOperator } from '../../../utils/operator';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { sessionId, messages } = req.body as { sessionId?: string, messages: Array<{ role: 'user' | 'assistant' | 'system', content: string }> };
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'messages required' });

  const articles = readJson<HelpArticle[]>('help/articles.json', []);
<<<<<<< HEAD
  const lastUser = [...messages].reverse().find(m => m.role === 'user');
  const intent = lastUser
    ? matchIntent(lastUser.content, articles)
    : { intentMatched: false, matchedArticleIds: [] };
=======
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { sessionId, messages } = req.body as { sessionId?: string, messages: Array<{ role: 'user' | 'assistant' | 'system', content: string }> };
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'messages required' });

  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  const intent = lastUser ? matchIntent(lastUser.content, articles) : { intentMatched: false, matchedArticleIds: [] };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  const intent = lastUser ? matchIntent(lastUser.content, articles) : { intentMatched: false, matchedArticleIds: [] };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Build context with top matched articles as brief references
<<<<<<< HEAD
<<<<<<< HEAD
  const matchedArticles = articles.filter(a =>
    intent.matchedArticleIds.includes(a.id)
  );
=======
  const matchedArticles = articles.filter((a) => intent.matchedArticleIds.includes(a.id));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const context = matchedArticles
    .map((a) => `- ${a.title}: /help/${a.slug}`)
    .join('\n');

<<<<<<< HEAD
  const sysMessage = {
    role: 'system' as const,
    content:
      SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : ''),
  };
=======
  const matchedArticles = articles.filter((a) => intent.matchedArticleIds.includes(a.id));
  const context = matchedArticles
    .map((a) => `- ${a.title}: /help/${a.slug}`)
    .join('\n');

  const sysMessage = { role: 'system' as const, content: SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : '') };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const sysMessage = { role: 'system' as const, content: SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : '') };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
<<<<<<< HEAD
      messages: [sysMessage, ...messages],
      temperature: 0.2
    });

    const assistantMessage = completion.choices?.[0]?.message?.content ?? 'Let me know how I can help.';

    await logSupportEventToOperator({ type: 'chat_completion', sessionId: sessionId ?? 'unknown', payload: { intent } });

    return res.status(200).json({
      assistantMessage,
      meta: {
        intentMatched: intent.intentMatched,
        matchedArticleIds: intent.matchedArticleIds,
        links: matchedArticles.map((a) => ({ title: a.title, href: `/help/${a.slug}` }))
      }
    });
  } catch (e: any) {
    return res.status(200).json({ assistantMessage: 'I could not reach the assistant right now. Please try again in a moment.' });
  }
<<<<<<< HEAD
=======
      messages: [sysMessage, ...messages];
      temperature: 0.2
      });

    const assistantMessage = completion.choices?.[0]?.message?.content ?? 'Let me know how I can help.';

    await logSupportEventToOperator({ type: 'chat_completion', sessionId: sessionId ?? 'unknown', payload: { intent } });

    return res.status(200).json({
      assistantMessage;
      meta: {
        intentMatched: intent.intentMatched, matchedArticleIds: intent.matchedArticleIds,
        links: matchedArticles.map((a) => ({ title: a.title, href: `/help/${a.slug}` }))}})
  } catch (e: any) {
    return res.status(200).json({ assistantMessage: 'I could not reach the assistant right now. Please try again in a moment.' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
