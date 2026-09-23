import Link from 'next/link';

export const metadata = {
  title: 'axe by Deque — AI-Powered Web Accessibility Testing',
  description: 'axe by Deque Systems is the leading AI-powered accessibility testing platform that automatically detects WCAG 2.2, Section 508, and EN 301 549 compliance issues in web and mobile applications. Their AI engine uses computer vision and machine learning to identify 80%+ of accessibility issues that manual testing misses, including color contrast, missing alt text, keyboard navigation, and screen reader compatibility. With 1 million+ developers using axe tools and enterprise customers including Microsoft, Google, and the US federal government, Deque has tested over 10 billion web pages for accessibility compliance.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/axe-deque-ai-accessibility-testing',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">axe by Deque — AI-Powered Web Accessibility Testing</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">axe by Deque Systems is the leading AI-powered accessibility testing platform that automatically detects WCAG 2.2, Section 508, and EN 301 549 compliance issues in web and mobile applications. Their AI engine uses computer vision and machine learning to identify 80%+ of accessibility issues that manual testing misses, including color contrast, missing alt text, keyboard navigation, and screen reader compatibility. With 1 million+ developers using axe tools and enterprise customers including Microsoft, Google, and the US federal government, Deque has tested over 10 billion web pages for accessibility compliance.</p>
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
            <li>Automated WCAG 2.2, Section 508, and EN 301 549 compliance scanning</li>
            <li>AI-powered issue detection: 80%+ of accessibility issues found automatically</li>
            <li>Browser extension: test any webpage in seconds with axe DevTools</li>
            <li>CI/CD integration: GitHub Actions, Jenkins, Azure DevOps, and CircleCI plugins</li>
            <li>Intelligent guided testing: AI suggests manual tests for complex accessibility issues</li>
            <li>Enterprise monitoring: continuous scanning of entire web properties for accessibility regressions</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Avoid costly accessibility lawsuits: 4,000+ ADA web lawsuits filed in 2023</li>
            <li>Reach 16% of the global population with disabilities — a $13T market</li>
            <li>Automated testing finds issues 10x faster than manual accessibility audits</li>
            <li>Meet legal requirements: WCAG 2.2 AA compliance for government and enterprise</li>
            <li>Used by 1 million+ developers including Microsoft, Google, and US federal agencies</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (axe DevTools Community)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$40/month (axe DevTools Pro)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$50K/year (axe Monitor + automated scanning)</p>
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
