import Link from 'next/link';

export const metadata = {
  title: 'Augury — AI-Predictive Maintenance for Industrial Machines',
  description: 'Augury is an AI-powered predictive maintenance platform that uses vibration, temperature, ultrasonic, and magnetic sensors combined with machine learning to detect faults in industrial equipment before they cause unplanned downtime. Augury\\',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/augury-predictive-maintenance-iot',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Augury — AI-Predictive Maintenance for Industrial Machines</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Augury is an AI-powered predictive maintenance platform that uses vibration, temperature, ultrasonic, and magnetic sensors combined with machine learning to detect faults in industrial equipment before they cause unplanned downtime. Augury\\</p>
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
            <li>Wireless sensors: vibration, temperature, ultrasonic, and magnetic field monitoring</li>
            <li>AI fault detection: identifies 30+ fault types including bearing wear, misalignment, and imbalance</li>
            <li>Machine health scoring: real-time 0-100 health score for every monitored asset</li>
            <li>Maintenance recommendations: prioritized work orders with specific repair instructions</li>
            <li>Integration with CMMS: auto-generates work orders in SAP, Maximo, and Fiix</li>
            <li>Cloud dashboard: fleet-wide machine health visibility across multiple facilities</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce unplanned downtime by 50% through early fault detection</li>
            <li>Extend machine life by 25% with condition-based maintenance scheduling</li>
            <li>Reduce maintenance costs by 30% — fix only what needs fixing, when it needs it</li>
            <li>Improve safety: detect hazardous equipment conditions before they cause injuries</li>
            <li>ROI achieved within 6 months through avoided downtime and reduced spare parts waste</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Custom (pilot program)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$50K/year (single facility)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom ($200K+/year multi-site deployment)</p>
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
