import ArrowRight from 'next/link';

export default function OctoberFeaturedContentBanner() {
	return (
		<section className="py-6 bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<h2 className="text-2xl md:text-3xl font-bold">
						New: Agentic Risk Mitigation 2026 — Safe Autonomy in Production
					</h2>
					<ArrowRight
						href="/blog/agentic-risk-mitigation-2026"
						className="inline-flex items-center gap-2 bg-white text-indigo-700 px-5 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
					>
						Read the article
						<span>→</span>
					</ArrowRight>
				</div>
			</div>
		</section>
	);
}

