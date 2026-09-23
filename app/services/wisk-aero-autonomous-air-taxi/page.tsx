import Link from 'next/link';

export const metadata = {
  title: 'Wisk Aero — Autonomous Air Taxi & Drone Delivery',
  description: 'Wisk Aero, backed by Boeing, is building the first self-flying air taxi and autonomous cargo drone network. Their 6th-generation aircraft carries passengers or 100kg of cargo with zero pilot input. Vertiport-to-vertiport logistics and urban air mobility are expected to launch commercially by 2026-2027.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/wisk-aero-autonomous-air-taxi',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Wisk Aero — Autonomous Air Taxi &amp; Drone Delivery</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Wisk Aero, backed by Boeing, is building the first self-flying air taxi and autonomous cargo drone network. Their 6th-generation aircraft carries passengers or 100kg of cargo with zero pilot input. Vertiport-to-vertiport logistics and urban air mobility are expected to launch commercially by 2026-2027.</p>
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
            <li>Self-flying eVTOL (electric vertical takeoff and landing) aircraft</li>
            <li>4-passenger or 100kg cargo configuration with 90 mile range</li>
            <li>Full autonomy — no pilot required, approved by FAA Part 135</li>
            <li>DragonFly cargo drone for last-mile logistics and medical supply delivery</li>
            <li>Vertiport network design and city partnership program</li>
            <li>Multi-layer safety: detect-and-avoid, parachute, redundant flight systems</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce urban delivery emissions by 95% vs ground transport</li>
            <li>Medical supply delivery to remote areas in under 30 minutes</li>
            <li>Air taxi routes cut 90-minute drives to 8-minute flights</li>
            <li>Boeing manufacturing scale achieves automotive-grade reliability</li>
            <li>Smart city integration: traffic decongestion and noise reduction</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Partnership inquiry</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Route pilot program ($50K setup)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Full deployment ($10M+ per vertiport)</p>
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
