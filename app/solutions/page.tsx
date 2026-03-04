import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Explore AI-powered solutions across growth, engineering, security, and operations. Choose a focused path and launch with measurable outcomes.',
  alternates: { canonical: '/solutions' },
};

const tracks = [
  {
    title: 'Customer & Growth',
    description:
      'Drive revenue with AI-powered lead scoring, marketing automation, and customer support.',
    icon: '📣',
    apps: [
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
    ],
  },
  {
    title: 'Engineering & DevOps',
    description:
      'Ship faster with AI code review, automated testing, and streamlined deployment pipelines.',
    icon: '⚙️',
    apps: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'AI API Tester', href: '/zion-ai-api-tester' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Database Optimizer', href: '/zion-ai-database-optimizer' },
    ],
  },
  {
    title: 'Security & Compliance',
    description:
      'Protect systems and meet compliance requirements with layered security controls.',
    icon: '🛡️',
    apps: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
    ],
  },
  {
    title: 'Operations & Automation',
    description:
      'Eliminate manual bottlenecks with intelligent document processing, scheduling, and workflow automation.',
    icon: '🧠',
    apps: [
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Project Master', href: '/zion-project-master' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
    ],
  },
];

const industries = [
  { name: 'Supply Chain', href: '/supply-chain-optimizer', icon: '🚚' },
  { name: 'Ecommerce', href: '/ecommerce-analytics-pro', icon: '🛒' },
  { name: 'Property Management', href: '/property-management-ai', icon: '🏠' },
  { name: 'Healthcare Records', href: '/medical-records-manager', icon: '🏥' },
  { name: 'Legal Documents', href: '/legal-document-manager', icon: '⚖️' },
  { name: 'Online Learning', href: '/online-learning-platform', icon: '🎓' },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Solutions
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-Powered Solutions for Every Business Function
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Choose a solution track aligned to your business goals. Each path includes
            production-ready apps, integration guidance, and a clear implementation roadmap.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Book a Strategy Session
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl border border-slate-500/70 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/60 hover:text-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:border-purple-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                  {track.icon}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-white">{track.title}</h2>
                  <p className="mt-1 text-sm text-slate-300">{track.description}</p>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {track.apps.map((app) => (
                  <li key={app.href}>
                    <Link
                      href={app.href}
                      className="block rounded-lg border border-slate-700/60 bg-slate-950/50 px-3 py-2.5 text-sm text-slate-200 transition hover:border-purple-400/50 hover:text-white"
                    >
                      {app.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Industry Solutions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Vertical-Specific Platforms
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Purpose-built tools for industries with unique operational needs.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/60 p-4 text-center transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <span className="block text-3xl">{industry.icon}</span>
                <span className="mt-2 block text-sm font-medium text-slate-200 group-hover:text-white">
                  {industry.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Book a 30-minute discovery call. We will help you identify the highest-impact
            use case and map a practical delivery plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
