import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Shield, Zap, Users, Target, Award, Building2, Check } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description:
    'Learn about Zion Tech Group — our mission, values, and approach to delivering AI-powered solutions for modern businesses.',
};

const values = [
  {
    icon: Target,
    title: 'Outcome-Driven',
    description:
      'Every engagement is scoped around measurable business results, not feature lists. We prioritize impact over effort.',
  },
  {
    icon: Shield,
    title: 'Security-First',
    description:
      'Compliance, privacy, and infrastructure security are built into every delivery plan from day one.',
  },
  {
    icon: Zap,
    title: 'Speed to Value',
    description:
      'We ship scoped pilots fast so teams can validate impact early and scale with confidence.',
  },
  {
    icon: Users,
    title: 'Team-Ready',
    description:
      'Solutions are designed for handoff. Runbooks, training, and observability ensure your team can own it.',
  },
];

const stats = [
  { value: '60+', label: 'AI Apps', note: 'Production-ready product pages' },
  { value: '41', label: 'Industry Verticals', note: 'Tailored solutions across sectors' },
  { value: '48h', label: 'Discovery Kickoff', note: 'Fast intake and roadmap alignment' },
  { value: '100%', label: 'Static Delivery', note: 'No vendor lock-in, full ownership' },
];

const milestones = [
  {
    year: 'Foundation',
    title: 'Built on engineering rigor',
    description:
      'Zion Tech Group was founded to bridge the gap between AI potential and practical business execution. We started with a small team of engineers and product people who believed AI should solve real problems — not just demos. Early focus on secure architecture and measurable outcomes set the tone for every engagement that followed.',
  },
  {
    year: 'Growth',
    title: 'Expanded product library',
    description:
      'Grew from a handful of services to a comprehensive library of 60+ AI applications spanning growth, engineering, security, and operations across 41 industry verticals. We invested in industry-specific workflows, compliance support, and integration patterns so teams could deploy with confidence. Partner and client feedback shaped our roadmap toward production-ready, outcome-focused delivery.',
  },
  {
    year: 'Today',
    title: 'Delivery at scale',
    description:
      'Serving teams across industries with production-ready AI apps, secure architecture, and measurable delivery roadmaps. We support pilot-to-scale journeys with clear KPIs, runbooks, and handoff so internal teams can own and extend solutions. Our focus remains the same: grounded in real business workflows, security by default, and speed to value.',
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-1/4 h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} className="mb-6" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              About Zion Tech Group
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI products, secure engineering, and delivery at scale
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Zion Tech Group builds production-ready AI applications and pairs them with expert
              engineering, security-first architecture, and practical delivery roadmaps so your team
              can move from pilot to scaled operations with confidence.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              We believe AI should be grounded in real business workflows, not generic demos. Every
              app and service page is mapped to practical outcomes your team can measure.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              From discovery through pilot and scale, we combine product thinking with engineering
              rigor and security-first delivery — so you get faster go-live cycles, lower execution
              risk, and clear KPI tracking from day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5"
               data-cta-event="cta_contact" data-cta-label="page">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
              >
                View Solutions
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-lg shadow-black/20"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-100">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Our values
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            How we build and deliver
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            These principles guide every project, from discovery through to production handoff.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <value.icon className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Why work with us
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Engineering rigor meets practical delivery
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            We are a team of engineers, architects, and product people who believe AI should be grounded in real business workflows.
            We ship production-ready systems with security, observability, and operational readiness built in — not bolted on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200">
              Remote-first
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200">
              Outcome-driven
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-200">
              No vendor lock-in
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Trust & compliance
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Security and compliance built in
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            We design for enterprise requirements. Our delivery includes security controls, audit trails,
            and compliance support for regulated industries.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200">
              <Award className="h-4 w-4 text-purple-400" />
              SOC 2 readiness
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200">
              <Shield className="h-4 w-4 text-purple-400" />
              GDPR compliance support
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200">
              <Check className="h-4 w-4 text-purple-400" />
              Secure architecture
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Industries we serve
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Trusted across sectors
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            We deliver AI solutions to teams in healthcare, financial services, insurance, manufacturing,
            retail, and 36+ other verticals. Each solution is tailored to industry workflows and compliance needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Healthcare', 'Financial Services', 'Insurance', 'Manufacturing', 'Retail', 'Technology', 'Government', 'Energy', 'Logistics', 'Pharma'].map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600/80 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <Building2 className="h-3 w-3 text-slate-400" />
                {industry}
              </span>
            ))}
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-lg border border-purple-400/40 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-200 transition hover:bg-purple-500/20"
            >
              +31 more
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Our journey
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            From engineering roots to delivery at scale
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/15 text-sm font-bold text-purple-300">
                  {index + 1}
                </div>
                {index < milestones.length - 1 && (
                  <div className="mt-2 h-full w-px bg-gradient-to-b from-purple-500/40 to-transparent" />
                )}
              </div>
              <div className="pb-8">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300">
                  {milestone.year}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{milestone.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl shadow-purple-900/25 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Start with a discovery call to align your goals with the right apps, architecture, and delivery plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
             data-cta-event="cta_contact" data-cta-label="page">
              Start a Conversation
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
               data-cta-event="cta_solutions" data-cta-label="page">
              Browse Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
