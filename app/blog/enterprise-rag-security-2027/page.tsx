"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Enterprise RAG Security 2027: Auth‑Aware Retrieval and Signed Outputs
        </h1>
        <p className="text-gray-600 mb-6">Published: 2025‑09‑30 • 8 min read • AI Security</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Secure retrieval‑augmented generation (RAG) requires end‑to‑end controls: auth‑aware
          retrieval, freshness windows, prompt firewalls, and signed outputs. This guide lays out
          a practical blueprint you can ship in weeks, not months.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
          <li>Auth‑aware retrieval with attribute‑based access control</li>
          <li>Freshness windows and versioned corpora to avoid stale answers</li>
          <li>Prompt firewalls and egress controls for safe generations</li>
          <li>Signed outputs and attestations for audit‑ready provenance</li>
        </ul>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 mb-10">
          <div className="text-indigo-700 font-semibold mb-2">Quickstart</div>
          <p className="text-indigo-800 text-sm">
            Start by scoping identity to documents at ingestion, enforce ABAC in retrieval,
            and apply inline moderation + output signing in generation. Wire KPIs to error
            budgets and rollbacks.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/blog" className="text-indigo-700 font-semibold hover:underline">
            ← Back to Blog
          </Link>
          <Link href="/contact" className="text-indigo-700 font-semibold hover:underline">
            Talk to an expert →
          </Link>
        </div>
      </div>
    </main>
  );
}

