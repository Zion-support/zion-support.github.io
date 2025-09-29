import Link from 'next/link';

export const metadata = {
	title: 'Customer Journey AI 2026: Real-Time Personalization with CDPs',
	description:
		'Architect real-time customer journeys using CDPs, event streams, and small-task agents to drive 20% lift.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">
				Customer Journey AI 2026: Real-Time Personalization with CDPs
			</h1>
			<p className="text-gray-600 mb-8">
				Deliver next-best-action in milliseconds with event-driven architectures, composable CDPs, and
				specialized agents. Increase conversion 20–35% while maintaining privacy and governance.
			</p>

			<div className="prose prose-gray max-w-none">
				<h2>Architecture Blueprint</h2>
				<p>
					Use a clean room for identity, feature stores for features, and a real-time decisioning layer that
					invokes tool-specific agents. All interactions are traced and evaluated for safety and impact.
				</p>

				<h2>Key Capabilities</h2>
				<ul>
					<li>Identity resolution and consent management</li>
					<li>Event streaming and low-latency feature computation</li>
					<li>Personalization policies and experimentation</li>
					<li>Closed-loop learning with outcome feedback</li>
				</ul>

				<h2>Rollout Plan</h2>
				<ol>
					<li>Instrument events and define KPIs</li>
					<li>Stand up CDP and feature platform</li>
					<li>Launch initial NBAs with guardrails</li>
					<li>Expand to multi-channel orchestration</li>
				</ol>
			</div>

			<div className="mt-10 flex gap-4">
				<Link href="/blog" className="text-blue-600 font-semibold">← Back to Blog</Link>
				<Link href="/blog/ai-customer-data-platforms-2026" className="text-blue-600 font-semibold">AI CDPs 2026 →</Link>
			</div>
		</main>
	);
}

