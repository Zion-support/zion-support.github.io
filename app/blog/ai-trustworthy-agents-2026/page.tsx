import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'Trustworthy AI Agents 2026: Safety, Compliance, and Observability',
	description: 'A practical blueprint to deploy trustworthy AI agents with safety guardrails, audit logs, and real-time observability.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">
				Trustworthy AI Agents 2026: Safety, Compliance, and Observability
			</h1>
			<p className="text-gray-600 mb-8">
				Ship enterprise-ready AI agents by layering policy guardrails, safety filters, role-based access, and
				end-to-end observability. This blueprint covers red-team testing, incident workflows, and auditability.
			</p>
			<div className="prose prose-lg max-w-none">
				<h2>Why trust matters</h2>
				<p>
					As agents gain autonomy, governance shifts from static prompts to continuous controls: input/output
					filters, tool permissioning, and policy-as-code. Build for transparency first.
				</p>
				<h2>Reference architecture</h2>
				<ul>
					<li>Guardrails: content policy, PII detectors, jailbreak protection</li>
					<li>Authorization: scoped tools, approvals for high-risk actions</li>
					<li>Observability: traces, prompts, tokens, costs, outcomes</li>
					<li>Posture: red-teaming, chaos prompts, incident runbooks</li>
				</ul>
				<h2>KPIs to track</h2>
				<ul>
					<li>Groundedness errors per 1,000 actions</li>
					<li>Mean time to detect unsafe actions</li>
					<li>Approval bypass rate</li>
				</ul>
			</div>
			<div className="mt-10 flex gap-4">
				<Link href="/blog" className="text-blue-600 font-semibold">Back to Blog</Link>
				<Link href="/services/ai-copilots" className="text-blue-600 font-semibold">Explore AI Copilots →</Link>
			</div>
		</main>
	);
}

