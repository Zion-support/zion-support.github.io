import Link from 'next/link';

export const metadata = {
  title: 'AutoGrid — AI-Powered Smart Grid Energy Optimization | Zion Tech Group',
  description: 'AutoGrid uses AI to optimize distributed energy resources (DERs) across the electrical grid, managing millions of EVs, batteries, solar panels, and smart thermostats as a virtual power plant. Their platform shifts energy consumption to off-peak hours, reduces grid stress during peak demand, and enables utilities to defer billions in infrastructure upgrades by intelligently managing existing capacity.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/autogrid-ai-smart-grid-optimization',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AutoGrid — AI-Powered Smart Grid Energy Optimization</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">AutoGrid uses AI to optimize distributed energy resources (DERs) across the electrical grid, managing millions of EVs, batteries, solar panels, and smart thermostats as a virtual power plant. Their platform shifts energy consumption to off-peak hours, reduces grid stress during peak demand, and enables utilities to defer billions in infrastructure upgrades by intelligently managing existing capacity.</p>
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
            <li>Virtual power plant: aggregates millions of EVs, batteries, and smart devices</li>
            <li>AI predicts energy demand 48 hours ahead with 95% accuracy</li>
            <li>Automated demand response: shifts load to off-peak without customer impact</li>
            <li>EV smart charging management: charges when grid is cleanest and cheapest</li>
            <li>Real-time grid balancing with sub-second response to frequency deviations</li>
            <li>Open standards: OCPP, OpenADR, IEEE 2030.5 compliant</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Defer $10B+ in transmission and distribution infrastructure upgrades</li>
            <li>Reduce peak demand by 15-20% through intelligent load shifting</li>
            <li>Integrate 3x more renewable energy without grid instability</li>
            <li>EV owners save $500+/year on electricity with smart charging</li>
            <li>Utilities avoid blackouts during extreme weather events</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (residential demand response)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$50K/year (utility pilot)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$500K+/year (grid-scale deployment)</p>
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
