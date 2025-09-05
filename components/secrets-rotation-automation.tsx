import React from 'react',
import SEO from '../components/SEO',
import { Check, ExternalLink } from 'lucide-react',

export default function SecretsRotationAutomationPage() {
	const features = [
		'Automated key and secret rotationJIT credentials with expirationsPolicy approvals and audit trailsCI/CD integration (GitHub Actions, CircleCI)Cloud KMS and Vault support'
	],

	return (
		<>
			<SEO title=&quot;Secrets Rotation Automation&quot; description=&quot;Automate key and secret rotation across cloud and CI/CD with approvals and audit logs.&quot; />
			<main id=&quot;main&quot; className=&quot;container mx-auto px-4 py-24&quot;>
				<section className=&quot;max-w-5xl mx-auto&quot;>
					<h1 className=&quot;text-4xl font-extrabold tracking-tight&quot;>Secrets Rotation Automation</h1>
					<p className=&quot;mt-4 text-lg text-gray-300&quot;>Keep credentials short-lived and compliant. Automate rotations across providers with full auditability.</p>
					<div className=&quot;mt-8 grid sm:grid-cols-2 gap-6&quot;>
						{features.map((f) => (
							<div key={f} className=&quot;flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10&quot;>
								<Check className=&quot;w-5 h-5 text-cyan-400 mt-1&quot; />
								<p className=&quot;text-gray-200&quot;>{f}</p>
							</div>
						))}
					</div>
<<<<<<< HEAD
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $199/mo</a>
						<a href="/pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Pricing</a>
						<a href="https://developer.hashicorp.com/vault" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
=======
					<div className=&quot;mt-8 flex flex-wrap items-center gap-4&quot;>
						<a href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200&quot;>Start from $199/mo</a>
						<a href=&quot;/pricing&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10&quot;>Pricing</a>
						<a href=&quot;https://developer.hashicorp.com/vault&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> HashiCorp Vault Docs
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
							</a>
						<a href=&quot;https://cloud.google.com/kms&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300&quot;>
							<ExternalLink className=&quot;w-4 h-4&quot; /> Google Cloud KMS
							</a>
					</div>
				</section>
			</main>
		</>
	)
}