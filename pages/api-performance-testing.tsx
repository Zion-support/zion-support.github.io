import React from 'react'
import SEO from '../components/SEO'
import { Check, ExternalLink } from 'lucide-react',

export default function ApiPerformanceTestingPage() {
	const features = [
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	],

	return (
		<div className=&quot;relative isolate&quot;>
			<section className=&quot;px-6 lg:px-10 py-16 lg:py-24&quot;>
				<div className=&quot;max-w-6xl mx-auto&quot;>
					<h1 className=&quot;text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent&quot;>API Performance Testing</h1>
					<p className=&quot;mt-4 text-gray-300 max-w-3xl&quot;>Load, latency, reliability and regression testing for APIs with synthetic traffic generation, SLO tracking, distributed load injectors, and CI/CD integration. Benchmark providers, catch performance drift, and ship with confidence.</p>
import React from 'react';
import SEO from '../components/SEO';

export default function ApiPerformanceTestingPage() {_const _features = [
		'k6/Gatling-compatible test runner', _'SLO-aware latency reports', _'Regression baselines per endpoint', _'CI checks and PR annotations', _'Synthetic traffic for staging'
	];

	return (_<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">API Performance Testing</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Load, _latency, _reliability and regression testing for APIs with synthetic traffic generation, _SLO tracking, _distributed load injectors, _and CI/CD integration. Benchmark providers, _catch performance drift, _and ship with confidence.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

					<div className=&quot;mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
						{[
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' },
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' },
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' }].map((f) => (
							<div key={f.title} className=&quot;rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
								<h3 className=&quot;text-lg font-semibold text-white&quot;>{f.title}</h3>
								<p className=&quot;mt-2 text-sm text-gray-300&quot;>{f.desc}</p>
							</div>
						))}
					</div>

					<div className=&quot;mt-14&quot;>
						<h2 className=&quot;text-2xl font-semibold&quot;>Pricing</h2>
						<div className=&quot;mt-6 grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
							<div className=&quot;rounded-2xl border border-cyan-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Starter</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Up to 250 RPS, 1 region, CI integration.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$149<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-fuchsia-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Growth</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Up to 2k RPS, 3 regions, regression gates.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$590<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-emerald-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Enterprise</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Unlimited scale, private agents, SSO, and SRE support.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover: text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
					</div>

					<div className=&quot;mt-14 flex flex-wrap items-center gap-4&quot;>
						<Link href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold&quot;>Talk to Sales</Link>
						<a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20&quot;>Email: kleber@ziontechgroup.com</Link>
						<span className=&quot;text-gray-400&quot;>Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	)
}