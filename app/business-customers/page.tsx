import Link from 'next/link';

export const metadata = {
  title: 'Business Customers | Zion Tech Group',
  description: 'Modernize operations with Zion Tech Group AI, IT, and automation services built for measurable outcomes.',
  alternates: { canonical: 'https://ziontechgroup.com/business-customers' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Business Customers</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Modernize operations with Zion Tech Group AI, IT, and automation services built for measurable outcomes.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">Talk to Us</Link>
            <Link href="/services" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50">Explore Services</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">How we help</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Discovery workshops and ROI roadmaps</li>
            <li>Pilot-to-production delivery in weeks, not quarters</li>
            <li>Managed operations with clear SLAs</li>
            <li>Security, compliance, and change management included</li>
        </ul>
      </section>
    </main>
  );
}
