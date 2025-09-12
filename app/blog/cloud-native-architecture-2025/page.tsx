import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function CloudNativeArchitecture2025Page() {
	return (
		<div className="min-h-screen bg-white">
			<SEO
				title="Cloud-Native Architecture in 2025: Scale, Resilience, Cost Control"
				description="Modern cloud-native patterns for 2025: platform engineering, multi-tenancy, resilience, cost governance, and DevEx to build scalable, efficient systems."
				keywords="cloud native 2025, platform engineering, resilience, kubernetes, cost optimization, devops"
				url="/blog/cloud-native-architecture-2025"
			/>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-12">
					<div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-6 py-3 mb-8">
						<span className="text-lg font-bold">☁️ CLOUD ARCHITECTURE</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Cloud-Native Architecture in 2025
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
						Build for scale and resilience with platform engineering, paved roads, and smart cost governance.
					</p>
					<div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
						<span>📅 September 12, 2025</span>
						<span>•</span>
						<span>⏱️ 14 min read</span>
						<span>•</span>
						<span>👤 Zion Tech Group</span>
					</div>
				</div>

				<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
					<div className="grid md:grid-cols-3 gap-6 text-center">
						<div>
							<div className="text-4xl font-bold mb-2">99.95%</div>
							<div className="text-blue-100">Target Availability</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">40%</div>
							<div className="text-blue-100">Infra Cost Reduction</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">5x</div>
							<div className="text-blue-100">Deploy Frequency</div>
						</div>
					</div>
				</div>

				<div className="prose prose-lg max-w-none mb-12">
					<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Core Principles</h2>
						<ul className="list-disc pl-6 text-gray-700">
							<li>Platform engineering with golden paths and self-service templates</li>
							<li>Resilience by design: SLOs, error budgets, chaos drills, multi-AZ</li>
							<li>Cost governance: budgets, alerts, rightsizing, FinOps reviews</li>
							<li>Observability: traces, metrics, logs, SLO dashboards</li>
							<li>Security & compliance baked in: policy as code, SBOM, signed artifacts</li>
						</ul>
					</div>

					<div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-8">
						<h3 className="text-2xl font-bold text-emerald-900 mb-4">Get Expert Guidance</h3>
						<p className="text-lg text-gray-700 mb-6">
							Accelerate your platform journey. We help teams implement pragmatic cloud-native patterns with measurable outcomes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center">
								Talk to an Expert
							</Link>
							<Link href="/blog" className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
								Read More Articles
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

