<<<<<<< HEAD
import React from 'react',;
import SEO from '../components/SEO',;
import { Check, ExternalLink } from 'lucide-react',;
;
export default function BrowserAutomationCloudPage() {;
	const features = [;
		'Parallel Playwright/Puppeteer executionQueued jobs with retries and rate limits',;
		'Artifacts:HAR, traces, screenshots, videosRotating proxies and geo targeting',;
		'Webhook callbacks and REST API';
	],;
;
	return (;
		<>;
			<SEO title="Browser Automation Cloud" description="Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies." />;
			<main id="main" className="container mx-auto px-4 py-24">;
				<section className="max-w-5xl mx-auto">;
					<h1 className="text-4xl font-extrabold tracking-tight">Browser Automation Cloud</h1>;
					<p className="mt-4 text-lg text-gray-300">Scale Playwright/Puppeteer tasks for testing, scraping, and robotic process automation with enterprise-grade reliability.</p>;
					<div className="mt-8 grid sm:grid-cols-2 gap-6">;
						{features.map((f) => (;
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">;
								<Check className="w-5 h-5 text-cyan-400 mt-1" />;
								<p className="text-gray-200">{f}</p>;
							</div>;
						))}
					</div>;
					<div className="mt-8 flex flex-wrap items-center gap-4">;
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Start from $99/mo</a>;
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>;
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">;
							<ExternalLink className="w-4 h-4" /> Playwright;
							</a>;
						<a href="https://pptr.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">;
							<ExternalLink className="w-4 h-4" /> Puppeteer;
							</a>;
					</div>;
				</section>;
			</main>;
		</>;
	);
=======
import React from 'react',
import SEO from '../components/SEO',
import { Check, ExternalLink } from 'lucide-react',

export default function BrowserAutomationCloudPage() {
	const features = [
		'Parallel Playwright/Puppeteer executionQueued jobs with retries and rate limitsArtifacts: HAR, traces, screenshots, videosRotating proxies and geo targetingWebhook callbacks and REST API'
	],

	return (
		<>
			<SEO title=&quot;Browser Automation Cloud&quot; description=&quot;Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies.&quot; />
			<main id=&quot;main&quot; className=&quot;container mx-auto px-4 py-24&quot;>
				<section className=&quot;max-w-5xl mx-auto&quot;>
					<h1 className=&quot;text-4xl font-extrabold tracking-tight&quot;>Browser Automation Cloud</h1>
					<p className=&quot;mt-4 text-lg text-gray-300&quot;>Scale Playwright/Puppeteer tasks for testing, scraping, and robotic process automation with enterprise-grade reliability.</p>
					<div className=&quot;mt-8 grid sm:grid-cols-2 gap-6&quot;>
						{features.map((f) => (
							<div key={f} className=&quot;flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10&quot;>
								<Check className=&quot;w-5 h-5 text-cyan-400 mt-1&quot; />
								<p className=&quot;text-gray-200&quot;>{f}</p>							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $99/mo</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Playwright							</a>
						<a href=&quot;https://pptr.dev/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> Puppeteer
							</a>
					</div>
				</section>
			</main>
		</>
	)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
