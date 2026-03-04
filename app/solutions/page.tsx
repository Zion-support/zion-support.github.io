import Link from 'next/link';
import { Metadata } from 'next';
import { AI_SERVICE_LINKS } from '../constants/navigation';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description:
    'Explore AI-powered solutions for growth, engineering, security, and operations. Find the right tools to transform your business workflows.',
  alternates: { canonical: '/solutions' },
};

type SolutionTrack = {
  title: string;
  description: string;
  icon: string;
  apps: { name: string; href: string }[];
};

const solutionTracks: SolutionTrack[] = [
  {
    title: 'Customer & Growth',
    description:
      'Convert leads faster, automate outreach, and deliver exceptional customer support with AI-powered workflows.',
    icon: '📣',
    apps: [
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
    ],
  },
  {
    title: 'Engineering & DevOps',
    description:
      'Increase development velocity, catch bugs earlier, and automate release pipelines with intelligent tooling.',
    icon: '🧠',
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
      'Protect digital assets, manage compliance, and harden systems with security-first architecture.',
    icon: '🛡️',
    apps: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
    ],
  },
  {
    title: 'Operations & Automation',
    description:
      'Streamline documents, meetings, and CRM handoffs with always-on AI workflow automation.',
    icon: '⚙️',
    apps: [
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Project Master', href: '/zion-project-master' },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100">
            🤖 AI-Powered Solutions
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Solutions Built for{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              Real Business Impact
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Choose from production-ready AI applications organized by business outcome. Each
            solution is designed to integrate with your existing tools and deliver measurable
            results from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Book a Strategy Session
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {solutionTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                  {track.icon}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{track.title}</h2>
                  <p className="mt-1 max-w-2xl text-sm text-slate-300">{track.description}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {track.apps.map((app) => (
                  <Link
                    key={app.href}
                    href={app.href}
                    className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-5 py-4 transition hover:-translate-y-0.5 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <p className="font-semibold text-white transition group-hover:text-purple-300">
                      {app.name}
                    </p>
                    <p className="mt-1 text-sm text-purple-300 opacity-0 transition group-hover:opacity-100">
                      Learn more →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            All AI Services
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Browse Every Available Service</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {AI_SERVICE_LINKS.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-purple-400/50 hover:text-white"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl shadow-purple-900/25 sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Tell us about your use case and we will recommend the best solution path for your
            team.
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
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
