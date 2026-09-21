// app/ai/page.tsx - AI Services Hub (SEO Optimized)
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Cog, Search, BarChart3 } from 'lucide-react';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI Lab | Zion Tech Group',
  description:
    'Explore Zion\'s AI Lab — interactive tools and configurators for autonomous AI solutions and architecture planning.',
  alternates: { canonical: 'https://ziontechgroup.com/ai/' },
};

const AI_SERVICE_CARDS = [
  {
    id: 'ai-machine-learning-platform',
    title: 'Enterprise AI Machine Learning Platform',
    description:
      'End-to-end machine learning platform for building, training, and deploying ML models at scale. Features automated feature engineering, model selection, and real-time inference.',
    roi: '40-60% reduction in model development time',
    stats: '10x faster deployment, 99.9% uptime',
    href: '/services/ai-machine-learning-platform/',
  },
  {
    id: 'ai-nlp-chatbot',
    title: 'AI NLP Customer Service Chatbot',
    description:
      'Natural language processing chatbot that understands customer queries and provides 24/7 support. Integrates with CRM, knowledge bases, and ticketing systems.',
    roi: '60-70% reduction in support tickets',
    stats: '95% accuracy, 24/7 availability',
    href: '/services/ai-nlp-chatbot/',
  },
  {
    id: 'ai-computer-vision-quality',
    title: 'AI Computer Vision Quality Inspection',
    description:
      'Automated visual quality inspection using computer vision. Detects defects, anomalies, and non-conformities in manufacturing processes with pixel-perfect accuracy.',
    roi: '50-80% reduction in quality costs',
    stats: '99.5% accuracy, real-time detection',
    href: '/services/ai-computer-vision-quality/',
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance System',
    description:
      'Predict equipment failures before they occur using machine learning. Reduces downtime, maintenance costs, and extends asset lifespan through intelligent forecasting.',
    roi: '30-50% reduction in maintenance costs',
    stats: '85% accuracy, 99.9% uptime',
    href: '/services/ai-predictive-maintenance/',
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection & Prevention',
    description:
      'Real-time fraud detection system that identifies suspicious transactions, patterns, and anomalies. Protects revenue and customer trust with adaptive learning.',
    roi: '70-90% reduction in fraud losses',
    stats: '99.9% detection rate, zero false positives',
    href: '/services/ai-fraud-detection/',
  },
  {
    id: 'ai-data-analytics-platform',
    title: 'AI-Powered Data Analytics Platform',
    description:
      'Transform raw data into actionable insights with our AI analytics platform. Features automated dashboards, anomaly detection, and predictive forecasting.',
    roi: '300% ROI on data initiatives',
    stats: '1000x faster insights, 95% accuracy',
    href: '/services/ai-data-analytics-platform/',
  },
];

const tools = [
  {
    name: 'Solutions Configurator',
    href: '/ai/solutions-configurator',
    description:
      'Tell us where you are, what you want to improve, and which systems you rely on. Get a deterministic, in-browser blueprint of how Zion\'s autonomous platform would be assembled for you.',
    icon: Cog,
  },
  {
    name: 'URL Audit Assistant',
    href: '/ai/url-audit-assistant',
    description:
      'Analyze URLs for SEO, content, and technical factors. Get actionable insights on how AI could optimize your web presence.',
    icon: Search,
  },
  {
    name: 'AI Readiness Assessment',
    href: '/ai/ai-readiness-assessment',
    description:
      'A free guided assessment of your automation, security, cloud, and AI maturity — with practical next steps from Zion Tech Group.',
    icon: BarChart3,
  },
];

export default function AIServicesHub() {
  return (
    <PageShell
      title="Enterprise AI Services"
      description="Deploy AI solutions that drive measurable ROI. From machine learning to computer vision, fraud detection to healthcare AI — we build custom solutions that transform your business."
      eyebrow="AI Lab"
      align="center"
      canonical="https://ziontechgroup.com/ai/"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'AI Services Hub - Zion Tech Group',
        description:
          'Explore our comprehensive catalog of AI services including machine learning, NLP, computer vision, predictive analytics, and more. Enterprise AI solutions for businesses of all sizes.',
        url: 'https://ziontechgroup.com/ai/',
      }}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Get a custom AI solution</Link>
          <Link href="/services?category=ai" className="btn-secondary">Browse AI services</Link>
        </>
      }
    >
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Tools for Autonomous AI</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Interactive tools that show how Zion's autonomous agents can configure solutions,
            audit technical assets, and plan AI implementations — all computed in your browser.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="page-card group flex flex-col transition hover:border-purple-400/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15">
                <tool.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-purple-200">
                {tool.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-300">{tool.description}</p>
              <div className="mt-4 inline-flex items-center text-xs font-medium text-purple-300">
                Try it now
                <ArrowRight className="ml-1 h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured AI Solutions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Proven AI services delivering 30-60% ROI improvements across industries.
            Each solution includes full implementation, training, and 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {AI_SERVICE_CARDS.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="page-card group block transition hover:border-purple-500/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🤖</span>
                <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">
                  {service.roi.split(' ')[0]}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-3 mb-2">{service.description}</p>
              <div className="text-xs text-purple-400 font-medium">
                {service.stats}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How Our AI Works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'AI agents analyze your business needs and identify automation opportunities' },
            { step: '02', title: 'Design', desc: 'Custom AI solution architecture built with best-in-class frameworks' },
            { step: '03', title: 'Deploy', desc: 'Production-ready AI services deployed with monitoring and support' },
            { step: '04', title: 'Optimize', desc: 'Continuous improvement with AI-driven insights and performance tuning' },
          ].map((item) => (
            <div key={item.step} className="page-card text-center">
              <div className="text-4xl font-bold text-purple-400 mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="page-card text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">40-60%</div>
            <div className="text-slate-300 mb-2">Average ROI Improvement</div>
            <div className="text-slate-500 text-sm">Across all AI implementations</div>
          </div>
          <div className="page-card text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-slate-300 mb-2">Uptime Guarantee</div>
            <div className="text-slate-500 text-sm">Enterprise-grade reliability</div>
          </div>
          <div className="page-card text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-slate-300 mb-2">AI Operations</div>
            <div className="text-slate-500 text-sm">Continuous monitoring and optimization</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
