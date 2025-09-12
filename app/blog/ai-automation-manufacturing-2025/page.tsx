import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIAutomationManufacturing2025Page() {
	return (
		<div className="min-h-screen bg-white">
			<SEO
				title="AI Automation in Manufacturing 2025: Yield, Throughput, Quality"
				description="End-to-end AI automation patterns for manufacturing: predictive quality, scheduling, robotics integration, and cost-performance tradeoffs."
				keywords="manufacturing ai 2025, predictive quality, scheduling, robotics, throughput, yield"
				url="/blog/ai-automation-manufacturing-2025"
			/>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-12">
					<div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full px-6 py-3 mb-8">
						<span className="text-lg font-bold">🏭 MANUFACTURING AI</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						AI Automation in Manufacturing 2025
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
						Increase yield and throughput with predictive, data-driven automation from line to plant.
					</p>
					<div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
						<span>📅 September 12, 2025</span>
						<span>•</span>
						<span>⏱️ 11 min read</span>
						<span>•</span>
						<span>👤 Zion Tech Group</span>
					</div>
				</div>

				<div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white mb-12">
					<div className="grid md:grid-cols-3 gap-6 text-center">
						<div>
							<div className="text-4xl font-bold mb-2">+7.5%</div>
							<div className="text-amber-100">Yield Improvement</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">-28%</div>
							<div className="text-amber-100">Downtime</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">+19%</div>
							<div className="text-amber-100">Throughput</div>
						</div>
					</div>
				</div>

				<div className="prose prose-lg max-w-none mb-12">
					<div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Key Applications</h2>
						<ul className="list-disc pl-6 text-gray-700">
							<li>Predictive quality and defect detection on the line</li>
							<li>Dynamic scheduling and constraint-aware optimization</li>
							<li>Robotics vision, path planning, and safety envelopes</li>
							<li>Energy optimization and cost-aware production planning</li>
							<li>Traceability with digital twins and event streams</li>
						</ul>
					</div>

					<div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-8">
						<h3 className="text-2xl font-bold text-emerald-900 mb-4">Transform Your Plant</h3>
						<p className="text-lg text-gray-700 mb-6">
							We deliver practical AI automation that integrates with MES, historians, and PLCs.
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

