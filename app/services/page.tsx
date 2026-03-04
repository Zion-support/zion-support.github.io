import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description:
    'Professional AI implementation, engineering, security, and consulting services. From discovery to production-ready delivery.',
  alternates: { canonical: '/services' },
};

type ServiceCategory = {
  title: string;
  description: string;
  icon: string;
  services: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: 'AI Implementation',
    description:
      'End-to-end AI solution design, development, and deployment tailored to your business workflows.',
    icon: '🤖',
    services: [
      'Custom AI model integration',
      'Chatbot & virtual assistant deployment',
      'Predictive analytics pipelines',
      'Natural language processing solutions',
      'Computer vision implementation',
      'AI workflow automation',
    ],
  },
  {
    title: 'Software Engineering',
    description:
      'Full-stack development with modern architecture, from APIs and microservices to production-grade frontends.',
    icon: '💻',
    services: [
      'Full-stack web application development',
      'API design and microservices architecture',
      'Cloud-native application development',
      'Legacy system modernization',
      'Database design and optimization',
      'Performance engineering',
    ],
  },
  {
    title: 'Security & Compliance',
    description:
      'Comprehensive security assessments, compliance frameworks, and threat mitigation strategies.',
    icon: '🛡️',
    services: [
      'Cybersecurity audit and assessment',
      'Penetration testing and vulnerability scanning',
      'Compliance framework implementation (SOC 2, ISO 27001)',
      'Security architecture review',
      'Incident response planning',
      'Data privacy and governance',
    ],
  },
  {
    title: 'DevOps & Cloud',
    description:
      'Infrastructure automation, CI/CD pipelines, and cloud migration for faster, more reliable deployments.',
    icon: '☁️',
    services: [
      'CI/CD pipeline design and automation',
      'Cloud migration and optimization (AWS, GCP, Azure)',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Container orchestration (Docker, Kubernetes)',
      'Monitoring and observability setup',
      'Cost optimization and resource management',
    ],
  },
  {
    title: 'Strategy & Consulting',
    description:
      'Technology roadmapping, architecture advisory, and digital transformation guidance for leadership teams.',
    icon: '📋',
    services: [
      'AI readiness assessment',
      'Technology roadmap planning',
      'Architecture advisory',
      'Digital transformation strategy',
      'Vendor selection and evaluation',
      'Team training and enablement',
    ],
  },
  {
    title: 'Data & Analytics',
    description:
      'Data pipeline engineering, business intelligence, and analytics infrastructure for data-driven decisions.',
    icon: '📊',
    services: [
      'Data pipeline design and ETL',
      'Business intelligence dashboards',
      'Data warehouse architecture',
      'Real-time analytics infrastructure',
      'Data quality and governance',
      'Machine learning model training',
    ],
  },
];

type EngagementModel = {
  title: string;
  description: string;
  features: string[];
  cta: string;
};

const engagementModels: EngagementModel[] = [
  {
    title: 'Discovery Sprint',
    description: 'A focused 1-2 week engagement to map goals, audit your stack, and produce an actionable implementation roadmap.',
    features: [
      'Stakeholder interviews',
      'Technical stack audit',
      'Prioritized roadmap document',
      'Architecture recommendations',
    ],
    cta: 'Book a Discovery Sprint',
  },
  {
    title: 'Pilot Build',
    description: 'A 4-8 week engagement to build and ship a scoped pilot with real integrations and measurable KPIs.',
    features: [
      'Production-quality implementation',
      'Integration with your tools',
      'KPI tracking and reporting',
      'Handoff documentation and runbooks',
    ],
    cta: 'Start a Pilot',
  },
  {
    title: 'Ongoing Partnership',
    description: 'Continuous engineering support, optimization, and expansion of AI capabilities across your organization.',
    features: [
      'Dedicated engineering team',
      'Quarterly roadmap reviews',
      'Proactive optimization',
      'Priority support and SLAs',
    ],
    cta: 'Discuss Partnership',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            🔧 Professional Services
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Expert Services for{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              Every Stage
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From initial discovery to scaled production, our team delivers AI implementation,
            engineering, security, and consulting services that drive measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/70"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="sr-only">Service Categories</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <span className="inline-flex rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                {category.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 text-sm text-slate-200"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Engagement Models
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Choose How You Work With Us
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Flexible engagement options designed to match where you are in your AI journey.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-6 shadow-lg shadow-black/20"
              >
                <h3 className="text-xl font-bold text-white">{model.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{model.description}</p>
                <ul className="mt-4 space-y-2">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-200"
                    >
                      <span className="mt-1 text-purple-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
                >
                  {model.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Tell us about your challenge and we will design a service engagement that delivers
            real results.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Book a Call
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
