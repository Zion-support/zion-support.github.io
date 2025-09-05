<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
import { Check, ExternalLink } from 'lucide-react',

export default function ApiPerformanceTestingPage() {
	const features = [
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging'
	],

	return (
		<>
			<SEO title=&quot;API Performance Testing&quot; description=&quot;Load, latency and regression testing-as-a-service with CI and SLOs.&quot; />
			<main id=&quot;main&quot; className=&quot;container mx-auto px-4 py-24&quot;>
				<section className=&quot;max-w-5xl mx-auto&quot;>
					<h1 className=&quot;text-4xl font-extrabold tracking-tight&quot;>API Performance Testing</h1>
					<p className=&quot;mt-4 text-lg text-gray-300&quot;>Ship with confidence using automated performance tests and guardrails integrated into your pipeline.</p>
					<div className=&quot;mt-8 grid sm:grid-cols-2 gap-6&quot;>
						{features.map((f) => (
							<div key={f} className=&quot;flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10&quot;>
								<Check className=&quot;w-5 h-5 text-cyan-400 mt-1&quot; />
								<p className=&quot;text-gray-200&quot;>{f}</p>
							</div>
						))}
					</div>
<<<<<<< HEAD
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $129/mo</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>
						<a href="https://grafana.com/docs/k6/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> k6 Docs
=======
					<div className=&quot;mt-8 flex flex-wrap items-center gap-4&quot;>
						<a href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200&quot;>Start from $129/mo</a>
						<a href=&quot;/market-pricing&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10&quot;>Market Pricing</a>
						<a href=&quot;https://grafana.com/docs/k6/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> k6 Docs
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
							</a>
						<a href=&quot;https://gatling.io/open-source/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> Gatling OSS
							</a>
					</div>
				</section>
			</main>
		</>
	)
=======
import React from 'react',;
import SEO from '../components/SEO',;
import { Check, ExternalLink } from 'lucide-react',;
export default function ApiPerformanceTestingPage() {;
	const features = [;
		'k6/Gatling-compatible test runnerSLO-aware latency reportsRegression baselines per endpointCI checks and PR annotationsSynthetic traffic for staging';
	];
	return (;
		<>;
			<SEO title="API Performance Testing" description="Load, latency and regression testing-as-a-service with CI and SLOs." />;
			<main id="main" className="container mx-auto px-4 py-24">;
				<section className="max-w-5xl mx-auto">;
					<h1 className="text-4xl font-extrabold tracking-tight">API Performance Testing</h1>;
					<p className="mt-4 text-lg text-gray-300">Ship with confidence using automated performance tests and guardrails integrated into your pipeline.</p>;
					<div className="mt-8 grid sm:grid-cols-2 gap-6">;
						{features.map((f) => (;
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">;
								<Check className="w-5 h-5 text-cyan-400 mt-1" />;
								<p className="text-gray-200">{f}</p>;
							</div>;
						))}
					</div>;
					<div className="mt-8 flex flex-wrap items-center gap-4">;
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $129/mo</a>;
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>;
						<a href="https://grafana.com/docs/k6/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">;
							<ExternalLink className="w-4 h-4" /> k6 Docs;
							</a>;
						<a href="https://gatling.io/open-source/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">;
							<ExternalLink className="w-4 h-4" /> Gatling OSS;
							</a>;
					</div>;
				</section>;
			</main>;
		</>;
	);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}