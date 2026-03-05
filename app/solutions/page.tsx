import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description:
    'Explore Zion Tech Group AI solutions across growth, engineering, security, and operations. Find the right app and delivery path for your team.',
};

const solutionCategories = [
  {
    title: 'Customer & Growth',
    description:
      'AI-powered tools for lead generation, customer support, email marketing, and campaign automation.',
    icon: '📣',
    apps: [
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
    ],
  },
  {
    title: 'Engineering & DevOps',
    description:
      'Accelerate development cycles with AI code generation, automated testing, and deployment orchestration.',
    icon: '⚙️',
    apps: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'AI API Tester', href: '/zion-ai-api-tester' },
      { name: 'AI Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Performance Monitor', href: '/zion-performance-monitor' },
    ],
  },
  {
    title: 'Security & Compliance',
    description:
      'Protect systems, data, and business continuity with security-first AI architecture and audit capabilities.',
    icon: '🛡️',
    apps: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
    ],
  },
  {
    title: 'Operations & Automation',
    description:
      'Streamline documents, meetings, and workflows with always-on AI automation for back-office operations.',
    icon: '🧠',
    apps: [
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Project Master', href: '/zion-project-master' },
    ],
  },
];

const deliveryPaths = [
  {
    title: 'Pilot Sprint',
    description: 'Launch a scoped pilot in 2-4 weeks with clear KPI tracking.',
    duration: '2-4 weeks',
    ideal: 'Teams ready to test one use case',
  },
  {
    title: 'Full Rollout',
    description: 'End-to-end implementation with integration, security, and optimization.',
    duration: '6-12 weeks',
    ideal: 'Organizations scaling AI across departments',
  },
  {
    title: 'Continuous Optimization',
    description: 'Ongoing improvement, monitoring, and feature expansion after launch.',
    duration: 'Ongoing',
    ideal: 'Teams with production AI workloads',
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Solutions
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI apps built for{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              real business outcomes
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Browse production-ready AI applications organized by business function. Each solution includes
            verified app links and a practical delivery path your team can execute.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {solutionCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:border-purple-400/40 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/70 text-2xl">
                  {category.icon}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                  <p className="mt-1 text-sm text-slate-300">{category.description}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {category.apps.map((app) => (
                  <Link
                    key={app.href}
                    href={app.href}
                    className="group flex items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:text-white"
                  >
                    <span className="flex-1">{app.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 transition group-hover:text-purple-400" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Industry Solutions
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">Tailored for your vertical</h2>
          <p className="mt-1 text-sm text-slate-300">
            Explore AI solutions built for specific industries and use cases.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/solutions/healthcare"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Healthcare
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/financial-services"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Financial Services
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/insurance"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Insurance
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/beauty-wellness"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Beauty & Wellness
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/asset-management"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Asset Management & Investment
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/government-and-public-sector"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Government & Public Sector
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/banking-and-capital-markets"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Banking & Capital Markets
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/telecommunications"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Telecommunications
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/technology-and-saas"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Technology & SaaS
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/ecommerce-retail"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              E-Commerce & Retail
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/manufacturing-industrial"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Manufacturing & Industrial
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/logistics-supply-chain"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Logistics & Supply Chain
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/media-entertainment"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Media & Entertainment
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/real-estate-property"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Real Estate & Property
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/agriculture-agritech"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Agriculture & Agritech
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/automotive-mobility"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Automotive & Mobility
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/energy-utilities"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Energy & Utilities
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/solutions/renewable-energy-cleantech"
              className="inline-flex items-center rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/50 hover:text-white"
            >
              Renewable Energy & Cleantech
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-purple-400" />
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-200 transition hover:bg-purple-500/20"
            >
              View All Industries
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Delivery paths
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Choose the engagement that fits your timeline
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {deliveryPaths.map((path) => (
              <div
                key={path.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                  {path.duration}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{path.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{path.description}</p>
                <p className="mt-3 text-xs text-slate-400">Ideal for: {path.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl shadow-purple-900/25 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need help choosing a solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Our team can map your goals to the right app modules, integration architecture, and delivery plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Talk to a Specialist
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse All Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
