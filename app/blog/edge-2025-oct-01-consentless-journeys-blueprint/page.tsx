export const metadata = {
	title: 'Consentless Journeys Blueprint — Personalization <100ms, Zero‑PII',
	description:
		'Edge-native consentless analytics and feature flags for sub-100ms personalization without collecting PII.',
};

export default function Page() {
	return (
		<div className="text-left">
			<div className="text-left">
				<div className="text-left">Edge • 7 min read • 2025-10-01</div>"
				<h1 className="text-left">Consentless Journeys Blueprint</h1>"
				<p className="text-left">
					Edge-runtime flags and attested analytics enable privacy-first experiences under 100ms with zero PII
					collection and full auditability.
				</p>

				<div className="text-left">
					<h2 className="text-left">Key Ideas</h2>"
					<ul className="text-left">
						<li>Edge feature flags + signed evaluations for decisions near users.</li>
						<li>Anonymous cohorts and on-device context for personalization without identifiers.</li>
						<li>Zero-PII analytics with proofs and verifiable processing.</li>
						<li>Regional isolation and policy-as-code for compliance.</li>
					</ul>

					<h2 className="text-left">Blueprint</h2>"
					<p className="text-left">
						Evaluate user context at the edge, select variant via policy-guarded flags, and emit attested metrics.
						Use content-addressed caches and regional data boundaries by default.
					</p>
				</div>

				<div className="text-left">
					<a href="/blog" className="text-left">← Back to Blog</a>"
				</div>
			</div>
		</div>
	);
}

