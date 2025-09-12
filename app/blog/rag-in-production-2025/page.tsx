import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'RAG in Production 2025: Patterns, Guardrails, ROI',
	description: 'A pragmatic guide to Retrieval-Augmented Generation (RAG) in production: architectures, evaluation, observability, guardrails, and ROI measurement in 2025.',
};

export default function RAGInProduction2025Page() {
	return (
		<div className="min-h-screen bg-white">
			<article className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
				<h1>RAG in Production 2025: Patterns, Guardrails, ROI</h1>
				<p>
					Retrieval-Augmented Generation (RAG) has matured from experiments to mission-critical systems.
					This guide covers reference architectures, data pipelines, evaluation, safety guardrails, and
					operational best practices to deliver measurable business outcomes.
				</p>

				<h2>Reference Architecture</h2>
				<ul>
					<li>Ingestion pipeline with schema validation and PII scrubbing</li>
					<li>Hybrid retrieval (sparse + dense) with freshness and recency boosting</li>
					<li>Query rewriting, intent detection, and routing</li>
					<li>Answer construction with tool-use and structured output</li>
					<li>Feedback loop with human-in-the-loop and auto-eval</li>
				</ul>

				<h2>Evaluation & Observability</h2>
				<ul>
					<li>Groundedness and factuality via reference docs</li>
					<li>Retrieval quality: recall@k, MRR, hit rate</li>
					<li>Business KPIs: resolution rate, time-to-answer, CSAT</li>
					<li>Live tracing for prompt/contexts, latency budgets, and token spend</li>
				</ul>

				<h2>Guardrails</h2>
				<ul>
					<li>Content filters, policy checks, and topic classifiers</li>
					<li>Safety stop conditions and escalation to humans</li>
					<li>Structured outputs with JSON schema validation</li>
				</ul>

				<h2>ROI Measurement</h2>
				<p>
					Tie improvements to concrete outcomes: deflected tickets, faster cycle times, and reduced
					knowledge-search overhead. Instrument A/B tests and measure cost per successful outcome.
				</p>

				<p>
					<Link href="/blog" className="no-underline">← Back to Blog</Link>
				</p>
			</article>
		</div>
	);
}

