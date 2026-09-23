import Link from 'next/link';

export const metadata = {
  title: 'Snyk — AI-Powered Code Security Platform',
  description: 'Snyk is the leading AI-powered code security platform that helps developers find, prioritize, and fix vulnerabilities in code, dependencies, containers, and infrastructure as code. Trusted by 2.2 million+ developers and 1,200+ enterprises including Google, Microsoft, and Salesforce, Snyk scans 3 billion+ tests per month.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/snyk-ai-code-security',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Snyk — AI-Powered Code Security Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Snyk is the leading AI-powered code security platform that helps developers find, prioritize, and fix vulnerabilities in code, dependencies, containers, and infrastructure as code. Trusted by 2.2 million+ developers and 1,200+ enterprises including Google, Microsoft, and Salesforce, Snyk scans 3 billion+ tests per month.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>AI-powered vulnerability detection: find security issues in code, dependencies, containers, and IaC</li>
            <li>One-click fix: AI generates precise code fixes that developers can apply with a single click</li>
            <li>Priority scoring: AI ranks vulnerabilities by exploitability, reachability, and business impact</li>
            <li>IDE integration: real-time security scanning in VS Code, IntelliJ, and 20+ environments</li>
            <li>Container security: scan Docker images and Kubernetes manifests for misconfigurations</li>
            <li>Infrastructure as Code security: detect misconfigurations in Terraform, CloudFormation, and Helm</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Prevent 1 billion+ vulnerabilities from reaching production with AI-powered scanning</li>
            <li>Reduce security noise by 80% with AI prioritization that focuses on what matters</li>
            <li>Trusted by 2.2 million+ developers and 1,200+ enterprises including Google and Microsoft</li>
            <li>Shift security left: find and fix vulnerabilities during development, not after deployment</li>
            <li>One-click remediation: developers fix issues in seconds instead of hours</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (200 tests/month, 1 user, public repos)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$100/user/month (unlimited tests, private repos)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (SSO, on-prem, custom policies, SLA)</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
