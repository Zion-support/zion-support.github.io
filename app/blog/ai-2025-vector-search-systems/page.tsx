import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Vector Search Systems 2025: Building Accurate, Fast, and Cost‑Efficient RAG',
  description:
    'Design patterns for vector databases and retrieval systems that maximize accuracy, minimize latency, and control costs in production RAG.',
  keywords: ['RAG', 'vector database', 'hybrid search', 'embedding', 'latency', 'cost'],
};

export default function VectorSearch2025Page() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-blue">
        <h1>Vector Search Systems 2025: Building Accurate, Fast, and Cost‑Efficient RAG</h1>
        <p>
          Retrieval quality determines downstream LLM performance. This guide details practical
          strategies for chunking, indexing, hybrid retrieval, and evaluation to achieve reliable
          answers within strict latency and budget constraints.
        </p>

        <h2>Indexing & Ingestion</h2>
        <ul>
          <li>Semantic chunking with overlap tuned by question types</li>
          <li>Metadata normalization and quality scoring at ingest</li>
          <li>Periodic re‑embedding with drift detection</li>
        </ul>

        <h2>Retrieval Strategies</h2>
        <ul>
          <li>Hybrid BM25 + vector with reciprocal rank fusion</li>
          <li>Reranking for precision at top‑k with small models</li>
          <li>Context window budgeting and citation enforcement</li>
        </ul>

        <h2>Evaluation</h2>
        <ul>
          <li>Task‑grounded evals: faithfulness, answerability, coverage</li>
          <li>Infra SLOs: p95 latency, tail amplification, cache hit rate</li>
          <li>Cost per helpful answer and per session</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 border border-blue-200">
          <h3 className="m-0">Resources</h3>
          <ul>
            <li>
              <Link href="/tools/ai-roi-calculator">AI ROI Calculator</Link>
            </li>
            <li>
              <Link href="/resources">RAG evaluation templates</Link>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Published: Sep 12, 2025 • 9 min read • Category: Architecture
        </p>
      </article>
    </div>
  );
}

