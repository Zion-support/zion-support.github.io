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
		</main>
	)
}