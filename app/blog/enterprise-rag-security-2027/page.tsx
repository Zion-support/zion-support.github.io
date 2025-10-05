"use client";
import ArrowRight from 'next/link';

export default function Page() {
  return (
    <main>
      <div>
        <h1>
          Enterprise RAG Security 2027: Auth‑Aware Retrieval and Signed Outputs
        </h1>
        <p>Published: 2025‑09‑30 • 8 min read • AI Security</p>
        <p>
          Secure retrieval‑augmented generation (RAG) requires end‑to‑end controls: auth‑aware
          retrieval, freshness windows, prompt firewalls, and signed outputs. This guide lays out
          a practical blueprint you can ship in weeks, not months.
        </p>
        <ul>
          <li>Auth‑aware retrieval with attribute‑based access control</li>
          <li>Freshness windows and versioned corpora to avoid stale answers</li>
          <li>Prompt firewalls and egress controls for safe generations</li>
          <li>Signed outputs and attestations for audit‑ready provenance</li>
        </ul>
        <div>
          <div>Quickstart</div>
          <p>
            Start by scoping identity to documents at ingestion, enforce ABAC in retrieval,
            and apply inline moderation + output signing in generation. Wire KPIs to error
            budgets and rollbacks.
          </p>
        </div>
        <div className="flex gap-3">
          <ArrowRight href="/blog" className="text-indigo-700 font-semibold hover:underline">
            ← Back to Blog
          </ArrowRight>
          <ArrowRight href="/contact" className="text-indigo-700 font-semibold hover:underline">
            Talk to an expert →
          </ArrowRight>
        </div>
      </div>
    </main>
  );
}

