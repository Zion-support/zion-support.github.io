import React from 'react';

export const metadata = {
	title: 'AI Agents in the Enterprise: 2025 Adoption Playbook',
	description: 'A practical playbook for deploying autonomous AI agents across revenue ops and IT with measurable ROI.',
};

export default function Page() {
	return (
		<div className="max-w-3xl mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold text-gray-900 mb-6">AI Agents in the Enterprise: 2025 Adoption Playbook</h1>
			<p className="text-gray-700 mb-6">
				Deploy autonomous AI agents safely and effectively across sales, marketing, support, finance, and IT. Learn architecture patterns, guardrails, and rollout strategies tied to business outcomes.
			</p>
			<div className="prose prose-lg max-w-none">
				<h2>Where AI Agents Work Best</h2>
				<ul>
					<li>Revenue Ops: lead enrichment, SDR follow-ups, meeting prep</li>
					<li>IT & DevOps: incident triage, runbooks, automated change requests</li>
					<li>Customer Support: tier-1 resolution, deflection, summary to agents</li>
					<li>Finance: invoice matching, variance analysis, policy Q&A</li>
				</ul>
				<h2>Architecture Blueprint</h2>
				<ol>
					<li>Intent router → policy gateway → retrieval → tool execution</li>
					<li>Guardrails: permissions, safety & compliance checks every step</li>
					<li>Observability: trace every action and capture user feedback</li>
					<li>Continuous improvement: fine-tune prompts and tools from logs</li>
				</ol>
				<h2>Rollout Plan</h2>
				<p>
					Start with a narrow, high-ROI workflow. Measure baseline, launch with human-in-the-loop, then expand tools as confidence grows. Track KPIs: resolution time, accuracy, and business impact.
				</p>
			</div>
		</div>
	);
}

