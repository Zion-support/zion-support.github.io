import Link from 'next/link';

export const metadata = {
  title: 'Onfido (Plural) — AI-Powered Identity Verification',
  description: 'Onfido uses AI to verify user identity through document analysis and facial biometrics, enabling banks, fintechs, and marketplaces to onboard customers remotely with bank-grade security. Their Real Identity Framework analyzes ID documents from 200+ countries, performs liveness detection, and cross-references against global watchlists — processing verifications in under 15 seconds with 99.9% accuracy.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/onfido-ai-identity-verification',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Onfido (Plural) — AI-Powered Identity Verification</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Onfido uses AI to verify user identity through document analysis and facial biometrics, enabling banks, fintechs, and marketplaces to onboard customers remotely with bank-grade security. Their Real Identity Framework analyzes ID documents from 200+ countries, performs liveness detection, and cross-references against global watchlists — processing verifications in under 15 seconds with 99.9% accuracy.</p>
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
            <li>Document verification: 200+ countries, 4,000+ document types supported</li>
            <li>Facial biometrics: liveness detection prevents spoofing with photos/videos</li>
            <li>Address verification: utility bill analysis and geolocation cross-referencing</li>
            <li>Watchlist screening: PEP, sanctions, and adverse media checks in real time</li>
            <li>Orchestration dashboard: monitor verification funnel, drop-off rates, false positives</li>
            <li>Compliance: KYC/AML compliant with GDPR, SOC 2, and ISO 27001 certification</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Onboard customers in 15 seconds vs. days for manual verification</li>
            <li>Reduce fraud losses by 95% with AI-powered document forgery detection</li>
            <li>Increase conversion: 85% completion rate vs. 40% for manual processes</li>
            <li>Global coverage: verify identities from any country without local offices</li>
            <li>Regulator-approved: used by banks, neobanks, and fintechs in 50+ countries</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Pay-per-check ($1.50/verification)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$1,000/month + $1.00/check</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom ($10K+/month)</p>
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
