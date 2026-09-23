import Link from 'next/link';

export const metadata = {
  title: 'Government & Public Sector',
  description: 'Secure, compliant AI and IT modernization for agencies and public institutions.',
  alternates: { canonical: 'https://ziontechgroup.com/governments' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Government & Public Sector</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Secure, compliant AI and IT modernization for agencies and public institutions—phased to match procurement
            cycles and audit requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">
              Request a Briefing
            </Link>
            <Link
              href="/services?category=security"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50"
            >
              Security Services
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Public-sector focus areas</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Citizen experience and case-management automation</li>
            <li>Internal operations copilots with human-in-the-loop controls</li>
            <li>Data governance and responsible AI practices</li>
            <li>Cyber defense, logging, and continuous compliance evidence</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">How we engage</h2>
          <p className="text-slate-300 leading-relaxed">
            We support RFPs, pilots under existing vehicles, and phased rollouts. Security reviews, accessibility
            expectations, and documentation packs are part of delivery—not an afterthought.
          </p>
        </div>
        <p className="text-sm text-slate-400">
          Contact{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-teal-400 hover:underline">
            kleber@ziontechgroup.com
          </a>{' '}
          or{' '}
          <a href="tel:+13024640950" className="text-teal-400 hover:underline">
            +1 302 464 0950
          </a>
          .
        </p>
      </section>
    </main>
  );
}
