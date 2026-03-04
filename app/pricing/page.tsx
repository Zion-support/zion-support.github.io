import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description:
    'Transparent pricing for AI implementation, engineering, and security services. Plans for startups, growth companies, and enterprises.',
  alternates: { canonical: '/pricing' },
};

type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description:
      'For teams getting started with AI. Includes a focused implementation and ongoing advisory support.',
    features: [
      'Single AI application deployment',
      'Basic integration support',
      'Monthly optimization review',
      'Email support (48h response)',
      'Documentation and runbooks',
      'Quarterly roadmap check-in',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$7,500',
    period: '/month',
    description:
      'For scaling teams that need multiple AI solutions, deeper integrations, and faster support.',
    features: [
      'Up to 5 AI application deployments',
      'Advanced integrations and APIs',
      'Weekly optimization reviews',
      'Priority support (12h response)',
      'Dedicated success manager',
      'Security audit included',
      'Custom analytics dashboards',
      'Monthly strategy sessions',
    ],
    cta: 'Scale With Us',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description:
      'For organizations with complex requirements, compliance needs, and multi-team deployments.',
    features: [
      'Unlimited AI application deployments',
      'Custom architecture design',
      'Dedicated engineering team',
      'SLA-backed support (4h response)',
      'SOC 2 / ISO 27001 compliance support',
      'On-premises deployment options',
      'Executive quarterly reviews',
      'Priority feature development',
      'Training and enablement programs',
    ],
    cta: 'Contact Sales',
  },
];

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes. You can upgrade or adjust your plan at any time. We will prorate costs and transition your services smoothly.',
  },
  {
    question: 'What is included in the onboarding?',
    answer:
      'Every plan includes a discovery session, technical integration support, and documentation. Growth and Enterprise plans include a dedicated success manager to guide the process.',
  },
  {
    question: 'Do you offer project-based pricing?',
    answer:
      'Yes. For one-time engagements like Discovery Sprints or Pilot Builds, we offer fixed-scope pricing. Contact us for a custom quote.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer:
      'Starter and Growth plans require a 3-month minimum commitment. Enterprise agreements are custom and typically annual.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit cards, bank transfers, and invoiced payments for Enterprise accounts.',
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            💰 Transparent Pricing
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Plans That Scale{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              With You
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From focused pilots to enterprise-wide rollouts, choose the plan that matches your
            ambition. All plans include dedicated onboarding.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-lg transition sm:p-8 ${
                tier.highlighted
                  ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-slate-900/80 shadow-purple-500/15'
                  : 'border-slate-700/70 bg-slate-900/65 shadow-black/20'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-white">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-slate-400">{tier.period}</span>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-200"
                  >
                    <span className="mt-0.5 text-purple-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:-translate-y-0.5'
                    : 'border border-slate-500/80 bg-slate-900/60 text-slate-100 hover:border-purple-300/70 hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Need a custom engagement?
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Project-Based Options
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            We also offer fixed-scope engagements for specific needs.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-slate-700/70 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Discovery Sprint
              </p>
              <p className="mt-1 text-2xl font-bold text-white">$5,000 - $15,000</p>
              <p className="mt-2 text-sm text-slate-300">
                1-2 week engagement with stakeholder interviews, stack audit, and roadmap.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/70 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Pilot Build
              </p>
              <p className="mt-1 text-2xl font-bold text-white">$25,000 - $75,000</p>
              <p className="mt-2 text-sm text-slate-300">
                4-8 week scoped build with integrations, testing, and production deployment.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/70 bg-slate-950/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Security Audit
              </p>
              <p className="mt-1 text-2xl font-bold text-white">$10,000 - $40,000</p>
              <p className="mt-2 text-sm text-slate-300">
                Comprehensive security assessment with remediation plan and compliance mapping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-slate-700/70 rounded-2xl border border-slate-700/70 bg-slate-950/60">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-sm font-semibold text-white">{faq.question}</span>
                  <span className="mt-0.5 text-purple-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Our team is ready to discuss your specific needs and help you choose the right plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
