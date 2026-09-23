import Link from 'next/link';

export const metadata = {
  title: 'IT Vendors',
  description:
    'Extend your portfolio with Zion Tech Group AI agents, managed services, and automation IP.',
  alternates: { canonical: 'https://ziontechgroup.com/it-vendors' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">IT Vendors</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Extend your portfolio with Zion Tech Group AI agents, managed services, and automation IP—OEM and
            reseller-friendly packaging included.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">
              Discuss Reseller Options
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50"
            >
              View Pricing Patterns
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">What you can white-label</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>AI voice and chat agents for support and sales</li>
          <li>Email intelligence and outreach automation</li>
          <li>Managed detection, response, and compliance tooling</li>
          <li>Cloud cost optimization and DevOps automation</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Commercial model</h2>
        <p className="text-slate-300 leading-relaxed">
          Choose reseller, referral, or OEM embeds. We provide technical enablement, demo environments, shared pipeline
          options, and secure multi-tenant delivery patterns so your brand stays front and center.
        </p>
      </section>
    </main>
  );
}
