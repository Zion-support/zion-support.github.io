import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Agent Risk Budgets: Safe Autonomy at Scale',
  description:
    'Explicit budgets, approvals, and rollback triggers for agent actions across orgs.',
};

export default function Page() {
	return (
		<div>
			<h1>Enterprise Agent Risk Budgets: Safe Autonomy at Scale</h1>
			<p>Published Sep 29, 2025 • 9 min read</p>
			<p>
				Operationalize autonomy with explicit budgets per action, approval ladders, and instantaneous rollback.
				This playbook shows how to wire policy tests into CI and production, instrument live canaries, and
				prove reliability with SLOs.
			</p>
			<ul>
				<li>Risk budgets per tool and environment with audit trails</li>
				<li>Approval workflows mapped to risk classes</li>
				<li>Inline policy tests and KPI-linked canaries</li>
				<li>Rollback triggers and incident playbooks under 60 seconds</li>
			</ul>
			<p>
				Adopt a scorecard that correlates agent outcomes to business metrics, ensuring speed without surprises.
			</p>
			<div className="mt-10">
				<ArrowRight href="/blog" className="text-indigo-600 font-semibold">← Back to Blog</ArrowRight>
			</div>
		</div>
	);
}
