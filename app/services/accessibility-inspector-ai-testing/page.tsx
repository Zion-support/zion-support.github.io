import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Inspector — AI-Powered Accessibility Testing',
  description: 'Accessibility Inspector is an AI-powered accessibility testing platform that automatically detects, prioritizes, and helps fix digital accessibility issues across websites, mobile apps, and documents. Using computer vision, NLP, and machine learning, it identifies WCAG 2.2 violations that traditional rule-based tools miss.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/accessibility-inspector-ai-testing',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Accessibility Inspector — AI-Powered Accessibility Testing</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Accessibility Inspector is an AI-powered accessibility testing platform that automatically detects, prioritizes, and helps fix digital accessibility issues across websites, mobile apps, and documents. Using computer vision, NLP, and machine learning, it identifies WCAG 2.2 violations that traditional rule-based tools miss.</p>
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
            <li>AI-powered WCAG 2.2 testing: detect 3x more issues than rule-based tools</li>
            <li>Context-aware analysis: understand page semantics to catch issues traditional tools miss</li>
            <li>Automated fix suggestions: AI generates specific code fixes for each violation</li>
            <li>Continuous monitoring: scheduled scans that alert when new issues are introduced</li>
            <li>Compliance reporting: generate VPAT, ACR, and Section 508 documentation</li>
            <li>Multi-platform: test websites, mobile apps, PDFs, and digital documents</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Detect 3x more accessibility issues than traditional rule-based tools</li>
            <li>Reduce remediation time by 80% with AI-generated fix recommendations</li>
            <li>Ensure WCAG 2.2, ADA, Section 508, and EN 301 549 compliance</li>
            <li>Trusted by 5,000+ organizations including government agencies and Fortune 500</li>
            <li>Prevent accessibility lawsuits with continuous monitoring</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$99/month (100 pages, basic WCAG 2.1 checks)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$499/month (1,000 pages, WCAG 2.2, AI fix suggestions)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (unlimited pages, custom compliance frameworks, SLA)</p>
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
