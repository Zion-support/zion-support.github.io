import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Professional AI & Engineering Services',
  description:
    'Professional AI engineering, cloud infrastructure, cybersecurity, and software development services from Zion Tech Group.',
  alternates: { canonical: '/services' },
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions, model training, and intelligent automation.',
    icon: '🤖',
    services: [
      'Custom AI model development',
      'Natural language processing',
      'Computer vision & image recognition',
      'Predictive analytics pipelines',
      'AI integration and deployment',
      'Machine learning operations (MLOps)',
    ],
    href: '/ai-services/process-automation',
  },
  {
    title: 'Web & Software Development',
    description: 'Modern web applications, APIs, and full-stack engineering.',
    icon: '🌐',
    services: [
      'Next.js & React applications',
      'REST and GraphQL API design',
      'Database architecture & optimization',
      'Mobile-responsive development',
      'Performance optimization',
      'Legacy system modernization',
    ],
    href: '/web-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture, migration, and management.',
    icon: '☁️',
    services: [
      'Cloud migration strategy',
      'Infrastructure as Code (IaC)',
      'Auto-scaling & load balancing',
      'Multi-cloud architecture',
      'Cost optimization audits',
      'Disaster recovery planning',
    ],
    href: '/cloud-infrastructure',
  },
  {
    title: 'Cybersecurity',
    description: 'End-to-end security audits, monitoring, and compliance programs.',
    icon: '🔒',
    services: [
      'Penetration testing',
      'Security architecture review',
      'Compliance program setup (SOC 2, GDPR)',
      'Incident response planning',
      'Vulnerability management',
      'Employee security training',
    ],
    href: '/cybersecurity',
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business intelligence.',
    icon: '📊',
    services: [
      'Data warehouse design',
      'Real-time analytics dashboards',
      'ETL pipeline development',
      'Business intelligence reporting',
      'Data quality & governance',
      'Predictive modeling',
    ],
    href: '/data-analytics',
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, infrastructure automation, and release engineering.',
    icon: '⚙️',
    services: [
      'CI/CD pipeline design',
      'Container orchestration (K8s)',
      'Infrastructure automation',
      'Release management',
      'Monitoring & observability',
      'Site reliability engineering',
    ],
    href: '/zion-devops-automation',
  },
  {
    title: 'AI Talent & Recruitment',
    description: 'AI-powered talent matching, candidate screening, and workforce analytics.',
    icon: '👥',
    services: [
      'AI candidate screening',
      'Skills-based matching',
      'Workforce analytics',
      'Onboarding automation',
      'Retention analytics',
      'Talent pipeline optimization',
    ],
    href: '/zion-ai-recruitment-pro',
  },
  {
    title: 'Micro SAAS & Product Development',
    description: 'Packaged software solutions and rapid product deployment.',
    icon: '📦',
    services: [
      'Micro-SaaS product design',
      'AI content generation tools',
      'Lead generation platforms',
      'Analytics dashboards',
      'Quick deployment frameworks',
      'White-label solutions',
    ],
    href: '/micro-saas-services',
  },
];

const engagementModels = [
  {
    title: 'Discovery & Strategy',
    duration: '1–2 weeks',
    description:
      'Map your goals, constraints, and current systems to a focused implementation roadmap.',
    icon: '🔍',
  },
  {
    title: 'Pilot Build',
    duration: '2–6 weeks',
    description:
      'Launch a scoped pilot with measurable KPIs, integration checkpoints, and team handoff.',
    icon: '🚀',
  },
  {
    title: 'Production Delivery',
    duration: '6–12 weeks',
    description:
      'Full implementation with security hardening, observability, and operational runbooks.',
    icon: '📦',
  },
  {
    title: 'Ongoing Optimization',
    duration: 'Continuous',
    description:
      'Expand features, optimize performance, and automate increasingly complex workflows.',
    icon: '📈',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} className="mb-6" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering Services Built for Scale
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From AI model development to cloud migration, our engineering teams deliver
            production-grade systems with security, observability, and operational readiness
            built in.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Request a Proposal
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl border border-slate-500/70 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/60 hover:text-white"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                  {category.icon}
                </span>
                <h2 className="text-lg font-semibold text-white">{category.title}</h2>
              </div>
              <p className="mt-3 text-sm text-slate-300">{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 text-sm text-slate-200"
                  >
                    <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href={category.href}
                className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Engagement Models
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            How We Deliver
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Every project follows a structured delivery framework designed for speed,
            transparency, and measurable outcomes.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.map((model, index) => (
              <div
                key={model.title}
                className="relative rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5"
              >
                <span className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300">
                  Phase {index + 1}
                </span>
                <span className="text-3xl">{model.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{model.title}</h3>
                <p className="mt-1 text-xs font-medium text-purple-300">{model.duration}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Scope Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Tell us about your goals and we will outline a practical delivery plan within 48
            hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
