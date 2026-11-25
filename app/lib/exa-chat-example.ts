/**
 * Example: wiring the Exa web_search tool into a Chat Completions chat loop.
 *
 * This mirrors the skill's "Search as an LLM Tool" pattern. The app's existing
 * `/api/llm/chat` (or whichever endpoint owns the agent) should:
 *
 *   1. Point the model at the tools below and add the system-prompt line.
 *   2. On a tool-call message, call `handleToolCalls` (exports the
 *      OpenAI-compatible `handleToolCalls`) and dispatch `web_search` to the
 *      server-side endpoint above (or the in-process `exaSearch`).
 *   3. Append the tool results and repeat until the model replies without
 *      tool calls.
 *
 * The system-prompt line must be added to the agent's existing system prompt:
 *
 *   const systemPrompt = withExaSystemPrompt(existingPrompt);
 *
 * Server-side helper (in-process, no HTTP):
 *   import { exaSearch } from "@/app/lib/exa";
 *   const r = await exaSearch({ query, objective });
 *
 * HTTP helper (the agent calls this route):
 *   POST /api/exa/search  with { query, objective }
 */

import { NextRequest, NextResponse } from "next/server";
import { exaSearch } from "@/lib/exa";
import { createExaWebSearchTool } from "@/lib/exa-tools";
import Exa from "exa-js";

/**
 * Wire the tool once when the agent/chat session boots. `webSearch` is the
 * OpenAI-compatible tool the LLM picks; `handleToolCalls` is the function the
 * chat client calls to execute it. Pass the app's real OpenAI client in.
 *
 * await exa.openai.webSearch() -> tool spec (question + objective parameters)
 * exa.openai.handleToolCalls(message) -> run + format results back
 */
export function buildExaWebSearchTool() {
  if (!process.env.EXA_API_KEY) {
    console.warn("[exa-tools] EXA_API_KEY unset — web_search tool disabled.");
    return null;
  }
  // The configured server-side Exa client (process.env keyed; never bundled).
  const exa = process.env.EXA_API_KEY ? new Exa(process.env.EXA_API_KEY) : null;
  if (!exa) return null;
  try {
    return createExaWebSearchTool(exa);
  } catch (e) {
    console.warn("[exa-tools] Could not build web_search tool:", e);
    return null;
  }
}
