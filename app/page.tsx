import Link from 'next/link';
import { Metadata } from 'next';

type FeaturedApp = {
  name: string;
  href: string;
  category: string;
  description: string;
  icon: string;
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

const spotlightPillars = [
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

const appCollections = [
  {
    title: 'Customer & Growth',
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

export const metadata: Metadata = {
  title: 'Zion Tech Group | AI Apps, Security, and Engineering Services',
  description:
    'Discover Zion Tech Group AI applications, security products, and engineering services. Browse verified feature links to live app pages.',
  keywords: 'AI apps, cybersecurity, devops automation, software development, technology services',
  openGraph: {
    title: 'Zion Tech Group | AI Apps and IT Solutions',
    description:
      'Explore verified links to Zion Tech Group app pages across growth, engineering, security, and infrastructure.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200">
            ✨ AI Products + Engineering Services
          </div>
          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Launch Faster with AI Apps Built for Real Operations
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl">
            Discover growth, engineering, security, and infrastructure apps in one place. Every
            feature card below links to a live Zion app page so you can evaluate solutions quickly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3 text-base font-semibold text-white transition hover:from-purple-500 hover:to-pink-500"
            >
              Explore Solutions →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-400 hover:text-white"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-7 py-3 text-base font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5 text-center">
            <p className="text-3xl font-bold text-white">{featuredApps.length}+</p>
            <p className="text-sm text-slate-300">featured app links on this page</p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5 text-center">
            <p className="text-3xl font-bold text-white">{appCollections.length}</p>
            <p className="text-sm text-slate-300">solution tracks to browse quickly</p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5 text-center">
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-slate-300">links verified to existing app routes</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {spotlightPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <div className="text-3xl">{pillar.icon}</div>
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
              Explore More High-Impact Zion Apps
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Curated apps across growth, engineering, security, and infrastructure with direct,
              validated links.
            </p>
          </div>
          <Link
            href="/services"
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Browse all services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredApps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{app.icon}</span>
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
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/60 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Browse by Business Goal</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Jump directly to app pages based on the result you want to drive.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {appCollections.map((collection) => (
              <div key={collection.title} className="rounded-2xl border border-slate-700/70 bg-slate-950/60 p-5">
                <h3 className="text-lg font-semibold text-white">{collection.title}</h3>
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

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Need a Custom AI Stack?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Combine app modules, data integration, and engineering support into one delivery plan.
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
