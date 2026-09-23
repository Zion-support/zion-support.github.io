import Link from 'next/link';

export const metadata = {
  title: 'Insilico Medicine — AI-Powered Drug Discovery Platform | Zion Tech Group',
  description: 'Insilico Medicine uses generative AI and deep learning to discover new drug candidates in months instead of years. Their Pharma.AI platform generates novel molecular structures, predicts clinical trial outcomes, and identifies new disease targets. In 2023, Insilico advanced the first fully AI-discovered drug (for idiopathic pulmonary fibrosis) to Phase II clinical trials — a milestone that previously took the industry 4-5 years and $400M.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/insilico-medicine-ai-drug-discovery',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Insilico Medicine — AI-Powered Drug Discovery Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Insilico Medicine uses generative AI and deep learning to discover new drug candidates in months instead of years. Their Pharma.AI platform generates novel molecular structures, predicts clinical trial outcomes, and identifies new disease targets. In 2023, Insilico advanced the first fully AI-discovered drug (for idiopathic pulmonary fibrosis) to Phase II clinical trials — a milestone that previously took the industry 4-5 years and $400M.</p>
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
            <li>Generative AI designs novel drug molecules from scratch in 30 days</li>
            <li>Pharma.AI platform: target discovery → molecule generation → trial prediction</li>
            <li>First AI-discovered drug in Phase II clinical trials (IPF treatment)</li>
            <li>41 therapeutic programs in pipeline across cancer, fibrosis, and infectious disease</li>
            <li>Biomarker AI predicts patient response before clinical trials begin</li>
            <li>Partnerships with Sanofi, Menarini, and multiple top-20 pharma companies</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce drug discovery timeline from 4.5 years to 18 months</li>
            <li>Cut discovery costs from $400M to $50M per candidate</li>
            <li>Higher clinical trial success rates via AI-predicted patient response</li>
            <li>Address previously </li>
            <li> targets with novel molecular approaches</li>
            <li>Accelerate treatments for rare diseases that lack commercial incentive</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Research collaboration</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$5M/target (discovery to candidate)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$50M+ (full pipeline partnership)</p>
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
