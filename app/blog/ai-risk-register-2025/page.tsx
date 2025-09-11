import Link from 'next/link';

export default function AIRiskRegister2025Page() {
	return (
		<div className='min-h-screen'>
			<nav className='mb-6'>
				<Link href='/blog' className='text-blue-600 hover:underline'>
					← Back to Blog
				</Link>
			</nav>
			<article className='prose prose-lg max-w-none'>
				<h1>AI Risk Register 2025: Practical Controls and Runbooks</h1>
				<p className='text-gray-500'>Published: 2025-09-11 • Tags: AI, Governance, Risk</p>
				<p>
					A living AI risk register aligns teams on failure modes, mitigations, and owners. This
					post provides a pragmatic template that scales from pilot to enterprise rollout.
				</p>
				<h2>Top risks and mitigations</h2>
				<ul>
					<li>Prompt injection: input sanitization, retrieval boundaries, and output validation</li>
					<li>PII leakage: data minimization, redaction, and access policies</li>
					<li>Cost overruns: budget guardrails, caching tiers, and request shaping</li>
				</ul>
				<h2>Operationalizing the register</h2>
				<ul>
					<li>Assign owners, SLAs, and detection methods for each risk</li>
					<li>Link to concrete runbooks with escalation paths and rollback steps</li>
					<li>Review monthly with metrics and near-miss analysis</li>
				</ul>
				<p>
					Need a tailored risk register and controls?{' '}
					<Link href='/contact' className='text-blue-600 hover:underline'>We can help</Link>.
				</p>
			</article>
		</div>
	);
}

