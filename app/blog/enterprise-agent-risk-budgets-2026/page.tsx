import Link from 'next/link';

export const metadata = {
	title: 'Enterprise Agent Risk Budgets: Safe Autonomy at Scale',
	description: 'Explicit budgets, approvals, and rollback triggers for agent actions across orgs.'
};

export default function Page() {
	return (
		<div className="max-w-3xl mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-4">Enterprise Agent Risk Budgets: Safe Autonomy at Scale</h1>
			<p className="text-gray-600 mb-8">Published Sep 29, 2025 • 9 min read</p>
			<p className="mb-4">
				Operationalize autonomy with explicit budgets per action, approval ladders, and instantaneous rollback.
				This playbook shows how to wire policy tests into CI and production, instrument live canaries, and
				prove reliability with SLOs.
			</p>
			<ul className="list-disc pl-6 space-y-2 mb-8">
				<li>Risk budgets per tool and environment with audit trails</li>
				<li>Approval workflows mapped to risk classes</li>
				<li>Inline policy tests and KPI-linked canaries</li>
				<li>Rollback triggers and incident playbooks under 60 seconds</li>
			</ul>
			<p className="mb-8">
				Adopt a scorecard that correlates agent outcomes to business metrics, ensuring speed without surprises.
			</p>
			<div className="mt-10">
				<Link href="/blog" className="text-indigo-600 font-semibold">← Back to Blog</Link>
			</div>
		</div>
	);
}

