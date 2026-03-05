import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description:
    'AI workflows tailored to your industry. Explore solutions for financial services, healthcare, ecommerce, manufacturing, legal, education, and 35+ verticals.',
  alternates: { canonical: '/industries' },
};

type IndustrySolution = {
  industry: string;
  icon: string;
  headline: string;
  description: string;
  apps: string[];
  href: string;
};

const industries: IndustrySolution[] = [
  {
    industry: 'Financial Services',
    icon: '🏦',
    headline: 'Automate compliance and accelerate lending decisions',
    description:
      'Deploy fraud detection, risk scoring, and regulatory compliance workflows that reduce manual review time and increase approval accuracy.',
    apps: ['AI Fraud Detector', 'AI Financial Forecaster', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions/financial-services',
  },
  {
    industry: 'Asset Management & Investment',
    icon: '📊',
    headline: 'Portfolio analytics, risk assessment, and compliance reporting',
    description:
      'Deploy AI-powered workflows for portfolio analytics, fraud detection, regulatory reporting, and client communications for wealth managers and investment firms.',
    apps: ['AI Financial Forecaster', 'AI Fraud Detector', 'AI Risk Assessor', 'Compliance Manager'],
    href: '/solutions/asset-management',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    headline: 'Streamline records and improve patient communication',
    description:
      'Digitize medical records, automate appointment scheduling, and build AI-assisted patient intake flows with full HIPAA compliance.',
    apps: ['Medical Records Manager', 'AI Document Processor', 'AI Chatbot Builder', 'Security Shield'],
    href: '/solutions/healthcare',
  },
  {
    industry: 'E-Commerce & Retail',
    icon: '🛒',
    headline: 'Personalize shopping and optimize supply chains',
    description:
      'Drive higher conversion with AI-powered recommendations, demand forecasting, and inventory optimization across channels.',
    apps: ['Ecommerce Analytics Pro', 'Smart Inventory Manager', 'AI Sales Predictor', 'AI Marketing Automation'],
    href: '/ecommerce-analytics-pro',
  },
  {
    industry: 'Real Estate & Property',
    icon: '🏠',
    headline: 'Automate property ops and tenant engagement',
    description:
      'Manage listings, automate tenant communications, and generate property performance reports with AI-driven workflows.',
    apps: ['Property Management AI', 'AI Document Processor', 'AI Chatbot Builder', 'Invoice Genius'],
    href: '/property-management-ai',
  },
  {
    industry: 'Legal & Professional Services',
    icon: '⚖️',
    headline: 'Accelerate contract review and case management',
    description:
      'Reduce time spent on document review, automate client intake, and surface risk clauses with AI-powered legal analysis.',
    apps: ['Legal Document Manager', 'AI Contract Analyzer', 'AI Document Analyzer', 'Compliance Manager'],
    href: '/solutions/legal-professional-services',
  },
  {
    industry: 'Education & Training',
    icon: '🎓',
    headline: 'Scale personalized learning experiences',
    description:
      'Deliver adaptive coursework, automate grading workflows, and generate engagement analytics for learners at any scale.',
    apps: ['Online Learning Platform', 'AI Knowledge Base', 'AI Survey Builder', 'AI Report Generator'],
    href: '/solutions/education-training',
  },
  {
    industry: 'Manufacturing & Industrial',
    icon: '🏭',
    headline: 'Optimize production and predictive maintenance',
    description:
      'Reduce downtime with predictive maintenance, optimize supply chains, and automate quality assurance with AI-powered workflows.',
    apps: ['AI Predictive Maintenance', 'Supply Chain Optimizer', 'AI Quality Assurance', 'AI Document Processor'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Logistics & Supply Chain',
    icon: '📦',
    headline: 'Streamline fulfillment and inventory operations',
    description:
      'Improve demand forecasting, reduce bottlenecks, and automate logistics workflows across warehouses and carriers.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Workflow Automation'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Technology & SaaS',
    icon: '💻',
    headline: 'Accelerate product development and go-to-market',
    description:
      'Scale engineering velocity, automate customer onboarding, and optimize conversion with AI-powered product workflows.',
    apps: ['AI Code Assistant', 'AI Onboarding Pro', 'AI SEO Optimizer', 'AI Website Analyzer'],
    href: '/solutions/technology-and-saas',
  },
  {
    industry: 'Media & Entertainment',
    icon: '🎬',
    headline: 'Scale content creation and audience engagement',
    description:
      'Automate content workflows, personalize experiences, and analyze audience behavior with AI-driven tools.',
    apps: ['Content Studio', 'AI Video Generator', 'AI Image Generator', 'AI Marketing Automation'],
    href: '/zion-content-studio',
  },
  {
    industry: 'Energy & Utilities',
    icon: '⚡',
    headline: 'Optimize energy consumption and asset performance',
    description:
      'Deploy predictive maintenance, demand forecasting, and energy management with AI-driven insights.',
    apps: ['AI Energy Manager', 'AI Predictive Maintenance', 'AI Data Pipeline', 'Compliance Manager'],
    href: '/ai-services/energy-management',
  },
  {
    industry: 'Government & Public Sector',
    icon: '🏛️',
    headline: 'Streamline citizen services and compliance',
    description:
      'Automate document processing, citizen intake, and regulatory reporting with secure, audit-ready workflows.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager', 'Security Shield'],
    href: '/solutions/government-and-public-sector',
  },
  {
    industry: 'Insurance',
    icon: '🛡️',
    headline: 'Streamline claims processing and risk assessment',
    description:
      'Automate claims intake, fraud detection, and policy analysis with AI-powered workflows that reduce manual review and improve accuracy.',
    apps: ['AI Document Processor', 'AI Fraud Detector', 'AI Contract Analyzer', 'AI Risk Assessor'],
    href: '/solutions/insurance',
  },
  {
    industry: 'Agriculture & Agritech',
    icon: '🌾',
    headline: 'Optimize yield prediction and farm operations',
    description:
      'Deploy AI for crop monitoring, demand forecasting, supply chain optimization, and resource planning across agricultural workflows.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Data Pipeline', 'Smart Inventory Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Banking & Capital Markets',
    icon: '🏛️',
    headline: 'Automate AML, fraud detection, and regulatory reporting',
    description:
      'Deploy AI-powered fraud detection, risk scoring, and compliance workflows for KYC, AML, and regulatory reporting.',
    apps: ['AI Fraud Detector', 'AI Risk Assessor', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions',
  },
  {
    industry: 'Telecommunications',
    icon: '📡',
    headline: 'Optimize network operations and customer experience',
    description:
      'Deploy predictive maintenance for infrastructure, automate customer support, and improve demand forecasting with AI-driven analytics.',
    apps: ['AI Predictive Maintenance', 'AI Chatbot Builder', 'AI Customer Support Pro', 'AI Data Pipeline'],
    href: '/solutions',
  },
  {
    industry: 'Automotive & Mobility',
    icon: '🚗',
    headline: 'Streamline supply chain, quality, and fleet operations',
    description:
      'Optimize parts inventory, predict equipment failures, automate quality assurance, and improve logistics with AI-powered workflows.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Quality Assurance', 'Smart Inventory Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Renewable Energy & Cleantech',
    icon: '🌱',
    headline: 'Optimize grid performance and asset forecasting',
    description:
      'Improve renewable asset performance, demand forecasting, and sustainability reporting with AI-driven analytics.',
    apps: ['AI Energy Manager', 'AI Predictive Analytics', 'AI Report Generator', 'AI Data Pipeline'],
    href: '/ai-services/energy-management',
  },
  {
    industry: 'Packaging & Materials',
    icon: '📦',
    headline: 'Optimize packaging design and supply chain efficiency',
    description:
      'Deploy AI for demand forecasting, sustainable packaging optimization, and automated quality control across packaging and materials operations.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Quality Assurance', 'Smart Inventory Manager'],
    href: '/solutions/packaging-materials',
  },
  {
    industry: 'Warehousing & 3PL',
    icon: '🏭',
    headline: 'Streamline fulfillment and third-party logistics',
    description:
      'Automate warehouse operations, optimize pick-and-pack workflows, and improve carrier coordination with AI-powered logistics intelligence.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'Workflow Automation', 'AI Document Processor'],
    href: '/solutions/warehousing-3pl',
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Industry Solutions
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI workflows tailored to your industry
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every vertical has unique workflows, compliance requirements, and integration needs.
            Explore how Zion apps map to your industry.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Book a Discovery Call →
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-xl border border-slate-500/70 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/60 hover:text-white"
            >
              Browse All Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.industry}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl border border-slate-700 bg-slate-950/70 p-2.5 text-3xl">
                  {ind.icon}
                </span>
                <h2 className="text-lg font-semibold text-white">{ind.industry}</h2>
              </div>
              <p className="mt-2 text-sm font-medium text-purple-300">{ind.headline}</p>
              <p className="mt-2 text-sm text-slate-300">{ind.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ind.apps.map((app) => (
                  <span
                    key={app}
                    className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {app}
                  </span>
                ))}
              </div>
              <Link
                href={ind.href}
                className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
              >
                Explore solutions →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/35 via-fuchsia-900/25 to-pink-900/35 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Don&#39;t see your industry?</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-200">
            Our team can map your goals to the right app modules, integration architecture, and
            delivery plan — regardless of your vertical.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Talk to a Specialist
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-xl border border-slate-500/70 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/60 hover:text-white"
            >
              Browse All Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
