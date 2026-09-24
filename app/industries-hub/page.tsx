'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface IndustryCard {
  name: string;
  emoji: string;
  bullets: string[];
  href: string;
}

const INDUSTRIES: IndustryCard[] = [
  {
    name: 'Healthcare & Life Sciences',
    emoji: '🏥',
    bullets: [
      'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation',
      'Drug discovery acceleration and medical imaging analysis',
      'Regulatory compliance and data governance for healthcare providers',
    ],
    href: '/industries/healthcare',
  },
  {
    name: 'Financial Services',
    emoji: '💳',
    bullets: [
      'AI fraud detection, AML compliance, and real-time risk scoring',
      'Algorithmic trading, FP&A automation, and revenue forecasting',
      'KYC automation and regulatory reporting at scale',
    ],
    href: '/industries/financial-services',
  },
  {
    name: 'Retail & E-commerce',
    emoji: '🛍️',
    bullets: [
      'Personalized product recommendations and dynamic pricing AI',
      'Inventory optimization, demand forecasting, and stock-level intelligence',
      'Customer behavior analytics, churn prediction, and LTV modeling',
    ],
    href: '/industries/retail-ecommerce',
  },
  {
    name: 'Manufacturing & Industrial',
    emoji: '🏭',
    bullets: [
      'Computer vision quality inspection and defect detection',
      'Predictive maintenance and equipment failure forecasting',
      'Supply chain radar, IoT-enabled production intelligence, and digital twins',
    ],
    href: '/industries/manufacturing',
  },
  {
    name: 'Education',
    emoji: '🎓',
    bullets: [
      'AI-powered adaptive learning platforms and personalized curriculums',
      'Automated grading, plagiarism detection, and student performance analytics',
      'Virtual tutoring, content generation, and campus operations automation',
    ],
    href: '/industries/education',
  },
  {
    name: 'Real Estate & PropTech',
    emoji: '🏢',
    bullets: [
      'AI property valuation, tenant matching, and market analysis',
      'Smart building automation, energy optimization, and predictive maintenance',
      'Lead scoring for agents and automated property listing generation',
    ],
    href: '/industries/real-estate',
  },
  {
    name: 'Logistics & Supply Chain',
    emoji: '🚚',
    bullets: [
      'Route optimization, fleet tracking, and last-mile delivery AI',
      'Warehouse automation, inventory planning, and shipment visibility',
      'Supplier risk analytics, procurement automation, and demand forecasting',
    ],
    href: '/industries/logistics',
  },
  {
    name: 'Energy & Utilities',
    emoji: '⚡',
    bullets: [
      'Smart grid management, load forecasting, and renewable energy optimization',
      'Predictive asset maintenance for infrastructure and generation facilities',
      'Carbon footprint tracking, sustainability reporting, and compliance automation',
    ],
    href: '/industries/energy-utilities',
  },
  {
    name: 'Government & Public Sector',
    emoji: '🏛️',
    bullets: [
      'Citizen services automation, chatbot assistants, and case management AI',
      'Compliance automation, fraud detection, and regulatory monitoring',
      'Civic data analytics, public safety intelligence, and procurement AI',
    ],
    href: '/industries',
  },
  {
    name: 'Media & Entertainment',
    emoji: '🎬',
    bullets: [
      'Content personalization, recommendation engines, and audience analytics',
      'AI video editing, captioning, and automated content tagging',
      'Creator tools, ad optimization, and rights management automation',
    ],
    href: '/industries/media-entertainment',
  },
  {
    name: 'Telecommunications',
    emoji: '📡',
    bullets: [
      '5G network optimization, edge computing, and infrastructure automation',
      'Customer churn prediction, loyalty programs, and billing intelligence',
      'Network security AI, anomaly detection, and service quality monitoring',
    ],
    href: '/industries/telecommunications',
  },
  {
    name: 'Legal & Compliance',
    emoji: '⚖️',
    bullets: [
      'AI contract analysis, clause extraction, and legal document review',
      'Regulatory compliance monitoring, e-discovery, and case research AI',
      'Risk assessment, policy automation, and audit trail intelligence',
    ],
    href: '/industries/legal',
  },
  {
    name: 'Hospitality & Tourism',
    emoji: '🏨',
    bullets: [
      'AI-powered booking engines, dynamic pricing, and revenue management',
      'Guest personalization, chatbots, and sentiment analysis for reviews',
      'Operational automation, staff scheduling, and housekeeping optimization',
    ],
    href: '/industries/hospitality-tourism',
  },
  {
    name: 'Construction & Infrastructure',
    emoji: '🏗️',
    bullets: [
      'Project risk prediction, cost estimation, and schedule optimization AI',
      'Computer vision for site safety monitoring and progress tracking',
      'Document management, bid analysis, and subcontractor vetting automation',
    ],
    href: '/industries',
  },
  {
    name: 'Transportation & Mobility',
    emoji: '🚗',
    bullets: [
      'Fleet optimization, route planning, and predictive maintenance for vehicles',
      'Driver behavior analytics, safety scoring, and incident prediction',
      'Mobility-as-a-service platforms, demand forecasting, and dispatch AI',
    ],
    href: '/industries',
  },
];

const CROSS_INDUSTRY_CAPABILITIES = [
  {
    title: 'AI Services',
    desc: 'Custom machine learning models, NLP, computer vision, and generative AI tailored to your sector.',
    emoji: '🧠',
    href: '/services/?category=ai',
  },
  {
    title: 'IT Services',
    desc: 'Infrastructure modernization, managed IT, cloud migration, and enterprise system integration.',
    emoji: '🖥️',
    href: '/services/?category=it',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Scalable cloud architecture, CI/CD pipelines, container orchestration, and observability.',
    emoji: '☁️',
    href: '/services/?category=cloud',
  },
  {
    title: 'Cybersecurity',
    desc: 'Threat detection, compliance frameworks, incident response, and zero-trust architecture.',
    emoji: '🔐',
    href: '/services/?category=security',
  },
  {
    title: 'Data & Analytics',
    desc: 'Data pipelines, BI dashboards, predictive analytics, and real-time decision intelligence.',
    emoji: '📊',
    href: '/services/?category=data',
  },
  {
    title: 'Automation',
    desc: 'Workflow automation, RPA, intelligent process automation, and agentic AI orchestration.',
    emoji: '🤖',
    href: '/services/?category=automation',
  },
  {
    title: 'Micro-SaaS',
    desc: 'Turnkey micro-SaaS products, internal tools, and vertical SaaS built for your industry.',
    emoji: '🚀',
    href: '/services/?category=micro-saas',
  },
  {
    title: 'Blockchain & Web3',
    desc: 'Smart contracts, provenance tracking, tokenization, and decentralized infrastructure.',
    emoji: '⛓️',
    href: '/services/?category=blockchain',
  },
];

export default function IndustriesHubPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* JSON-LD Structured Data */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Industries We Serve | Zion Tech Group',
          description:
            'AI and IT solutions by sector — Healthcare, Financial Services, Retail, Manufacturing, Education, Real Estate, Logistics, Energy, Government, Media, Telecom, Legal, Hospitality, Construction, Transportation.',
          url: 'https://ziontechgroup.com/industries-hub',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://ziontechgroup.com',
            name: 'Zion Tech Group',
          },
          hasPart: INDUSTRIES.map((ind) => ({
            '@type': 'Thing',
            name: ind.name,
            url: `https://ziontechgroup.com${ind.href}`,
          })),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-950 to-pink-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(120,50,200,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_70%,rgba(200,40,140,0.25),transparent_55%)]" />
        <div className="relative container-page py-24 md:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6 tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              AI & IT Solutions by Sector
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                Industries We Serve
              </span>
              <br />
              <span className="text-white/90">AI & IT Solutions by Sector</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              From healthcare to transportation, Zion delivers purpose-built AI, IT, and automation
              solutions that solve real operational challenges — with transparent pricing and
              measurable outcomes.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {[
                { value: '15+', label: 'Industries', color: 'text-purple-400' },
                { value: '14,200+', label: 'Services', color: 'text-emerald-400' },
                { value: '8+', label: 'AI Agents', color: 'text-cyan-400' },
                { value: '24/7', label: 'Autonomous Ops', color: 'text-amber-400' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50"
                >
                  <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-900/40">
                📞 Get an Industry Proposal
              </Link>
              <Link href="/services/" className="px-8 py-3.5 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-700/70 transition-all">
                🛠️ Browse All Services
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-3.5 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-700/70 transition-all"
              >
                ✉ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Grid ── */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(120,50,200,0.12),transparent_60%)] pointer-events-none" />
        <div className="relative container-page">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  Every Sector. One Platform.
                </span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Click any industry to explore the specific challenges we solve, our solutions, and how we can help your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDUSTRIES.map((ind) => (
                <Link key={ind.name} href={ind.href} className="group block">
                  <div className="glass-card group-hover:border-purple-500/40 group-hover:shadow-xl group-hover:shadow-purple-900/20 p-6 flex flex-col h-full transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl flex-shrink-0">{ind.emoji}</span>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                          {ind.name}
                        </h3>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 flex-1">
                      {ind.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                          <span className="text-purple-400 mt-0.5 flex-shrink-0">◆</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Footer link */}
                    <div className="mt-5 pt-4 border-t border-slate-700/40 flex items-center justify-between">
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        Zion helps with
                      </span>
                      <span className="text-sm font-medium text-purple-300 group-hover:text-purple-200 group-hover:translate-x-1 transition-all">
                        Explore {ind.name.split('&')[0].trim()} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-Industry Capabilities ── */}
      <section className="relative py-20 border-t border-purple-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(200,40,140,0.10),transparent_60%)] pointer-events-none" />
        <div className="relative container-page">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cross-Industry Capabilities
                </span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                These core services apply across every sector — the foundation that makes our industry-specific solutions possible.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CROSS_INDUSTRY_CAPABILITIES.map((cap) => (
                <Link key={cap.title} href={cap.href} className="group block">
                  <div className="glass-card group-hover:border-purple-500/30 p-5 flex flex-col h-full transition-all duration-300">
                    <span className="text-2xl mb-3">{cap.emoji}</span>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{cap.desc}</p>
                    <span className="text-xs text-purple-400 mt-4 group-hover:text-purple-300 group-hover:translate-x-1 transition-all inline-block">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/25 to-pink-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(120,50,200,0.3),transparent_55%)]" />
        <div className="relative container-page py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                Find Your Industry Solution
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Not sure where to start? Tell us about your sector and challenges — we&apos;ll map the right AI, IT, and automation services to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact/"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-900/40"
              >
                📋 Request a Proposal
              </Link>
              <Link
                href="/services/"
                className="px-8 py-3.5 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-700/70 transition-all"
              >
                🔍 Browse All Services
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-3.5 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-700/70 transition-all"
              >
                ✉ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
