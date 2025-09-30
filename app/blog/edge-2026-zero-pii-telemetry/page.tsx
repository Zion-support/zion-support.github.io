import React from 'react';

export const metadata = {
	title: 'Edge 2026: Zero‑PII Telemetry — Scoped IDs, DP Noise, Attestations',
	description: 'Ship decision‑grade analytics at <100ms without collecting PII.'
};

export default function Page() {
	return (
		<main className="min-h-screen bg-slate-950 text-white">
			<section className="container mx-auto px-6 py-16">
				<h1 className="text-4xl font-bold mb-4">Edge 2026: Zero‑PII Telemetry</h1>
				<p className="text-zinc-300 max-w-3xl">Scoped IDs, on‑device aggregation, DP noise, and signed attestations for privacy‑first analytics.</p>
			</section>
		</main>
	);
}

