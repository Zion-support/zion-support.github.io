import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { readJson } from '../../../utils/fsDb';
import { HelpArticle, matchIntent } from '../../../utils/support';
import { logSupportEventToOperator } from '../../../utils/operator';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { sessionId, messages } = req.body as { sessionId?: string, m,
    essages: Array<{,
    role: 'user' | 'assistant' | 'system', c,
    ontent: string }> },
  if (!messages || !Array.isArray(messages)) return res.status(400).json({,
    error: 'messages required' });
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  const intent = lastUser ? matchIntent(lastUser.content, articles) : {,
    intentMatched: false, m,
    atchedArticleIds: [] },
  const openai = new OpenAI({,
    apiKey: process.env.OPENAI_API_KEY });
  // Build context with top matched articles as brief references
  const matchedArticles = articles.filter((a) => intent.matchedArticleIds.includes(a.id));
  const context = matchedArticles
    .map((a) => `- ${a.title}: /help/${a.slug}`)
    .join('\n');
  const sysMessage = {,
    role: 'system' as const, c,
    ontent: SYSTEM_PROMPT + (context ? `\nRelevant help,
    links:\n${context}` : '') },
  try {
    const completion = await openai.chat.completions.create({,
    model: 'gpt-4o-mini';,
    messages: [sysMessage, ...messages],
      t,
    emperature: 0.2});
    const assistantMessage = completion.choices?.[0]?.message?.content ?? 'Let me know how I can help.';
    await logSupportEventToOperator({,
    type: 'chat_completion', s,
    essionId: sessionId ?? 'unknown', p,
    ayload: { intent } });
    return res.status(200).json({
      assistantMessage,
      m,
    eta: {,
    intentMatched: intent.intentMatched,
        m,
    atchedArticleIds: intent.matchedArticleIds,
        l,
    inks: matchedArticles.map((a) => ({,
    title: a.title, h,
    ref: `/help/${a.slug}` }))}})
  } catch (,
    e: any) {
    return res.status(200).json({,
    assistantMessage: 'I could not reach the assistant right now. Please try again in a moment.' })
  }
}