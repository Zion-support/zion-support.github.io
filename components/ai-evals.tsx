<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { Check, ShieldCheck, TrendingUp, Clock, Phone, Mail, MapPin, ExternalLink } from 'lucide-react',
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
export default function AIEvalsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	},

	const features = [
		'Golden datasets and synthetic evalsHallucination and grounding scoreToxicity, bias and safety metricsLLM version comparison reportsCI quality gates and webhooksLatency and cost KPIs with budgets'
	],

	return (
		<QuantumHolographicMatrixBackground>
			<Head>
				<title>AI Evals & Observability | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Ship reliable AI with continuous evaluation, red‑teaming, regression tests and live observability. Guardrails, datasets, dashboards and CI gates included.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-evals&quot; />
			</Head>

			<section className=&quot;min-h-screen pt-28 pb-20 px-4&quot;>
				<div className=&quot;max-w-6xl mx-auto&quot;>
					<div className=&quot;text-center mb-12&quot;>
						<h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>AI Evals & Observability</h1>
						<p className=&quot;mt-4 text-xl text-gray-300&quot;>Continuous evaluation, drift detection, and quality gates to ship safe, trustworthy AI.</p>
					</div>

					<div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10&quot;>
						<Card className=&quot;lg:col-span-2 bg-black/30 border border-cyan-500/30&quot;>
							<div className=&quot;p-6&quot;>
								<h2 className=&quot;text-2xl font-semibold text-white mb-4&quot;>What you get</h2>
								<ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
									{features.map((f) => (
										<li key={f} className=&quot;flex items-start gap-2 text-gray-200&quot;><Check className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; /> <span>{f}</span></li>
									))}
								</ul>
							</div>
						</Card>
						<Card className=&quot;bg-black/30 border border-cyan-500/30&quot;>
							<div className=&quot;p-6&quot;>
								<div className=&quot;text-3xl font-bold text-white&quot;>Starting at $99<span className=&quot;text-base text-gray-400&quot;>/month</span></div>
								<div className=&quot;text-sm text-gray-400 mt-1&quot;>14-day trial • Setup: 45 minutes</div>
								<div className=&quot;flex items-center gap-2 text-yellow-400 mt-3&quot;><TrendingUp className=&quot;w-4 h-4&quot; /> Reduce regressions 30–60%</div>
								<div className=&quot;mt-4&quot;>
									<Button href=&quot;/contact&quot; className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white&quot;>Request Demo</Button>
								</div>
							</div>
						</Card>
					</div>

					<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-12&quot;>
						<Card className=&quot;p-6 bg-black/30 border border-purple-500/30&quot;>
							<h3 className=&quot;text-lg font-semibold mb-2&quot;>Guardrails & Policies</h3>
							<p className=&quot;text-gray-300 text-sm&quot;>Safety checks for toxicity, PII/PHI, jailbreaks and policy enforcement before responses reach users.</p>
						</Card>
						<Card className=&quot;p-6 bg-black/30 border border-emerald-500/30&quot;>
							<h3 className=&quot;text-lg font-semibold mb-2&quot;>Observability</h3>
							<p className=&quot;text-gray-300 text-sm&quot;>Latency, cost, and quality KPIs with prompt/version diffs and canary alerts in CI and prod.</p>
						</Card>
						<Card className=&quot;p-6 bg-black/30 border border-cyan-500/30&quot;>
							<h3 className=&quot;text-lg font-semibold mb-2&quot;>Integrations</h3>
							<p className=&quot;text-gray-300 text-sm&quot;>GitHub Actions, CircleCI, Datadog, Slack and PagerDuty. SDKs for Node and Python.</p>
						</Card>
					</div>

					<div className=&quot;bg-black/20 border border-cyan-500/30 rounded-2xl p-6&quot;>
						<h3 className=&quot;text-xl font-semibold text-white mb-4 text-center&quot;>Contact</h3>
						<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 text-sm&quot;>
							<div className=&quot;flex items-center justify-center gap-2 text-cyan-400&quot;><Phone className=&quot;w-4 h-4&quot; /> <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo.mobile}</a></div>
							<div className=&quot;flex items-center justify-center gap-2 text-purple-400&quot;><Mail className=&quot;w-4 h-4&quot; /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
							<div className=&quot;flex items-center justify-center gap-2 text-emerald-400&quot;><MapPin className=&quot;w-4 h-4&quot; /> <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-xs&quot;>{contactInfo.address}</a></div>
						</div>
						<div className=&quot;text-center mt-6&quot;>
							<Button href=&quot;/services&quot; variant=&quot;outline&quot; className=&quot;border-cyan-500 text-cyan-400&quot;>Explore Services <ExternalLink className=&quot;w-4 h-4 ml-2&quot; /></Button>
						</div>
					</div>
				</div>
			</section>
		</QuantumHolographicMatrixBackground>
	)
=======
import React from 'react',;
import Head from 'next/head',;
import { Check, ShieldCheck, TrendingUp, Clock, Phone, Mail, MapPin, ExternalLink } from 'lucide-react',;
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground',;
import Card from '../components/ui/Card',;
import Button from '../components/ui/Button',;
export default function AIEvalsPage() {;
	const contactInfo = {;
		mobile: '+1 302 464 0950',;
		email: 'kleber@ziontechgroup.com',;
		address: '364 E Main St STE 1008 Middletown DE 19709',;
		website: 'https://ziontechgroup.com';
	};
	const features = [;
		'Golden datasets and synthetic evalsHallucination and grounding scoreToxicity, bias and safety metricsLLM version comparison reportsCI quality gates and webhooksLatency and cost KPIs with budgets';
	];
	return (;
		<QuantumHolographicMatrixBackground>;
			<Head>;
				<title>AI Evals & Observability | Zion Tech Group</title>;
				<meta name="description" content="Ship reliable AI with continuous evaluation, red‑teaming, regression tests and live observability. Guardrails, datasets, dashboards and CI gates included." />;
				<link rel="canonical" href="https://ziontechgroup.com/ai-evals" />;
			</Head>;
			<section className="min-h-screen pt-28 pb-20 px-4">;
				<div className="max-w-6xl mx-auto">;
					<div className="text-center mb-12">;
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Evals & Observability</h1>;
						<p className="mt-4 text-xl text-gray-300">Continuous evaluation, drift detection, and quality gates to ship safe, trustworthy AI.</p>;
					</div>;
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">;
						<Card className="lg:col-span-2 bg-black/30 border border-cyan-500/30">;
							<div className="p-6">;
								<h2 className="text-2xl font-semibold text-white mb-4">What you get</h2>;
								<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">;
									{features.map((f) => (;
										<li key={f} className="flex items-start gap-2 text-gray-200"><Check className="w-5 h-5 text-emerald-400 mt-0.5" /> <span>{f}</span></li>;
									))}
								</ul>;
							</div>;
						</Card>;
						<Card className="bg-black/30 border border-cyan-500/30">;
							<div className="p-6">;
								<div className="text-3xl font-bold text-white">Starting at $99<span className="text-base text-gray-400">/month</span></div>;
								<div className="text-sm text-gray-400 mt-1">14-day trial • Setup: 45 minutes</div>;
								<div className="flex items-center gap-2 text-yellow-400 mt-3"><TrendingUp className="w-4 h-4" /> Reduce regressions 30–60%</div>;
								<div className="mt-4">;
									<Button href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Request Demo</Button>;
								</div>;
							</div>;
						</Card>;
					</div>;
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">;
						<Card className="p-6 bg-black/30 border border-purple-500/30">;
							<h3 className="text-lg font-semibold mb-2">Guardrails & Policies</h3>;
							<p className="text-gray-300 text-sm">Safety checks for toxicity, PII/PHI, jailbreaks and policy enforcement before responses reach users.</p>;
						</Card>;
						<Card className="p-6 bg-black/30 border border-emerald-500/30">;
							<h3 className="text-lg font-semibold mb-2">Observability</h3>;
							<p className="text-gray-300 text-sm">Latency, cost, and quality KPIs with prompt/version diffs and canary alerts in CI and prod.</p>;
						</Card>;
						<Card className="p-6 bg-black/30 border border-cyan-500/30">;
							<h3 className="text-lg font-semibold mb-2">Integrations</h3>;
							<p className="text-gray-300 text-sm">GitHub Actions, CircleCI, Datadog, Slack and PagerDuty. SDKs for Node and Python.</p>;
						</Card>;
					</div>;
					<div className="bg-black/20 border border-cyan-500/30 rounded-2xl p-6">;
						<h3 className="text-xl font-semibold text-white mb-4 text-center">Contact</h3>;
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">;
							<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /> <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo.mobile}</a></div>;
							<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>;
							<div className="flex items-center justify-center gap-2 text-emerald-400"><MapPin className="w-4 h-4" /> <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs">{contactInfo.address}</a></div>;
						</div>;
						<div className="text-center mt-6">;
							<Button href="/services" variant="outline" className="border-cyan-500 text-cyan-400">Explore Services <ExternalLink className="w-4 h-4 ml-2" /></Button>;
						</div>;
					</div>;
				</div>;
			</section>;
		</QuantumHolographicMatrixBackground>;
	);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}