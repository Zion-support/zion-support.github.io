import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description:
    'Zion Tech Group delivers AI applications, engineering services, and security-first implementation for modern businesses. Learn about our mission and approach.',
  alternates: { canonical: '/about' },
};

type TeamValue = {
  title: string;
  description: string;
  icon: string;
};

const teamValues: TeamValue[] = [
  {
    title: 'Outcome-Driven',
    description:
      'Every engagement starts with measurable goals. We track KPIs from day one and optimize until you see results.',
    icon: '🎯',
  },
  {
    title: 'Security-First',
    description:
      'Security, privacy, and compliance are built into our delivery process, not bolted on afterward.',
    icon: '🛡️',
  },
  {
    title: 'Integration-Ready',
    description:
      'We design for your existing stack. Solutions work with your tools, data pipelines, and team workflows from day one.',
    icon: '🔌',
  },
  {
    title: 'Transparent Delivery',
    description:
      'No black boxes. You get full documentation, runbooks, and training so your team owns the outcome.',
    icon: '📖',
  },
];

type Milestone = {
  year: string;
  event: string;
};

const milestones: Milestone[] = [
  { year: '2021', event: 'Founded with a mission to make AI implementation practical and accessible' },
  { year: '2022', event: 'Launched first suite of AI applications for growth and customer experience' },
  { year: '2023', event: 'Expanded into security services and compliance consulting' },
  { year: '2024', event: 'Released 30+ production-ready AI applications across six business domains' },
  { year: '2025', event: 'Introduced enterprise engagement models and dedicated delivery partnerships' },
  { year: '2026', event: 'Continued platform expansion with new automation and analytics capabilities' },
];

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: '40+', label: 'AI applications' },
  { value: '200+', label: 'Projects delivered' },
  { value: '6', label: 'Business domains' },
  { value: '98%', label: 'Client satisfaction' },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            ✨ About Zion Tech Group
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building the Future of{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              AI-Powered Business
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Zion Tech Group helps businesses design, launch, and scale AI operations with
            confidence. We combine production-ready applications with expert engineering and
            security-first delivery to create real, measurable impact.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 text-center shadow-lg shadow-black/20"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Our Mission
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Make AI Implementation Practical
              </h2>
              <p className="mt-4 text-slate-300 leading-7">
                Too many AI projects stall between proof-of-concept and production. We exist to
                close that gap. Our team combines deep technical expertise with practical delivery
                experience to help organizations ship AI solutions that work in the real world.
              </p>
              <p className="mt-4 text-slate-300 leading-7">
                We believe every business should have access to production-grade AI tooling
                without needing to build everything from scratch. That is why we created a library
                of 40+ ready-to-deploy applications across growth, engineering, security, and
                operations — backed by professional services for customization and scale.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Our Approach
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Delivery Over Demos
              </h2>
              <p className="mt-4 text-slate-300 leading-7">
                We do not build prototypes that never ship. Every engagement is structured around
                measurable outcomes: clear KPIs, production-quality code, and handoff
                documentation your team can run with.
              </p>
              <p className="mt-4 text-slate-300 leading-7">
                Our typical workflow starts with a focused discovery sprint to align priorities,
                moves into a scoped pilot build with real integrations, and evolves into ongoing
                optimization and expansion. At every stage, you own the code and the outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
          What We Stand For
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">Core Values</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamValues.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <span className="inline-flex rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                {value.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Our Journey
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Company Timeline</h2>
          <div className="mt-8 space-y-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex items-start gap-4 rounded-xl border border-slate-700/70 bg-slate-950/60 px-5 py-4"
              >
                <span className="flex-shrink-0 rounded-lg bg-purple-500/20 px-3 py-1 text-sm font-bold text-purple-300">
                  {milestone.year}
                </span>
                <p className="text-sm text-slate-200">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Whether you are exploring AI for the first time or scaling existing solutions, we are
            ready to help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start a Conversation
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Solutions
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl border border-purple-300/50 bg-purple-500/20 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/30"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
