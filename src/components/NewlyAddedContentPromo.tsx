import React from 'react';

const NewlyAddedContentPromo: React.FC = () => {
	return (
		<section className="py-6 bg-blue-50 border-y border-blue-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid gap-4 md:grid-cols-2">
					<a href="/pages/NewAIResearchBreakthrough2026" className="block bg-white rounded-xl border border-blue-200 p-5 shadow-sm hover:shadow-md transition-shadow" aria-label="Read AI Research Breakthrough 2026">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">RB</div>
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Research</span>
									<span className="text-xs text-gray-500">New</span>
								</div>
								<h3 className="text-lg font-semibold text-gray-900">AI Research Breakthrough 2026</h3>
								<p className="text-gray-600 text-sm">Real-time routing, grounded generation, and safety-aware pipelines.</p>
							</div>
							<div className="text-blue-600 font-medium whitespace-nowrap">Read →</div>
						</div>
					</a>
					<a href="/pages/AutonomousOpsPlaybook2026" className="block bg-white rounded-xl border border-blue-200 p-5 shadow-sm hover:shadow-md transition-shadow" aria-label="Read Autonomous Ops Playbook 2026">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center text-xl font-bold">AO</div>
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Operations</span>
									<span className="text-xs text-gray-500">New</span>
								</div>
								<h3 className="text-lg font-semibold text-gray-900">Autonomous Ops Playbook 2026</h3>
								<p className="text-gray-600 text-sm">Incident drills, policy rollbacks, and compliance observability.</p>
							</div>
							<div className="text-purple-600 font-medium whitespace-nowrap">Read →</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default NewlyAddedContentPromo;

