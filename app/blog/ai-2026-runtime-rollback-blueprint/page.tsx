import { Link } from 'react-router-dom';

export const metadata = {
	title: 'AI 2026: Runtime Rollback Blueprint — Instant Recovery with KPI Canaries',
	description: 'Design instant rollback with KPI‑linked canaries, budgets, and guardrails to keep autonomy safe without slowing teams.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
			<h1>AI 2026: Runtime Rollback Blueprint</h1>
			<p>
				Ship faster with safety budgets and deterministic rollback triggers wired to live KPIs. This
				blueprint shows how to combine PR policy tests, KPI‑linked canaries, and rollout
				evaluations to contain incidents in seconds without slowing delivery velocity.
			</p>
			<ul>
				<li>Budgets: explicit error and risk budgets that gate actions and rollbacks</li>
				<li>Canaries: KPI‑linked checks with shadow routes and safe abort criteria</li>
				<li>Tooling: traces, approvals, and attestations for confident automation</li>
			</ul>
			<p>
				Related reads: <Link to="/blog/ai-2026-live-guardrails-blueprint">Live Guardrails 2026</Link>{' '}
				and <Link to="/blog/agent-release-runbooks-2026">Agent Release Runbooks 2026</Link>.
			</p>
			<p>
				Continue exploring in our <Link to="/blog">Blog</Link>.
			</p>
		</main>
	);
}

