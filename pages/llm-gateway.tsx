import Head from 'next/head';

export default function LLMGatewayPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>LLM Gateway & Cost Control | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/llm-gateway" />
				<meta name="description" content="Centralize access to multiple LLM providers with routing, guardrails, and cost controls. Starting at $299/mo." />
			</Head>
			<main className="container mx-auto px-6 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">LLM Gateway & Cost Control</h1>
				<p className="text-white/80 mb-8 max-w-3xl">A single gateway for OpenAI, Anthropic, Groq, and more with policies, usage quotas, key vaulting, cost caps, and analytics.</p>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Pricing</h2>
						<p className="text-3xl font-bold text-cyan-400">$299/mo</p>
						<p className="text-sm text-white/60">Plus provider usage</p>
					</div>
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Features</h2>
						<ul className="space-y-1 text-white/80 text-sm">
							<li>• Routing and fallback across models</li>
							<li>• Guardrails and PII redaction</li>
							<li>• Cost caps, budgets, and alerts</li>
							<li>• Per-team keys and quotas</li>
							<li>• Detailed usage analytics</li>
						</ul>
					</div>
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Get Started</h2>
						<div className="space-y-2">
							<a href="/contact" className="inline-block px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold">Talk to Sales</a>
							<div className="text-sm text-white/70">Call +1 302 464 0950 • kleber@ziontechgroup.com</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

