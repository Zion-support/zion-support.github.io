import Link from 'next/link';

export default function AICopilotsForEngineeringPage() {
	return (
		<div className='min-h-screen'>
			<article className='prose prose-lg max-w-3xl mx-auto'>
				<header>
					<h1>AI Copilots for Engineering Teams</h1>
					<p className='text-gray-500'>September 11, 2025 • AI • DevEx • Productivity</p>
				</header>

				<p>
					AI copilots are moving from novelty to necessity. High-performing teams are using
					context-aware assistants to accelerate code reviews, reduce toil, and improve
					release quality—without sacrificing security or governance.
				</p>

				<h2>What Effective Copilots Do</h2>
				<ul>
					<li>Suggest safe changes grounded in your repo, docs, and style guides</li>
					<li>Automate boilerplate PRs: dependency bumps, config sync, policy fixes</li>
					<li>Flag risky diffs using tests, static analysis, and past incidents</li>
					<li>Create runbooks and code examples tailored to your stack</li>
				</ul>

				<h2>Reference Architecture</h2>
				<p>
					Use a private vector index with repository embeddings, CI logs, and API docs. Route
					requests through a policy layer for secrets redaction and PII controls. Employ
					model-tiering: fast small models for autocomplete, larger models for review and
					refactors. Cache aggressively and track evals per repo to avoid regressions.
				</p>

				<h2>Rollout Plan</h2>
				<ol>
					<li>Pilot with one service and a champion team</li>
					<li>Define guardrails (file scopes, write permissions, approval rules)</li>
					<li>Measure impact: PR cycle time, escaped defects, on-call minutes</li>
					<li>Scale with templates for onboarding new repos</li>
				</ol>

				<h2>Results We Typically See</h2>
				<ul>
					<li>20–35% reduction in PR lead time</li>
					<li>10–20% fewer post-merge incidents via automated checks</li>
					<li>Happier engineers with less context switching and toil</li>
				</ul>

				<div className='mt-10 p-6 border rounded-xl bg-blue-50'>
					<h3>Interested in deploying a secure engineering copilot?</h3>
					<p>
						We integrate with GitHub, GitLab, Bitbucket, and on-prem SCMs, with SOC2-ready
						guardrails.
					</p>
					<div className='mt-4 flex gap-4'>
						<Link href='/contact' className='bg-blue-600 text-white px-5 py-2 rounded-lg'>
							Talk to us
						</Link>
						<Link href='mailto:kleber@ziontechgroup.com' className='px-5 py-2 rounded-lg border border-blue-600 text-blue-700'>
							Email
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
}

