import Link from 'next/link';

export const metadata = {
  title: 'Kinaxis RapidResponse — AI Supply Chain Optimization | Zion Tech Group',
  description: 'Kinaxis RapidResponse is the leading AI-powered supply chain planning platform that enables concurrent planning — connecting demand, supply, inventory, and capacity planning in a single real-time model. Used by 40,000+ users at 100+ global enterprises including Ford, Cisco, and Qualcomm.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/kinaxis-rapidresponse-supply-chain',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Kinaxis RapidResponse — AI Supply Chain Optimization</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Kinaxis RapidResponse is the leading AI-powered supply chain planning platform that enables concurrent planning — connecting demand, supply, inventory, and capacity planning in a single real-time model. Used by 40,000+ users at 100+ global enterprises including Ford, Cisco, and Qualcomm.</p>
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
            <li>Concurrent planning: connect demand, supply, inventory, and capacity in one real-time model</li>
            <li>AI demand sensing: analyze 100+ signals to predict demand changes before orders</li>
            <li>Scenario simulation: simulate millions of what-if scenarios in seconds</li>
            <li>Supply risk monitoring: AI monitors supplier health, geopolitical risks, and logistics</li>
            <li>Autonomous planning: AI recommends and executes routine planning decisions</li>
            <li>Real-time collaboration: 40,000+ users across 100+ enterprises plan together</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce inventory costs by 20-30% with AI-optimized demand and supply balancing</li>
            <li>Improve forecast accuracy by 40% using AI demand sensing across 100+ signals</li>
            <li>Cut planning cycle time by 80% through concurrent planning</li>
            <li>Trusted by Ford, Cisco, and Qualcomm for mission-critical supply chain operations</li>
            <li>Respond to disruptions in minutes instead of weeks with real-time simulation</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$100,000/year (up to 10 users, basic planning modules)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$250,000/year (up to 100 users, full concurrent planning)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (unlimited users, custom AI models, SLA)</p>
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
