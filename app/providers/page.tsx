import Link from 'next/link';

export const metadata = {
  title: 'Technology Providers',
  description:
    'Partner with Zion Tech Group to deliver AI, cloud, and IT services through co-sell and implementation programs.',
  alternates: { canonical: 'https://ziontechgroup.com/providers' },
};

const plays = [
  {
    title: 'Co-sell motion',
    body: 'Joint opportunity mapping, shared demos, and deal registration so your sellers win with AI and infrastructure attach.',
  },
  {
    title: 'Implementation kits',
    body: 'Reference architectures, integration adapters, and rollout checklists that cut time-to-value for mutual customers.',
  },
  {
    title: 'Enablement',
    body: 'Sales and SE training, battle cards, and sandbox environments that make Zion services easy to explain and deliver.',
  },
  {
    title: 'Marketplace readiness',
    body: 'Packaging, listing support, and customer success templates for AWS, Azure, GCP, and ISV marketplaces.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,212,191,0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Technology Providers</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Partner with Zion Tech Group to deliver AI, cloud, and IT services through co-sell and implementation
            programs built for product companies and platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">
              Talk to Us
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50"
            >
              Explore Services
            </Link>
            <Link
              href="/partners"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50"
            >
              Partner Program
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-3">How we help providers</h2>
        <p className="text-slate-400 mb-8 max-w-2xl">
          We sit beside your product and GTM teams to turn Zion AI/IT capabilities into attach revenue—not a competing
          stack.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {plays.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-lg font-semibold text-teal-300">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-4">Typical engagement</h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-300">
            <li>Discovery workshop on ICP overlap and attach opportunities</li>
            <li>Pilot packaging with pricing, SLAs, and demo script</li>
            <li>Enablement for sellers/SEs and first joint opportunities</li>
            <li>Scale with marketplace listings and recurring delivery pods</li>
          </ol>
          <p className="mt-8 text-sm text-slate-400">
            Ready to co-sell? Call{' '}
            <a href="tel:+13024640950" className="text-teal-400 hover:underline">
              +1 302 464 0950
            </a>{' '}
            or email{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-teal-400 hover:underline">
              kleber@ziontechgroup.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
