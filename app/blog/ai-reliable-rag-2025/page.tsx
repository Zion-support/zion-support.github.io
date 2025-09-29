import { Link } from 'react-router-dom';
import React from 'react';

export const metadata = {
  title: 'Reliable RAG 2025: Production Patterns for Grounded Answers',
  description: 'Reduce hallucinations and latency with hardened RAG patterns: contracts, caching, routing, and evals.',
};

export default function ReliableRAG2025() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12 py-10 bg-gradient-to-br from-teal-50 to-cyan-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Reliable RAG 2025</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Harden your retrieval-augmented generation stack with contracts, caching, routing, and continuous evals.
        </p>
        <div className="text-sm text-gray-500 mt-3">September 29, 2025 • 9 min read • AI Platforms</div>
      </div>

      <div className="max-w-3xl mx-auto px-4 prose prose-lg">
        <h2>Key Patterns</h2>
        <ul>
          <li>Response contracts and schema validation</li>
          <li>Layered caching: embedding, chunks, answers</li>
          <li>Retriever routing and query rewriting</li>
          <li>Automatic citations with passage highlighting</li>
          <li>Offline evals with golden sets and guardrail tests</li>
        </ul>

        <h2>Architecture</h2>
        <p>
          Separate retrieval, synthesis, and safety gates. Instrument latency and groundedness, and enforce
          SLOs with adaptive degradation.
        </p>

        <div className="mt-8">
          <Link to="/blog" className="text-blue-600 font-semibold">← Back to Blog</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export const metadata = {
	title: 'Reliable RAG 2025: Production Patterns for Grounded Answers',
	description: 'Battle-tested Retrieval-Augmented Generation patterns to improve groundedness, latency, and cost in production.',
};

export default function AIReliableRAG2025Page() {
	return (
		<div className="animate-fade-in">
			<div className="text-center mb-12 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">Reliable RAG 2025</h1>
				<div className="text-gray-600">September 29, 2025 • 9 min read • AI Platforms</div>
			</div>

			<div className="max-w-3xl mx-auto px-4 prose prose-lg">
				<p>
					RAG is powerful—but naive implementations hallucinate, lag, and overspend. Here are hardened patterns
					from real deployments that raise groundedness while keeping P95 under 300ms.
				</p>

				<h2>Core Patterns</h2>
				<ul>
					<li>Segmented Indexes with Data Contracts</li>
					<li>Semantic Caching + Fingerprinting</li>
					<li>Router-first Models with Escalation</li>
					<li>Structured Generation with Toolformer APIs</li>
				</ul>

				<h2>Quality Controls</h2>
				<ol>
					<li>Groundedness Evals with citation coverage targets</li>
					<li>Answerability checks and retrieval depth limits</li>
					<li>Guardrail prompts with redaction and PII detection</li>
					<li>Continuous offline replay against updated corpora</li>
				</ol>

				<div className="my-8 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
					<strong>RAG Starter:</strong> We provide templates for index strategy, caching, and evals you can adopt fast.
				</div>

				<p>
					Production RAG succeeds with discipline: contracts, caches, evals, and cost controls. The payoff is reliable
					answers your teams can trust.
				</p>
			</div>
		</div>
	);
}

