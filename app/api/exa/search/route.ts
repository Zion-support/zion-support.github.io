import { NextRequest, NextResponse } from "next/server";
import { exaSearch, ExaSearchParams, isExaConfigured } from "@/lib/exa";

/**
 * Server-side Exa search endpoint for the coding agent / LLM tool.
 *
 * It runs entirely on the server so EXA_API_KEY never leaves the runtime.
 * The client calling this is the app's LLM agent (or a human inspecting the
 * endpoint), never browser code.
 *
 * Invocation (from an agent or client):
 *   POST /api/exa/search
 *   {
 *     "query": "latest developments in LLM agent tooling",
 *     "objective": "Gather evidence on how coding agents use semantic search; rank docs that describe actual API usage, exclude marketing pages, and pull the exact endpoint/parameter names.",
 *     "numResults": 5,
 *     "contents": { "highlights": true }
 *   }
 *
 * Response: { results: [...] } — each result carries title, url, publishedDate
 * and highlights when the request asked for them. An error (e.g. unconfigured
 * key) returns { error } with HTTP 503, never a leaked key.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));

    // `query` is required — the search box entry. Objective is expected when
    // the caller is an LLM/agent step; it is optional for a human.
    const query = typeof body.query === "string" ? body.query.trim() : "";
    if (!query) {
      return NextResponse.json(
        { error: "Missing required field: query" },
        { status: 400 }
      );
    }

    const params: ExaSearchParams = {
      query,
      objective: typeof body.objective === "string" ? body.objective : undefined,
      numResults:
        typeof body.numResults === "number" && body.numResults > 0
          ? body.numResults
          : undefined,
      snapshotAsOf:
        typeof body.snapshotAsOf === "string" ? body.snapshotAsOf : undefined,
      outputSchema: body.outputSchema,
      systemPrompt: body.systemPrompt,
    };

    if (!isExaConfigured()) {
      return NextResponse.json(
        {
          error: "Exa not configured",
          hint:
            "Set EXA_API_KEY in .env and copy from .env.example, then restart the server.",
        },
        { status: 503 }
      );
    }

    const result = await exaSearch(params);

    return NextResponse.json({
      ok: true,
      meta: {
        query: params.query,
        totalResults: result?.results?.length ?? 0,
        costDollars: result?.costDollars,
        requestId: result?.requestId,
      },
      results:
        result?.results?.map((r: any) => ({
          title: r.title,
          url: r.url,
          publishedDate: r.publishedDate,
          author: r.author,
          highlights: r.highlights,
          text: r.text,
          id: r.id,
        })) ?? [],
    });
  } catch (err: any) {
    // Never surface the raw key or internal stack to a caller.
    const message =
      err instanceof Error ? err.message : "Exa request failed";
    console.error("[api/exa/search] failed:", message);
    return NextResponse.json(
      { error: "Exa search failed", message: message.replace(/EXA_API_KEY.*/, "Exa search failed") },
      { status: 500 }
    );
  }
}
