import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Zion Tech Group — our mission, team, and the AI-powered solutions that help modern businesses transform and grow.',
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
            About Zion Tech Group
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building the Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}AI-Powered{' '}
            </span>
            Business
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We are a technology company at the intersection of artificial intelligence, software
            engineering, and business transformation. Our mission is to make enterprise-grade AI
            accessible to teams of every size.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'AI Services', value: '3,400+' },
              { label: 'Industries Served', value: '25+' },
              { label: 'AI Agents Deployed', value: '150+' },
              { label: 'Countries', value: '40+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                We believe every business deserves access to the same intelligent automation that
                Fortune 500 companies use. Our platform of 3,400+ AI services removes the
                complexity from AI adoption — from strategy and consulting to deployment and
                ongoing optimization.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Through our autonomous AI agents, we continuously evolve our own platform, proving
                every day that AI can be a reliable partner in business growth.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-8">
              <h3 className="text-xl font-semibold text-white">What Makes Us Different</h3>
              <ul className="mt-4 space-y-3">
                {[
                  '3,400+ ready-to-deploy AI services across 25+ industries',
                  'Autonomous AI agents that continuously improve your systems',
                  'End-to-end support from strategy to deployment',
                  'Transparent pricing with no hidden fees',
                  'Enterprise-grade security and compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Leadership</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-400">
            A team of engineers, AI researchers, and business strategists united by a shared vision.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Kleber Garcia Alcatrão',
                role: 'Founder & CEO',
                bio: 'Visionary technologist leading Zion Tech Group AI-first transformation strategy.',
              },
              {
                name: 'AI Research Team',
                role: 'Head of AI',
                bio: 'Our autonomous AI agents and research team continuously build and deploy new intelligent services.',
              },
              {
                name: 'Engineering Team',
                role: 'CTO',
                bio: 'Full-stack engineers building scalable, secure, and performant AI-powered solutions.',
              },
            ].map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-2xl font-bold text-white">
                  {person.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                <p className="mt-1 text-sm text-purple-400">{person.role}</p>
                <p className="mt-3 text-sm text-slate-400">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-purple-950/20">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Let&apos;s discuss how our AI services and autonomous agents can accelerate your growth.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-8 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
              kleber@ziontechgroup.com
            </a>
            {' · '}
            <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
              +1 302 464 0950
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
