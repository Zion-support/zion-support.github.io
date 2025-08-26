export default function Solutions(){
	return (
		<main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
			<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Solutions</h1>
			<p className="mt-3 max-w-3xl text-gray-700">Explore our end-to-end solutions spanning AI systems, cloud platforms, and cybersecurity. Detailed solution briefs are coming soon.</p>
			<section className="mt-8 grid gap-6 sm:grid-cols-2">
				<article className="rounded-lg border p-6">
					<h2 className="text-xl font-medium">AI Platforms</h2>
					<p className="mt-2 text-gray-700">Autonomous agents, RAG, and decision engines tailored to your workflows.</p>
				</article>
				<article className="rounded-lg border p-6">
					<h2 className="text-xl font-medium">Cloud Modernization</h2>
					<p className="mt-2 text-gray-700">Serverless, containers, observability, and resilient architectures.</p>
				</article>
				<article className="rounded-lg border p-6">
					<h2 className="text-xl font-medium">Security & Compliance</h2>
					<p className="mt-2 text-gray-700">Zero-trust, threat detection, incident response, and governance.</p>
				</article>
				<article className="rounded-lg border p-6">
					<h2 className="text-xl font-medium">Data & MLOps</h2>
					<p className="mt-2 text-gray-700">Feature stores, pipelines, model serving, and monitoring.</p>
				</article>
			</section>
			<section className="mt-10 rounded-lg border bg-gray-50 p-6">
				<h2 className="text-xl font-medium">How we engage</h2>
				<ul className="mt-2 list-disc pl-5 text-gray-700">
					<li>Implementation projects: $5,000–$50,000 depending on scope</li>
					<li>Managed services: Micro SaaS $99–$999/mo · AI $499–$4,999/mo · IT $2,000–$15,000/mo</li>
					<li>Security-first architecture, observability, and SLAs available</li>
				</ul>
				<p className="mt-3 text-sm text-gray-700">Call <a className="text-blue-600 underline" href="tel:+13024640950">+1 302 464 0950</a>, email <a className="text-blue-600 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>, or visit <a className="text-blue-600 underline" href="https://ziontechgroup.com">ziontechgroup.com</a>. Address: 364 E Main St STE 1008 Middletown DE 19709</p>
				<div className="mt-4 grid gap-3 sm:grid-cols-2">
					<a href="/pricing" className="inline-block rounded border px-4 py-2 text-blue-700 hover:bg-blue-50">See pricing guidance</a>
					<a href="/request-quote" className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Request a custom quote</a>
				</div>
			</section>
		</main>
	)
}