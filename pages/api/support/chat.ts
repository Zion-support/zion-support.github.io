import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { readJson } from '../../../utils/fsDb';
import { HelpArticle, matchIntent } from '../../../utils/support';
import { logSupportEventToOperator } from '../../../utils/operator';
const SYSTEM_PROMPT = `You are a helpful support assistant for the Zion AI Marketplace. Provide clear, short answers and direct users to relevant help links.`,

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { sessionId, messages } = req.body as { sessionId?: string, messages: Array<{ role: 'user' | 'assistant' | 'system', content: string}> },
  if (!messages || !Array.isArray(messages)) return res.status(400).json($2);
  const articles = readJson<HelpArticle[]>('help/articles.json', []),
  const lastUser = $2;
  const intent = lastUser ? matchIntent(lastUser.content, articles) : { intentMatched: false, matchedArticleIds: [] },

  const openai = new OpenAI($2);
  // Build context with top matched articles as brief references
  const matchedArticles = $2;
  const context = matchedArticles
    .map((a) => `- ${a.title}: /help/${a.slug}`)
    .join($2);
  const sysMessage = { role: 'system' as const, content: SYSTEM_PROMPT + (context ? `\nRelevant help links:\n${context}` : '') },

  try {
    const completion = await openai.chat.completions.create($2);
    const assistantMessage = $2;
    await logSupportEventToOperator($2);
    return res.status(200).json({
      assistantMessage,
      meta: {
        intentMatched: intent.intentMatched,
        matchedArticleIds: intent.matchedArticleIds,
        links: matchedArticles.map((a) => ({ title: a.title, href: `/help/${a.slug}` }))}})
  } catch (e: any) {
    return res.status(200).json({ assistantMessage: 'I could not reach the assistant right now. Please try again in a moment.' })
  }
}