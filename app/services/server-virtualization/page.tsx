import Link from 'next/link';

export const metadata = {
  title: 'Server Virtualization | Zion Tech Group',
  description: 'Server Virtualization is an enterprise infrastructure solution that consolidates physical servers into virtual machines using VMware, Hyper-V, or KVM. It features live migration, high-availability clustering, and reduces hardware costs by up to 70% while improving disaster recovery capabilities.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/server-virtualization',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Server Virtualization</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Server Virtualization is an enterprise infrastructure solution that consolidates physical servers into virtual machines using VMware, Hyper-V, or KVM. It features live migration, high-availability clustering, and reduces hardware costs by up to 70% while improving disaster recovery capabilities.</p>
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
            <li>VMware/Hyper-V/KVM: support for all major hypervisor platforms based on your needs</li>
            <li>Live migration: move running VMs between physical hosts with zero downtime</li>
            <li>HA clustering: automatic failover with high-availability clusters for mission-critical workloads</li>
            <li>Resource optimization: dynamic resource allocation based on real-time demand</li>
            <li>Snapshot &amp; backup: automated VM snapshots with incremental backup to secondary storage</li>
            <li>Network virtualization: virtual switches, VLANs, and software-defined networking</li>
            <li>Disaster recovery: automated replication to secondary site with configurable RPO and RTO</li>
            <li>Capacity planning: AI-powered forecasting of resource needs based on growth trends</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Reduce hardware costs by 70% by consolidating physical servers into virtual machines</li>
            <li>Improve infrastructure efficiency with dynamic resource allocation and live migration</li>
            <li>Scale with enterprise-grade infrastructure supporting unlimited VMs and HA clustering</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$2,500 (up to 5 VMs, basic support)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$10,000 (up to 50 VMs, live migration, HA clustering)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (unlimited VMs, dedicated infrastructure, 24/7 support, SLA)</p>
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
