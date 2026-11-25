import Exa from "exa-js";

/**
 * The Exa web_search tool as an OpenAI-compatible function the LLM can call
 * during a conversation. Wires up the SDK's OpenAI tool helper, which is the
 * recommended approach in the build-with-exa skill.
 *
 * Why the SDK helper, not a hand-written tool:
 *  - The helper asks the model for BOTH `query` and `objective` on every call
 *    (a bare `query`-only tool makes the model guess at the goal).
 *  - It runs the recommended request (query + type auto + contents highlights)
 *    unchanged, so the integration cannot drift into over-decorating.
 *  - `handleToolCalls` formats results back to the model in the provider's shape.
 */

/**
 * Build the `web_search` tool for OpenAI (Chat Completions) and Responses APIs.
 * Callers pass the configured Exa client so the key never leaks into client code.
 */
export function createExaWebSearchTool(exa: Exa) {
  return exa.openai.webSearch();
}

/**
 * System-prompt guidance, per the skill's "Tell the model when to search":
 * Agents that use Exa as a tool perform best when their system prompt says
 * when to search. Without that line, models answer from training data that
 * may be out of date.
 *
 * Add this sentence to the agent's EXISTING system prompt, with the tool's
 * name (`web_search`) in place of the generic name. Keep the rest of the
 * system prompt exactly as it is. If the agent has no system prompt, this
 * sentence can be the whole prompt.
 */
export const EXA_SYSTEM_PROMPT_LINE =
  "Call web_search before answering unless you're certain the answer can't have changed since your training cutoff.";

/**
 * Return the existing system prompt plus the Exa guidance line appended.
 * Returns just the guidance line when there is no existing prompt.
 */
export function withExaSystemPrompt(existingPrompt: string | null | undefined): string {
  const trimmed = existingPrompt?.trim();
  if (!trimmed) return EXA_SYSTEM_PROMPT_LINE;
  return `${trimmed}\n\n${EXA_SYSTEM_PROMPT_LINE}`;
}

/** Tool parameters the model must fill on every call (per skill). */
export interface ExaWebSearchToolParams {
  query: string;
  objective: string;
}

/** Hand-written OpenAI function tool schema, equivalent to exa.openai.webSearch().
 *  Kept for environments where the caller defines the tool definition itself. */
export const EXA_WEB_SEARCH_TOOL_SCHEMA = {
  type: "function" as const,
  function: {
    name: "web_search",
    description:
      "Search the live web and return the most relevant URLs and content. Use for fresh information beyond the model's training data.",
    parameters: {
      type: "object" as const,
      properties: {
        query: {
          type: "string",
          description: "The search query, phrased like a search-box entry.",
        },
        objective: {
          type: "string",
          description:
            "Goal for this search turn; say which documents should rank first, which should be excluded, and what specific facts or figures to pull from them.",
        },
      },
      required: ["query", "objective"],
    },
  },
};
