import Link from 'next/link';

export const metadata = {
  title: 'Starlink — Low Earth Orbit Satellite Internet',
  description: 'Starlink, operated by SpaceX, provides high-speed, low-latency internet access globally via a constellation of 6,000+ low Earth orbit satellites. With download speeds of 50-250 Mbps and latency of 20-40ms, Starlink serves rural communities, maritime vessels, aircraft, and enterprise locations where terrestrial internet is unavailable. The network is expanding to 12,000+ satellites with direct-to-cell phone service launching 2025.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/starlink-satellite-internet',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Starlink — Low Earth Orbit Satellite Internet</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Starlink, operated by SpaceX, provides high-speed, low-latency internet access globally via a constellation of 6,000+ low Earth orbit satellites. With download speeds of 50-250 Mbps and latency of 20-40ms, Starlink serves rural communities, maritime vessels, aircraft, and enterprise locations where terrestrial internet is unavailable. The network is expanding to 12,000+ satellites with direct-to-cell phone service launching 2025.</p>
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
            <li>6,000+ LEO satellites providing global coverage including polar regions</li>
            <li>50-250 Mbps download, 20-40ms latency — comparable to terrestrial broadband</li>
            <li>Self-installing phased-array antenna: plugs in, points at sky, connects automatically</li>
            <li>Direct-to-cell service: connect standard smartphones to satellites (2025)</li>
            <li>Maritime and aviation plans for ships, aircraft, and mobile command centers</li>
            <li>Enterprise SLA: 99.5% uptime with priority traffic routing</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Connect the unconnected: 4 billion people lack reliable internet access</li>
            <li>Disaster recovery: deploy internet anywhere within hours, no infrastructure needed</li>
            <li>Rural businesses gain access to cloud services, e-commerce, and remote work</li>
            <li>Maritime and aviation: crew welfare and operational connectivity at sea/air</li>
            <li>Latency low enough for video conferencing, cloud gaming, and real-time trading</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$120/month (residential)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$250/month (business, 1TB priority)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$5,000/month (maritime/aviation)</p>
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
