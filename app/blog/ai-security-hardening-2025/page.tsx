import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI Security Hardening 2025: Threat Models, Guardrails, Compliance',
	description:
		'Strengthen AI systems against prompt injection, data exfiltration, model abuse, and supply chain risks. Practical guardrails, monitoring, and compliance in 2025.',
};

export default function AISecurityHardening2025Page() {
	return (
		<div className="min-h-screen bg-white">
			<article className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
				<h1>AI Security Hardening 2025: Threat Models, Guardrails, Compliance</h1>
				<p>
					As AI systems move into critical workflows, adversarial pressure rises. This guide provides a
					pragmatic approach to hardening: threat modeling, layered guardrails, live monitoring, and
					compliance alignment.
				</p>

				<h2>Threat Model</h2>
				<ul>
					<li>Prompt injection and jailbreaks against user- and tool-facing prompts</li>
					<li>Data exfiltration via retrieval contexts and tool-use</li>
					<li>Supply chain risk: models, embeddings, plugins, datasets</li>
					<li>Abuse: spam, fraud, policy violations</li>
				</ul>

				<h2>Defense-in-Depth Guardrails</h2>
				<ul>
					<li>Input sanitization, policy classifiers, and instruction isolation</li>
					<li>Tool permissioning and scoped capabilities with timeouts and budgets</li>
					<li>Context governance: PII scrubbing, allow/deny lists, redaction</li>
					<li>Structured outputs with JSON schema validation and fail-closed behavior</li>
				</ul>

				<h2>Monitoring & Response</h2>
				<ul>
					<li>Tracing prompts, tools, and retrievals with anomaly detection</li>
					<li>Blocklists, rate limits, velocity rules, and honey prompts</li>
					<li>Incident runbooks, SIEM integration, and retroactive redaction</li>
				</ul>

				<h2>Compliance & Governance</h2>
				<ul>
					<li>Audit trails, DPIAs, data retention, and regional controls</li>
					<li>Model and dataset provenance, SBOMs for AI supply chain</li>
					<li>Evaluation: jailbreak resistance, toxic output rates, data leakage</li>
				</ul>

				<p>
					<Link href="/blog" className="no-underline">← Back to Blog</Link>
				</p>
			</article>
		</div>
	);
}

