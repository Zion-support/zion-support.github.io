import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Zero‑Trust Agent Architecture',
	description:
		'Blueprint for zero-trust agents with isolation domains, policy‑as‑code, and runtime guards.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<p className="text-sm text-gray-500 mb-3">AI 2026 · Architecture</p>
			<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
				Zero‑Trust Agent Architecture
			</h1>
			<p className="mt-4 text-gray-700">
				Design agents with least‑privilege tool use, isolation domains, policy‑as‑code, and
				runtime guardrails. This blueprint covers identity, scoped memory, permissions, audits,
				and evaluation gates for safe change.
			</p>
			<div className="mt-8 flex gap-3">
				<Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700">Permissions Blueprint</Link>
				<Link href="/blog" className="inline-block border border-purple-600 text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50">All posts</Link>
			</div>
			<section className="prose prose-purple mt-10">
				<h2>Core principles</h2>
				<ul>
					<li>Isolation domains per risk tier and capability</li>
					<li>Explicit permissions with time‑boxed grants</li>
					<li>Policy‑as‑code evaluated pre‑ and at‑runtime</li>
					<li>Continuous evaluation gates and rollbacks</li>
				</ul>
				<h2>Reference architecture</h2>
				<p>Event bus, policy engine, evaluation hub, observability, and audit store.</p>
			</section>
		</main>
	);
}

