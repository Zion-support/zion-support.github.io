import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world results from AI implementations across growth, engineering, and operations. See how teams use Zion Tech Group to deliver measurable outcomes.',
  alternates: { canonical: '/case-studies' },
};

const caseStudies = [
  {
    title: 'SaaS Platform Reduces Support Volume by 40% with AI Chatbot',
    industry: 'Technology',
    result: '40% fewer support tickets',
    description:
      'A mid-market SaaS company deployed Zion AI Chatbot Builder to handle tier-1 support inquiries, freeing their team to focus on complex escalations.',
    apps: ['AI Chatbot Builder', 'AI Customer Support Pro'],
    icon: '💬',
  },
  {
    title: 'Ecommerce Brand Increases Revenue 28% with Predictive Lead Scoring',
    industry: 'Ecommerce',
    result: '28% revenue increase',
    description:
      'An ecommerce brand used AI Lead Scoring and Email Marketing Pro to prioritize high-intent shoppers and personalize outreach at scale.',
    apps: ['AI Lead Scoring', 'AI Email Marketing Pro'],
    icon: '📈',
  },
  {
    title: 'Fintech Startup Passes SOC 2 Audit in 8 Weeks',
    industry: 'Financial Services',
    result: 'SOC 2 in 8 weeks',
    description:
      'A Series A fintech company used Zion Compliance Manager and Security Shield to establish controls and pass their first SOC 2 audit ahead of schedule.',
    apps: ['Compliance Manager', 'Security Shield'],
    icon: '🔒',
  },
  {
    title: 'Logistics Company Cuts Fulfillment Planning Time by 60%',
    industry: 'Supply Chain',
    result: '60% faster planning',
    description:
      'A regional logistics provider deployed the Supply Chain Optimizer to automate demand forecasting and reduce bottlenecks in fulfillment scheduling.',
    apps: ['Supply Chain Optimizer', 'AI Predictive Analytics'],
    icon: '🚚',
  },
  {
    title: 'Engineering Team Ships 3x Faster with AI Code Review',
    industry: 'Technology',
    result: '3x deployment frequency',
    description:
      'A 40-person engineering team integrated AI Code Reviewer and DevOps Automation to catch issues earlier and streamline their release cycle.',
    apps: ['AI Code Reviewer', 'DevOps Automation'],
    icon: '⚙️',
  },
  {
    title: 'Healthcare Provider Modernizes Records Workflow',
    industry: 'Healthcare',
    result: '75% less manual entry',
    description:
      'A multi-location healthcare provider used AI Document Processor and Medical Records Manager to digitize intake workflows and reduce manual data entry.',
    apps: ['AI Document Processor', 'Medical Records Manager'],
    icon: '🏥',
  },
  {
    title: 'Media Studio Cuts Content Production Time 50%',
    industry: 'Media & Entertainment',
    result: '50% faster production',
    description:
      'A content production studio used Content Studio and AI Video Generator to automate asset creation and repurpose content across channels.',
    apps: ['Content Studio', 'AI Video Generator'],
    icon: '🎬',
  },
  {
    title: 'Retail Chain Improves Inventory Accuracy 35%',
    industry: 'Retail',
    result: '35% fewer stockouts',
    description:
      'A regional retail chain deployed Smart Inventory Manager and AI Supply Chain Optimizer to align demand with supply and reduce out-of-stock incidents.',
    apps: ['Smart Inventory Manager', 'AI Supply Chain Optimizer'],
    icon: '🛒',
  },
  {
    title: 'Insurance Firm Automates Claims Processing 45%',
    industry: 'Insurance',
    result: '45% faster claims',
    description:
      'An insurance carrier used AI Document Processor and AI Fraud Detector to streamline claims intake and reduce manual review cycles.',
    apps: ['AI Document Processor', 'AI Fraud Detector'],
    icon: '🛡️',
  },
  {
    title: 'Pharma Accelerates Trial Data Analysis 60%',
    industry: 'Pharmaceuticals',
    result: '60% faster analysis',
    description:
      'A life sciences company deployed AI Document Analyzer and AI Report Generator to automate regulatory submissions and trial data summaries.',
    apps: ['AI Document Analyzer', 'AI Report Generator'],
    icon: '🧪',
  },
  {
    title: 'Telecom Reduces Network Outages 40% with Predictive Maintenance',
    industry: 'Telecommunications',
    result: '40% fewer outages',
    description:
      'A regional telecom operator deployed AI Predictive Maintenance and AI Data Pipeline to monitor infrastructure proactively and reduce unplanned downtime.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline'],
    icon: '📡',
  },
  {
    title: 'Auto Manufacturer Streamlines Parts Supply Chain 45%',
    industry: 'Automotive',
    result: '45% faster replenishment',
    description:
      'An automotive OEM used AI Supply Chain Optimizer and Smart Inventory Manager to align parts demand with supplier lead times and reduce stockouts.',
    apps: ['AI Supply Chain Optimizer', 'Smart Inventory Manager'],
    icon: '🚗',
  },
  {
    title: 'Aerospace Supplier Cuts Document Review Time 50%',
    industry: 'Aerospace & Defense',
    result: '50% faster review',
    description:
      'An aerospace components supplier used AI Document Processor and AI Contract Analyzer to automate compliance documentation and reduce manual review cycles for ITAR-sensitive materials.',
    apps: ['AI Document Processor', 'AI Contract Analyzer'],
    icon: '✈️',
  },
  {
    title: 'Shipping Line Reduces Port Delays 35%',
    industry: 'Maritime & Shipping',
    result: '35% fewer delays',
    description:
      'A regional shipping line deployed AI Supply Chain Optimizer and AI Predictive Maintenance to improve vessel scheduling, cargo forecasting, and port coordination.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance'],
    icon: '🚢',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Case Studies
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real Results from Real Teams
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            See how organizations across industries are using Zion Tech Group solutions to
            drive measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2 text-3xl">
                  {study.icon}
                </span>
                <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                  {study.result}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
                {study.title}
              </h2>
              <p className="mt-1 text-xs font-medium text-slate-400">{study.industry}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{study.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.apps.map((app) => (
                  <span
                    key={app}
                    className="rounded-lg border border-slate-700/60 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Tell us about your goals and we will map a practical plan to get there.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start a Conversation
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
