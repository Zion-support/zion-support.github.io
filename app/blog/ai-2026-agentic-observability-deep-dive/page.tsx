export const metadata = {
	title: 'AI 2026: Agentic Observability — Deep Dive',
	description:
		'Telemetry, tracing, evaluations, and policy signals for deep visibility into autonomous workflows.',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">Agentic Observability — Deep Dive</h1>
					<p className="text-lg opacity-90">Capture signals across tools, memory, reasoning, and actions to improve reliability.</p>
				</div>
			</section>

			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-fuchsia">
				<p>
					Design an observability fabric for agents: structured logs, spans, metrics, and eval events. Correlate
					latency, failures, and jailbreak attempts with scenario outcomes to drive safe, high‑performing systems.
				</p>

				<h2>What to Instrument</h2>
				<ul>
					<li>Tool calls, inputs/outputs, and latency distributions</li>
					<li>Reasoning traces and memory accesses</li>
					<li>Eval pass/fail events and policy decisions</li>
					<li>Business KPIs tied to user outcomes</li>
				</ul>
			</main>
		</div>
	);
}

