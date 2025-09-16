import React from 'react';

export const metadata = {
	title: 'AI 2026: Agentic Observability — Deep Dive',
	description:
		'Telemetry, tracing, eval events, and runbooks for autonomous agent platforms.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold text-gray-900">Agentic Observability — Deep Dive</h1>
			<p className="mt-4 text-gray-700">
				Instrument agent systems end‑to‑end: traces, model/tool spans, evaluation events, and
				runbook links. Build actionable dashboards with SLOs and error budgets.
			</p>
		</main>
	);
}

