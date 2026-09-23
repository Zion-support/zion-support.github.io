import Link from 'next/link';

export const metadata = {
  title: 'Trivy Comprehensive Security Scanner | Zion Tech Group',
  description: 'Trivy is a comprehensive and versatile security scanner that targets vulnerabilities in container images, file systems, and Git repositories, as well as configuration issues. It detects OS packages and language-specific dependencies with CVEs, IaC files and Kubernetes with misconfigurations, and secrets.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/trivy',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Trivy Comprehensive Security Scanner</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Trivy is a comprehensive and versatile security scanner that targets vulnerabilities in container images, file systems, and Git repositories, as well as configuration issues. It detects OS packages and language-specific dependencies with CVEs, IaC files and Kubernetes with misconfigurations, and secrets.</p>
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
            <li>Detects vulnerabilities in OS packages (Alpine, RHEL, CentOS, etc.) and language-specific bundles (Bundler, Composer, npm, yarn)</li>
            <li>Identifies IaC issues in Terraform, CloudFormation, Kubernetes, and Dockerfiles</li>
            <li>Scans for sensitive data exposure: API keys, tokens, passwords, and private keys in repositories</li>
            <li>Detects container image vulnerabilities and misconfigurations in one unified scanner</li>
            <li>Generates reports in multiple formats: JSON, YAML, SARIF, CycloneDX, and plain text</li>
            <li>Easy to install and use: single binary with no dependencies, works in CI/CD pipelines</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Replaces multiple specialized scanners with one unified tool for images, files, repos, and IaC</li>
            <li>Fast scanning: typically completes in seconds to minutes depending on target size</li>
            <li>Zero false positives in vulnerability detection for supported package managers</li>
            <li>Integrates seamlessly with GitHub Actions, GitLab CI, Jenkins, and other CI systems</li>
            <li>Used by Red Hat, Google, Microsoft, and thousands of organizations for DevSecOps</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (OSS)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Free tier (unlimited scans)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom</p>
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
