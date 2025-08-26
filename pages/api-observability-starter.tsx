import Head from 'next/head';

export default function APIObservabilityStarterPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>API Observability Starter | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/api-observability-starter" />
				<meta name="description" content="Track latency, errors, and SLAs with automatic dashboards and alerts. From $149/mo." />
			</Head>
			<main className="container mx-auto px-6 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">API Observability Starter</h1>
				<p className="text-white/80 mb-8 max-w-3xl">Drop-in SDK and proxy for metrics, tracing, and error budgets across REST and GraphQL APIs.</p>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Pricing</h2>
						<p className="text-3xl font-bold text-cyan-400">$149/mo</p>
						<p className="text-sm text-white/60">Up to 1M requests</p>
					</div>
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Features</h2>
						<ul className="space-y-1 text-white/80 text-sm">
							<li>• Auto dashboards (p50/p95 latency)</li>
							<li>• Error rate tracking and SLO burn</li>
							<li>• Webhooks to PagerDuty/Slack</li>
							<li>• OpenTelemetry compatible</li>
						</ul>
					</div>
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Get Started</h2>
						<div className="space-y-2">
							<a href="/contact" className="inline-block px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold">Request Demo</a>
							<div className="text-sm text-white/70">Call +1 302 464 0950 • kleber@ziontechgroup.com</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

