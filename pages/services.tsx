import Head from 'next/head'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h1>
				<p className="mt-3 max-w-2xl text-gray-700">From strategy to production, we deliver outcomes fast.</p>

				<div className="mt-10 grid gap-6 sm:grid-cols-2">
					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">AI Autonomous Systems</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Sales/CS multi-agent copilots</li>
							<li>RAG and workflow orchestration</li>
							<li>Observability and guardrails</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Cloud Platforms</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Serverless and Kubernetes</li>
							<li>Data pipelines and ML ops</li>
							<li>FinOps and SRE practices</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Cybersecurity</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Zero-trust frameworks</li>
							<li>Compliance and threat modeling</li>
							<li>Incident response playbooks</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Micro SaaS</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Rapid product delivery</li>
							<li>Billing, auth, and analytics</li>
							<li>Growth experiments</li>
						</ul>
					</section>
				</div>

				<div className="mt-10">
					<a className="rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/contact">
						Get in touch
					</a>
				</div>
			</main>
		</>
	)
}
