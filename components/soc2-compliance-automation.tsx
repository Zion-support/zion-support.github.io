import React from 'react',
import SEO from '../components/SEO',
import Link from 'next/link',
export default function SOC2ComplianceAutomationPage() {
	return (
		<>
			<SEO title=&quot;SOC 2 Compliance Automation&quot; description=&quot;Automate evidence collection, controls mapping, and auditor-ready reports. Reduce audit time and ensure continuous compliance.&quot; />
			<section className=&quot;relative pt-28 pb-16 md:pt-36 md:pb-24&quot;>
				<div className=&quot;container mx-auto px-4&quot;>
					<h1 className=&quot;text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple&quot;>SOC 2 Compliance Automation</h1>
					<p className=&quot;mt-6 text-lg text-gray-300 max-w-3xl&quot;>
						Automate SOC 2 readiness with continuous controls, evidence pipelines, and prebuilt auditor workflows. Integrates with cloud providers and ticketing systems.
					</p>

					<div className=&quot;mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
						{[
							{ title: 'Controls Library', desc: 'Mapped to SOC 2 Trust Service Criteria with policy templates.' },
							{ title: 'Evidence Automation', desc: 'Pull evidence from cloud, CI, ticketing, security tools.' },
							{ title: 'Vendor Risk', desc: 'Automated questionnaires, tracking, and remediation workflows.' },
							{ title: 'Asset Inventory', desc: 'Infrastructure and device inventory with configuration checks.' },
							{ title: 'Workflow & Tasks', desc: 'Assign remediation tasks, SLAs, and approvals.' },
							{ title: 'Audit Room', desc: 'Share evidence securely with auditors, immutable logs.' }
						].map((f) => (
							<div key={f.title} className=&quot;rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
								<h3 className=&quot;text-lg font-semibold text-white&quot;>{f.title}</h3>
								<p className=&quot;mt-2 text-sm text-gray-300&quot;>{f.desc}</p>
							</div>
						))}
					</div>

					<div className=&quot;mt-12&quot;>
						<h2 className=&quot;text-2xl font-semibold&quot;>Pricing</h2>
						<div className=&quot;mt-6 grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
							<div className=&quot;rounded-2xl border border-pink-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Starter</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>SOC 2 readiness, core integrations.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$290<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-cyan-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Growth</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Vendor risk, SSO, SIEM, ticketing.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$690<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-purple-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Enterprise</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Custom controls, private cloud, audit support.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>Custom</p>
							</div>
						</div>
<<<<<<< HEAD
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.vanta.com/" target="_blank" rel="noreferrer">Vanta</a>, <a className="underline hover:text-cyan-300" href="https://drata.com/" target="_blank" rel="noreferrer">Drata</a>, <a className="underline hover: text-cyan-300" href="https://securityscorecard.com/" target="_blank" rel="noreferrer">SecurityScorecard</a>.</p>
=======
						<p className=&quot;mt-4 text-sm text-gray-400&quot;>Market references: <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://www.vanta.com/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Vanta</a>, <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://drata.com/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Drata</a>, <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://securityscorecard.com/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>SecurityScorecard</a>.</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
					</div>

					<div className=&quot;mt-12 flex flex-wrap items-center gap-4&quot;>
						<Link href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-pink-400 text-black font-semibold&quot;>Automate SOC 2</a>
						<a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20&quot;>Email: kleber@ziontechgroup.com</a>
						<span className=&quot;text-gray-400&quot;>Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</>
	)
}