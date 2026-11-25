import Exa, { DeepOutputSchema } from "exa-js";

/**
 * Server-side Exa client, keyed by EXA_API_KEY from the environment.
 *
 * The API key is read at process launch and held in this module only. It never
 * leaves the server (Next.js route handlers run on the server). Client code
 * that imports this module receives only a `null` client when the key is unset,
 * so nothing sensitive is bundled or leaked to the browser.
 *
 * Exa accepts either the `x-api-key` header or `Authorization: Bearer <key>`;
 * `new Exa(key)` sends `x-api-key`.
 */
export const exa = process.env.EXA_API_KEY ? new Exa(process.env.EXA_API_KEY) : null;

/** True when a configured API key is available. */
export function isExaConfigured(): boolean {
  return exa !== null;
}

/**
 * Recommended Exa search request per the build-with-exa skill:
 *
 *   { query, type: "auto", contents: { highlights: true } }
 *
 * and nothing else unless the task explicitly requires a parameter.
 *
 * Rules enforced here (do not relax):
 *  - `type` stays "auto" (the server default). Only another mode for a real
 *    latency/reasoning requirement.
 *  - `numResults` only when a result count is an intentional product decision.
 *  - `contents` carries only highlights (never stack text/summary).
 *  - `objective` is attached when this search is one step of a larger task —
 *    e.g. the LLM agent calls it as a tool, or it feeds another step of a
 *    pipeline. Set to the goal that search serves.
 *  - no `category`, `includeDomains`/`excludeDomains`, `maxAgeHours`, or
 *    date filters unless the task states it.
 *
 * `contents.snapshotAsOf` (Exa Snapshot) is accepted and nested inside
 * `contents`, because on `/search` it belongs there. Never combine it with
 * `maxAgeHours`.
 */
export interface ExaSearchParams {
  /** Retrieval intent, phrased like a search-box entry. */
  query: string;
  /** The goal this search turn serves (rank first, exclude, pull specific
   *  facts). Required on every search that is one step of a larger task. */
  objective?: string;
  /** Intentional product decision; defaults to 10 when omitted. */
  numResults?: number;
  /**
   * Exa Snapshot: pin page content to the version stored at this instant
   * (ISO 8601). Nested inside `contents` on `/search`.
   * See references/snapshot.md — the opposite of `maxAgeHours`.
   */
  snapshotAsOf?: string;
  /**
   * Optional structured-output schema applied to the synthesized search
   * result. Use only when the task requires a specific output shape that
   * cannot come from result metadata alone.
   */
  outputSchema?: DeepOutputSchema;
  /** Behavior/source guidance for synthesized output. */
  systemPrompt?: string;
}

export async function exaSearch(params: ExaSearchParams): Promise<any> {
  if (!isExaConfigured()) {
    throw new Error(
      "Exa is not configured: set EXA_API_KEY in .env (copy from .env.example) before calling searchExa."
    );
  }

  const contents: Record<string, unknown> = { highlights: true };

  // SnapshotAsOf lives inside `contents` on the search endpoint.
  if (params.snapshotAsOf) {
    contents.snapshotAsOf = params.snapshotAsOf;
  }

  return exa!.search(params.query, {
    type: "auto",
    contents,
    objective: params.objective,
    numResults: params.numResults,
    outputSchema: params.outputSchema,
    systemPrompt: params.systemPrompt,
  });
}
