import { NextRequest, NextResponse } from 'next/server';
import { routeChat } from '@/lib/llm-fallback-router.cjs';

/**
 * Unified LLM chat endpoint with automatic fallback to local Ollama.
 * POST /api/llm/chat
 * Body: { messages: [{role, content}], provider?: 'openai'|'anthropic'|'ollama'|'auto', forceLocal?: boolean }
 * Returns: { content, provider, model }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages;
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Missing messages array' }, { status: 400 });
    }

    const result = await routeChat(messages, {
      provider: body.provider,
      forceLocal: body.forceLocal,
      temperature: body.temperature,
    });

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
