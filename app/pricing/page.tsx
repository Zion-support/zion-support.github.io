import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description:
    'Transparent pricing for Zion Tech Group AI apps, engineering services, and platform packages. Start with a pilot, then scale with predictable monthly plans.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Starter',
    price: '$2,499',
    period: '/month',
    description: 'For teams exploring their first AI use case.',
    features: [
      'Up to 3 AI app modules',
      'Standard integration support',
      'Email-based support (48h SLA)',
      'Monthly performance reports',
      'Shared infrastructure',
      'Community knowledge base',
    ],
    cta: 'Start Pilot',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$6,999',
    period: '/month',
    description: 'For growing teams with multiple active workflows.',
    features: [
      'Up to 12 AI app modules',
      'Priority integration support',
      'Dedicated Slack channel (12h SLA)',
      'Weekly performance reviews',
      'Dedicated infrastructure',
      'Custom workflow automations',
      'Security & compliance baseline',
      'Quarterly business reviews',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with complex delivery needs.',
    features: [
      'Unlimited AI app modules',
      'Dedicated engineering team',
      'Priority support (4h SLA)',
      'Real-time dashboards & monitoring',
      'Private cloud deployment options',
      'Advanced security hardening',
      'SOC 2 / GDPR compliance support',
      'Custom SLAs & governance',
      'Executive strategy reviews',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'Can I start with a pilot before committing to a plan?',
    answer:
      'Yes. Most teams start with a 2-4 week pilot focused on a single use case. This lets you validate results before scaling.',
  },
  {
    question: 'What is included in integration support?',
    answer:
      'Integration support covers connecting Zion apps with your existing tools, APIs, data pipelines, and team workflows.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Plans can be adjusted at any billing cycle. We will help you right-size your plan based on actual usage and team growth.',
  },
  {
    question: 'Do you offer annual pricing?',
    answer:
      'Yes. Annual contracts include a 15% discount and priority onboarding. Contact our team for a custom quote.',
  },
  {
    question: 'What happens after the contract ends?',
    answer:
      'You retain access to all runbooks, documentation, and configurations. We provide a transition plan for internal teams.',
  },
  {
    question: 'Are there usage limits or overage fees?',
    answer:
      'Plans include baseline usage tiers. Overage is billed at transparent rates. We work with you to right-size before scaling to avoid surprises.',
  },
  {
    question: 'Do you offer proof-of-concept or pilot pricing?',
    answer:
      'Yes. Many teams start with a 2–4 week pilot at a fixed fee to validate impact before committing to a monthly plan. Contact us for pilot options.',
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/3 h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-4rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Pricing' },
          ]}
          className="mb-6"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transparent Plans, Predictable Costs
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Choose a plan that matches your team size and delivery goals. Every plan includes
            implementation support and a clear path to production.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-slate-900/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Start with a pilot
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Validate before you scale
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Most teams start with a 2–4 week pilot at a fixed fee. Validate one use case, measure
            impact, and then choose a monthly plan. No long-term commitment required.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Pilot scope</h3>
              <p className="mt-2 text-sm text-slate-300">
                Single use case (e.g., document processing, chatbot, or analytics). Clear KPIs and
                success criteria defined in discovery.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Typical duration</h3>
              <p className="mt-2 text-sm text-slate-300">
                2–4 weeks from kickoff to results. Includes setup, integration, and a results review
                with recommendations for scaling.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Pilot pricing</h3>
              <p className="mt-2 text-sm text-slate-300">
                Fixed fee based on scope. Contact us for a quote. Many pilots convert to Starter or
                Professional plans with credit applied.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Request pilot quote
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 shadow-lg transition hover:-translate-y-1 ${
                plan.highlighted
                  ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-slate-900/70 shadow-purple-500/15'
                  : 'border-slate-700/70 bg-slate-900/65 shadow-black/20'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-slate-400">{plan.period}</span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500'
                    : 'border border-slate-600 bg-slate-900/70 text-slate-100 hover:border-purple-400 hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Why teams choose our plans
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Transparent pricing, no surprises
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Every plan includes implementation support, security baseline, and a clear path to production. We help you right-size from day one so you scale with confidence.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Fixed monthly cost</h3>
              <p className="mt-2 text-sm text-slate-300">
                Predictable billing with no hidden fees. Know exactly what you pay each month.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Pilot-first approach</h3>
              <p className="mt-2 text-sm text-slate-300">
                Validate impact with a 2–4 week pilot before committing. Many pilots convert with credit applied.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Flexible scaling</h3>
              <p className="mt-2 text-sm text-slate-300">
                Upgrade or adjust at any billing cycle. We help you match plan to actual usage and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Use case fit
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Which plan fits your goals?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Match your team size and use case to the right plan for your stage.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Starter</h3>
              <p className="mt-2 text-sm text-slate-300">
                First AI use case, single department or pilot. Validate impact before scaling.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Professional</h3>
              <p className="mt-2 text-sm text-slate-300">
                Multiple workflows, cross-team adoption. Need dedicated support and priority integration.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
              <h3 className="font-semibold text-white">Enterprise</h3>
              <p className="mt-2 text-sm text-slate-300">
                Organization-wide rollout, complex compliance, custom SLAs. Dedicated engineering and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Common Pricing Questions
          </h2>
          <div className="mt-6 divide-y divide-slate-700/70 rounded-2xl border border-slate-700/70 bg-slate-950/60">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-sm font-semibold text-white">{faq.question}</span>
                  <span className="mt-0.5 text-purple-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a Custom Quote?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Every enterprise has unique requirements. Let us build a plan that fits your team,
            budget, and timeline.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
