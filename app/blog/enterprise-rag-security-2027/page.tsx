"use client"
import Link from "next/link"
export default function Page() {
  return (
    <main className="text-left">"
      <div className="text-left">"
        <h1 className="text-left">"
          Enterprise RAG Security 2027: Auth‑Aware Retrieval and Signed Outputs
        </h1>
        <p className="text-left">Published: 2025‑09‑30 • 8 min read • AI Security</p>"
        <p className="text-left">"
          Secure retrieval‑augmented generation (RAG) requires end‑to‑end controls: auth‑aware
          retrieval, freshness windows, prompt firewalls, and signed outputs. This guide lays out
          a practical blueprint you can ship in weeks, not months.
        </p>
        <ul className="text-left">"
          <li>Auth‑aware retrieval with attribute‑based access control</li>
          <li>Freshness windows and versioned corpora to avoid stale answers</li>
          <li>Prompt firewalls and egress controls for safe generations</li>
          <li>Signed outputs and attestations for audit‑ready provenance</li>
        </ul>
        <div className="text-left">"
          <div className="text-left">Quickstart</div>"
          <p className="text-left">"
            Start by scoping identity to documents at ingestion, enforce ABAC in retrieval,
            and apply inline moderation + output signing in generation. Wire KPIs to error
            budgets and rollbacks.
          </p>
        </div>
        <div className="text-left">"
          <Link href="/blog" className="text-left">"
            ← Back to Blog
          </Link>
          <Link href="/contact" className="text-left">"
            Talk to an expert →
          </Link>
        </div>
      </div>
    </main>
  );
}

