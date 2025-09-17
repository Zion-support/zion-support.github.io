import React from 'react';
const AutonomousOpsPlaybook2026: React.FC = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-4xl md:text-5xl font-bold mb-6">Autonomous Ops Playbook 2026</h1>
			<p className="text-white/80 text-lg mb-8 max-w-3xl">
				Operational guidance for production-grade autonomous systems: incident simulation, rollback automations, and compliance-grade observability.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="glass-effect rounded-2xl p-6">
					<h2 className="text-2xl font-semibold mb-2">Key chapters</h2>
					<ol className="list-decimal list-inside text-white/80 space-y-1">
						<li>Agentic incident simulation</li>
						<li>Policy-driven rollbacks</li>
						<li>Runtime evals and SLOs</li>
					</ol>
				</div>
				<div className="glass-effect rounded-2xl p-6">
					<h2 className="text-2xl font-semibold mb-2">Resources</h2>
					<a className="btn-secondary" href="/news">See latest updates →</a>
				</div>
			</div>
		</div>
	);
};



export default AutonomousOpsPlaybook2026;
