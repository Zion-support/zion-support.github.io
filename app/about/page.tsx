import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Zion Tech Group builds AI applications, secure engineering systems, and scalable delivery roadmaps for modern teams.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    title: 'Operationally Grounded',
    description:
      'Every solution is designed around real business workflows, not theoretical demos.',
    icon: '🧭',
  },
  {
    title: 'Security First',
    description:
      'Security, privacy, and compliance are built into every layer of delivery from day one.',
    icon: '🛡️',
  },
  {
    title: 'Outcome Focused',
    description:
      'Roadmaps prioritize measurable gains in speed, quality, and operational cost.',
    icon: '📈',
  },
  {
    title: 'Integration Ready',
    description:
      'We design for existing systems, data pipelines, and team handoffs from the start.',
    icon: '🔌',
  },
];

const stats = [
  { value: '450+', label: 'Product pages shipped' },
  { value: '40+', label: 'AI app modules' },
  { value: '48h', label: 'Typical discovery kickoff' },
  { value: '99.9%', label: 'Platform uptime target' },
];

const milestones = [
  {
    year: '2023',
    title: 'Founded',
    description: 'Zion Tech Group launched with a focus on AI-powered business automation.',
  },
  {
    year: '2024',
    title: 'Platform Expansion',
    description:
      'Scaled to 200+ app modules covering growth, engineering, security, and operations.',
  },
  {
    year: '2025',
    title: 'Enterprise Delivery',
    description:
      'Introduced structured delivery frameworks and compliance-ready deployment paths.',
  },
  {
    year: '2026',
    title: 'AI Delivery Studio',
    description:
      'Launched the AI Delivery Studio with 450+ production-ready pages and integration-first architecture.',
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building AI Systems That Teams Can Actually Ship
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Zion Tech Group combines production-ready AI apps with expert engineering and
            security-first delivery. We help teams move from exploration to scaled operations
            with practical, measurable execution plans.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 text-center shadow-lg shadow-black/20"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Our Values
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            What Guides Our Work
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <span className="text-3xl">{value.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
          Our Journey
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Key Milestones</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-lg shadow-black/20"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                {milestone.year}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{milestone.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6">
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Make AI adoption practical, secure, and measurable for teams at every stage.
              We believe the gap between &ldquo;AI demo&rdquo; and &ldquo;AI in production&rdquo; is
              an engineering and delivery problem, not a technology problem. Our mission is to
              close that gap with structured frameworks, battle-tested patterns, and hands-on
              implementation support.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6">
            <h3 className="text-xl font-semibold text-white">Our Approach</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Every engagement starts with discovery — understanding your goals, existing systems,
              and team dynamics. From there, we build a focused pilot with measurable outcomes.
              Once validated, we scale with production hardening, security controls, and
              operational runbooks so your team can operate confidently long after we hand off.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Want to Work With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            We are always looking for teams ready to build something meaningful with AI.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get in Touch
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
