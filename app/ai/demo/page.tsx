import Link from 'next/link';

export const metadata = {
  title: 'AI Demo Sandbox | Zion Tech Group',
  description: 'Explore Zion Tech Group AI demos — readiness assessments, URL audits, and solution configurators.',
  alternates: { canonical: 'https://ziontechgroup.com/ai/demo' },
};

const demos = [
  { href: '/ai/ai-readiness-assessment', title: 'AI Readiness Assessment', desc: 'Score your organization for AI adoption.' },
  { href: '/ai/url-audit-assistant', title: 'URL Audit Assistant', desc: 'Audit site URLs and link health.' },
  { href: '/ai/solutions-configurator', title: 'Solutions Configurator', desc: 'Compose an AI/IT solution stack.' },
  { href: '/tools/ai-quick-audit', title: 'AI Quick Audit', desc: 'Two-minute maturity check.' },
  { href: '/ai-lab', title: 'AI Lab', desc: 'Browse experimental AI products.' },
];

export default function AiDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI Demo Sandbox</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Try interactive AI experiences from Zion Tech Group. No commitment — explore, then book a working session with our team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">Book a Live Demo</Link>
            <Link href="/ai" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-500/50">Back to AI Lab</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2">
        {demos.map((d) => (
          <Link key={d.href} href={d.href} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-500/40 transition-colors">
            <h2 className="text-lg font-semibold text-white">{d.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{d.desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
