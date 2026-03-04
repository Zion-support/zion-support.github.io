import Link from 'next/link';
import { Metadata } from 'next';
import ROIImpactEstimator from './components/ROIImpactEstimator';

type FeaturedApp = {
  name: string;
  href: string;
  category: string;
  description: string;
  icon: string;
};

type ValueHighlight = {
  value: string;
  label: string;
  note: string;
};

type DeliveryStep = {
  title: string;
  description: string;
  duration: string;
};

type SpotlightPillar = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: string;
};

type AppCollectionLink = {
  name: string;
  href: string;
};

type AppCollection = {
  title: string;
  description: string;
  icon: string;
  links: AppCollectionLink[];
};

type DifferentiationPoint = {
  title: string;
  description: string;
  icon: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const featuredApps: FeaturedApp[] = [
  {
    name: 'Zion AI Chatbot Builder',
    href: '/zion-ai-chatbot-builder',
    category: 'Customer Experience',
    description: 'Launch branded AI chat experiences for support, sales, and onboarding.',
    icon: '💬',
  },
  {
    name: 'Zion AI Customer Support Pro',
    href: '/zion-ai-customer-support-pro',
    category: 'Customer Experience',
    description: 'Automate tier-1 support while keeping escalation paths for your team.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Email Assistant',
    href: '/zion-ai-email-assistant',
    category: 'Growth',
    description: 'Draft, summarize, and organize email workflows with AI assistance.',
    icon: '📧',
  },
  {
    name: 'Zion AI Marketing Automation',
    href: '/zion-ai-marketing-automation',
    category: 'Growth',
    description: 'Build campaign automations that adapt to user behavior in real time.',
    icon: '📈',
  },
  {
    name: 'Zion AI Social Media Manager',
    href: '/zion-ai-social-media-manager',
    category: 'Growth',
    description: 'Plan, schedule, and optimize social content with smart recommendations.',
    icon: '📱',
  },
  {
    name: 'Zion AI Sales Predictor',
    href: '/zion-ai-sales-predictor',
    category: 'Growth',
    description: 'Forecast demand and prioritize pipeline opportunities using AI models.',
    icon: '📊',
  },
  {
    name: 'Zion AI Predictive Analytics',
    href: '/zion-ai-predictive-analytics',
    category: 'Decision Intelligence',
    description: 'Turn historical signals into actionable forecasts for strategic planning.',
    icon: '🔮',
  },
  {
    name: 'Zion AI Code Assistant',
    href: '/zion-ai-code-assistant',
    category: 'Engineering',
    description: 'Speed up development cycles with AI code generation and refactoring help.',
    icon: '💻',
  },
  {
    name: 'Zion AI Code Reviewer',
    href: '/zion-ai-code-reviewer',
    category: 'Engineering',
    description: 'Catch quality issues quickly with automated reviews and best-practice checks.',
    icon: '🔍',
  },
  {
    name: 'Zion AI API Tester',
    href: '/zion-ai-api-tester',
    category: 'Engineering',
    description: 'Run API validation scenarios faster with intelligent test suggestions.',
    icon: '🧪',
  },
  {
    name: 'Zion AI Database Optimizer',
    href: '/zion-ai-database-optimizer',
    category: 'Engineering',
    description: 'Optimize query performance, indexing strategy, and data access patterns.',
    icon: '🗄️',
  },
  {
    name: 'Zion DevOps Automation',
    href: '/zion-devops-automation',
    category: 'Engineering',
    description: 'Automate release workflows, environment provisioning, and deployment tasks.',
    icon: '⚙️',
  },
  {
    name: 'Zion Performance Monitor',
    href: '/zion-performance-monitor',
    category: 'Engineering',
    description: 'Track application health and performance trends across critical services.',
    icon: '🚀',
  },
  {
    name: 'Zion Security Shield',
    href: '/zion-security-shield',
    category: 'Security',
    description: 'Protect digital assets with layered defense and continuous monitoring.',
    icon: '🛡️',
  },
  {
    name: 'Zion Cybersecurity Audit',
    href: '/zion-cybersecurity-audit',
    category: 'Security',
    description: 'Assess exposure and harden systems with security-first audit workflows.',
    icon: '🔐',
  },
  {
    name: 'Zion Cloud Vault',
    href: '/zion-cloud-vault',
    category: 'Security',
    description: 'Secure sensitive files with centralized storage, controls, and backup.',
    icon: '☁️',
  },
  {
    name: 'Zion Data Sync',
    href: '/zion-data-sync',
    category: 'Infrastructure',
    description: 'Synchronize business-critical data across tools and operational systems.',
    icon: '🔄',
  },
  {
    name: 'Zion AI Translation Service',
    href: '/zion-ai-translation-service',
    category: 'Productivity',
    description: 'Translate multilingual content at scale while preserving tone and context.',
    icon: '🌐',
  },
  {
    name: 'Zion AI Video Generator',
    href: '/zion-ai-video-generator',
    category: 'Productivity',
    description: 'Create short-form product and campaign videos with AI-powered workflows.',
    icon: '🎥',
  },
];

const spotlightPillars: SpotlightPillar[] = [
  {
    title: 'AI App Suite',
    description: 'Production-ready AI apps for growth, operations, and customer experience.',
    href: '/solutions',
    cta: 'Explore solutions',
    icon: '🤖',
  },
  {
    title: 'Security & Compliance',
    description: 'Security-focused products to protect systems, data, and business continuity.',
    href: '/services',
    cta: 'View services',
    icon: '🔒',
  },
  {
    title: 'Scale-Ready Delivery',
    description: 'Architecture, engineering, and monitoring capabilities built for scale.',
    href: '/pricing',
    cta: 'See plans',
    icon: '📦',
  },
];

const appCollections: AppCollection[] = [
  {
    title: 'Customer & Growth',
    description: 'Improve conversion, customer support, and campaign execution with AI-powered flows.',
    icon: '📣',
    links: [
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
    ],
  },
  {
    title: 'Engineering & DevOps',
    description: 'Increase software velocity, quality, and release confidence across teams.',
    icon: '🧠',
    links: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'AI API Tester', href: '/zion-ai-api-tester' },
      { name: 'AI Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Performance Monitor', href: '/zion-performance-monitor' },
    ],
  },
  {
    title: 'Security & Infrastructure',
    description: 'Protect operations and harden delivery with security-first architecture.',
    icon: '🛡️',
    links: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Data Sync', href: '/zion-data-sync' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
    ],
  },
];

const valueHighlights: ValueHighlight[] = [
  {
    value: '19+',
    label: 'Featured app routes',
    note: 'Verified links to active product pages',
  },
  {
    value: '3',
    label: 'Solution tracks',
    note: 'Growth, Engineering, and Security outcomes',
  },
  {
    value: '48h',
    label: 'Typical discovery kickoff',
    note: 'Fast intake and roadmap alignment',
  },
  {
    value: 'Enterprise',
    label: 'Delivery readiness',
    note: 'Security-first architecture and support',
  },
];

const differentiationPoints: DifferentiationPoint[] = [
  {
    title: 'Operationally Grounded',
    description:
      'Every app and service page is mapped to practical business workflows, not generic demos.',
    icon: '🧭',
  },
  {
    title: 'Integration-Ready',
    description:
      'We design for existing systems, data pipelines, and team handoffs from day one.',
    icon: '🔌',
  },
  {
    title: 'Secure by Default',
    description:
      'Security, privacy, and compliance requirements are built into delivery planning and implementation.',
    icon: '🛡️',
  },
  {
    title: 'Outcome-Focused',
    description:
      'Roadmaps are prioritized around measurable gains in speed, quality, and operating cost.',
    icon: '📈',
  },
];

const strategicOutcomes = [
  'Faster go-live cycles with scoped pilots',
  'Lower execution risk through secure delivery patterns',
  'Clear KPI tracking from discovery to scale',
];

const deliverySteps: DeliveryStep[] = [
  {
    title: 'Discovery & Prioritization',
    description:
      'Map your goals, constraints, and current stack to a focused implementation plan.',
    duration: 'Week 1',
  },
  {
    title: 'Pilot Build',
    description:
      'Launch a scoped pilot with clear KPIs and stakeholder visibility across teams.',
    duration: 'Weeks 2-4',
  },
  {
    title: 'Production Hardening',
    description:
      'Implement observability, resilience, security controls, and operational runbooks.',
    duration: 'Weeks 5-8',
  },
  {
    title: 'Scale & Optimization',
    description:
      'Expand use cases, automate workflows, and continuously optimize business outcomes.',
    duration: 'Ongoing',
  },
];

const implementationFaqs: FAQItem[] = [
  {
    question: 'How quickly can we launch a production-ready pilot?',
    answer:
      'Most teams launch an initial pilot in 2-4 weeks with clear KPI tracking, integration checkpoints, and a pragmatic handoff plan for operations.',
  },
  {
    question: 'How do you handle security and compliance requirements?',
    answer:
      'Security controls are defined during discovery and included in implementation scope, including access policies, auditability, and environment hardening.',
  },
  {
    question: 'Can Zion integrate with our existing tools and data stack?',
    answer:
      'Yes. Delivery plans are designed around existing systems, APIs, and team workflows so rollout improves operations instead of creating parallel complexity.',
  },
  {
    question: 'What does ownership look like after go-live?',
    answer:
      'You receive runbooks, observability guidance, and optimization recommendations so internal teams can operate confidently while continuing to improve outcomes.',
  },
];

export const metadata: Metadata = {
  title: 'Zion Tech Group | AI Apps, Security, and Engineering Delivery',
  description:
    'Discover Zion Tech Group AI applications, security products, and engineering services. Explore verified app links and start with a tailored implementation roadmap.',
  keywords: 'AI apps, cybersecurity, devops automation, software development, technology services',
  openGraph: {
    title: 'Zion Tech Group | AI Apps and IT Solutions',
    description:
      'Explore verified app links across growth, engineering, security, and infrastructure with delivery-ready implementation paths.',
    type: 'website',
  },
};

export default function Page() {
  const categoryPills = Array.from(new Set(featuredApps.map((app) => app.category)));
  const categoryBreakdown = categoryPills.map((category) => ({
    category,
    count: featuredApps.filter((app) => app.category === category).length,
  }));
  const launchOptions = featuredApps.slice(0, 4);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25 [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100 shadow-[0_0_0_1px_rgba(168,85,247,0.18)]">
              ✨ AI products, secure engineering, and delivery at scale
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Design, Launch, and Scale
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                {' '}
                AI Operations
              </span>{' '}
              With Confidence
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Zion Tech Group combines production-ready AI apps with expert engineering and
              security-first delivery. Evaluate live routes, validate priorities fast, and move from
              pilot to scaled operations with a practical execution plan.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
              >
                Explore Solutions →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
              >
                Book Strategy Session
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-7 py-3 text-base font-semibold text-purple-100 transition hover:bg-purple-500/20"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {strategicOutcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-xl border border-slate-700/70 bg-slate-900/65 px-4 py-3 text-sm text-slate-200"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-500/30 bg-slate-900/70 p-6 shadow-2xl shadow-purple-900/20 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
              Launch roadmap
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">What your first rollout can include</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Select a focused use case, ship a measurable pilot, and build toward enterprise-ready
              operations.
            </p>

            <ul className="mt-6 space-y-3">
              {launchOptions.map((app) => (
                <li
                  key={app.href}
                  className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
                >
                  <p className="font-semibold text-white">{app.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{app.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-purple-400/30 bg-purple-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                Top app categories
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {categoryBreakdown.slice(0, 4).map((item) => (
                  <div
                    key={item.category}
                    className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-3 py-2"
                  >
                    <p className="text-sm font-semibold text-white">{item.count}</p>
                    <p className="text-xs text-slate-300">{item.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueHighlights.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-purple-400/40"
            >
              <p className="text-3xl font-bold text-white transition group-hover:text-purple-200">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-100">{item.label}</p>
              <p className="mt-1 text-xs text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Interactive Planning
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Estimate your AI delivery upside in minutes
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Use this estimator to model potential impact from your first production automation
              rollout. It helps align stakeholders around expected effort, payback, and business
              value before kickoff.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Map estimated savings to measurable workflow improvements.
              </li>
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Test assumptions with finance, operations, and engineering leaders.
              </li>
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Translate pilot outcomes into a scale-ready implementation plan.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              Request a tailored ROI workshop
            </Link>
          </div>
          <ROIImpactEstimator />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-6 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Why teams choose Zion
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Experience-led design with execution-ready delivery
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              We pair product thinking, engineering rigor, and security-by-default delivery so your
              teams can move quickly without compromising reliability.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiationPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{point.icon}</div>
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-2 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Solution pillars
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Choose the path that matches your priorities
            </h2>
          </div>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-purple-400 hover:text-white"
          >
            Discuss your roadmap
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {spotlightPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-purple-500/20 bg-slate-900/65 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-500/15"
            >
              <div className="inline-flex rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-3xl">
                {pillar.icon}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.description}</p>
              <Link
                href={pillar.href}
                className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
              >
                {pillar.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Featured App Library
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Explore High-Impact Zion Apps by Outcome
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Browse production-focused app routes across growth, engineering, security, and
              infrastructure.
            </p>
          </div>
          <Link
            href="/services"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Browse all services
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categoryBreakdown.map((item) => (
            <span
              key={item.category}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              <span>{item.category}</span>
              <span className="rounded-full bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                {item.count}
              </span>
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredApps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2 text-3xl">
                  {app.icon}
                </span>
                <span className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                  {app.category}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
                {app.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{app.description}</p>
              <p className="mt-4 text-sm font-semibold text-purple-300">View app →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Browse by Business Goal</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Jump directly to app pages based on the result you want to drive.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {appCollections.map((collection) => (
              <div
                key={collection.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{collection.title}</h3>
                  <span className="text-2xl">{collection.icon}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{collection.description}</p>
                <ul className="mt-4 space-y-2">
                  {collection.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition hover:text-purple-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Delivery timeline
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A practical path from idea to scaled operations
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5"
              >
                <span className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300">
                  Step {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {step.duration}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Implementation FAQ
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Answers for delivery, risk, and ownership
          </h2>
          <div className="mt-6 space-y-3">
            {implementationFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-700/70 bg-slate-950/70 p-4 open:border-purple-400/40"
              >
                <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-slate-100">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl shadow-purple-900/25 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for a Tailored AI Delivery Plan?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Combine app modules, integration architecture, and engineering support into one
            measurable roadmap.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Services
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn About Zion
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-purple-300/50 bg-purple-500/20 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/30"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
