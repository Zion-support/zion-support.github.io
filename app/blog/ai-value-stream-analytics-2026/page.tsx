import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
	description: 'Measure end-to-end AI ROI with value stream analytics across prompts, tools, latency, quality, and business outcomes.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">
				AI Value Stream Analytics 2026: Trace ROI from Token to Revenue
			</h1>
			<p className="text-gray-600 mb-8">
				A pragmatic approach to connect AI cost, latency, and quality to business value. Implement golden
				datapaths, human-in-the-loop labels, and lead-to-cash instrumentation.
			</p>
			<div className="prose prose-lg max-w-none">
				<h2>Instrumentation checklist</h2>
				<ul>
					<li>Trace IDs across prompts, tools, and external systems</li>
					<li>Outcome labels: correct, helpful, safe, on-policy</li>
					<li>Business events: MQL, SQL, ACV, churn, NPS</li>
				</ul>
				<h2>Dashboards that matter</h2>
				<ul>
					<li>Cost-to-value: $ per successful outcome</li>
					<li>Latency funnels by tool and model</li>
					<li>Guardrail intervention rates</li>
				</ul>
			</div>
			<div className="mt-10 flex gap-4">
				<Link href="/blog" className="text-blue-600 font-semibold">Back to Blog</Link>
				<Link href="/services/analytics-dashboard" className="text-blue-600 font-semibold">See Analytics Solutions →</Link>
			</div>
		</main>
	);
}

