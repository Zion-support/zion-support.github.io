// app/solutions-hub/page.tsx — Solutions Hub: Browse by business outcome
'use client';

import Link from 'next/link';
import { metadata } from './metadata';

export const metadata = {
  title: 'Solutions Hub | Zion Tech Group',
  description: 'Browse Zion Tech Group solutions by industry, business goal, or technology. AI services, IT solutions, cloud, security, automation, and more — organized by outcome.',
};

const INDUSTRIES = [
  { name: 'Healthcare', href: '/industries/healthcare', emoji: '🏥', desc: 'HIPAA-compliant AI, patient data workflows, clinical automation' },
  { name: 'Financial Services', href: '/industries/financial-services', emoji: '🏦', desc: 'Fraud detection, compliance AI, trading analytics, risk assessment' },
  { name: 'Retail & E-commerce', href: '/industries/retail', emoji: '🛍️', desc: 'Personalization, inventory AI, customer churn prediction, supply chain' },
  { name: 'Manufacturing', href: '/industries/manufacturing', emoji: '🏭', desc: 'Predictive maintenance, quality control AI, supply chain optimization' },
  { name: 'Education', href: '/industries/education', emoji: '📚', desc: 'Adaptive learning, automated grading, student success analytics' },
  { name: 'Real Estate', href: '/industries/real-estate', emoji: '🏠', desc: 'Property valuation AI, lead scoring, market analysis, virtual tours' },
  { name: 'Logistics & Supply Chain', href: '/industries/logistics', emoji: '🚚', desc: 'Route optimization, demand forecasting, warehouse automation' },
  { name: 'Energy & Utilities', href: '/industries/energy', emoji: '⚡', desc: 'Grid optimization, predictive maintenance, energy trading AI' },
  { name: 'Government & Public Sector', href: '/industries/government', emoji: '🏛️', desc: 'Citizen services AI, compliance automation, public data analytics' },
  { name: 'Media & Entertainment', href: '/industries/media', emoji: '🎬', desc: 'Content recommendation, audience analytics, automated editing' },
  { name: 'Telecommunications', href: '/industries/telecom', emoji: '📡', desc: 'Network optimization, churn prediction, customer service AI' },
  { name: 'Legal', href: '/industries/legal', emoji: '⚖️', desc: 'Contract analysis, legal research AI, compliance monitoring' },
  { name: 'Hospitality', href: '/industries/hospitality', emoji: '🏨', desc: 'Guest personalization, revenue management, operational automation' },
  { name: 'Transportation', href: '/industries/transportation', emoji: '🚆', desc: 'Fleet optimization, predictive maintenance, route planning AI' },
];

const GOALS = [
  { name: 'Reduce Costs', href: '/services/?category=cloud', emoji: '💰', desc: 'Cloud cost optimization, automated operations, FinOps, infrastructure efficiency', cats: ['cloud', 'automation'] },
  { name: 'Increase Revenue', href: '/services/?category=ai', emoji: '📈', desc: 'AI-driven sales, personalization, pricing intelligence, customer acquisition', cats: ['ai', 'data'] },
  { name: 'Improve Security', href: '/services/?category=security', emoji: '🔐', desc: 'Threat detection, compliance automation, identity management, zero trust', cats: ['security'] },
  { name: 'Scale Operations', href: '/services/?category=devops', emoji: '⚙️', desc: 'DevOps automation, cloud infrastructure, IT managed services, monitoring', cats: ['devops', 'cloud', 'it'] },
  { name: 'Automate Workflows', href: '/services/?category=automation', emoji: '🤖', desc: 'RPA, AI workflow automation, document processing, business process automation', cats: ['automation', 'ai'] },
  { name: 'Enhance Customer Experience', href: '/services/?category=ai', emoji: '😊', desc: 'Chatbots, voice agents, personalization, omnichannel support, customer analytics', cats: ['ai', 'data'] },
];

const TECHNOLOGIES = [
  { name: 'AI / Machine Learning', href: '/services/?category=ai', emoji: '🧠', desc: 'Custom models, LLM integration, computer vision, NLP, predictive analytics' },
  { name: 'Cloud Infrastructure', href: '/services/?category=cloud', emoji: '☁️', desc: 'Multi-cloud, migration, serverless, container orchestration, FinOps' },
  { name: 'Internet of Things', href: '/services/?category=iot', emoji: '📡', desc: 'Edge computing, sensor data analytics, device management, IoT security' },
  { name: 'Blockchain & Web3', href: '/services/?category=blockchain', emoji: '⛓️', desc: 'Smart contracts, DeFi, tokenization, supply chain traceability' },
  { name: 'Robotic Process Automation', href: '/services/?category=automation', emoji: '🤖', desc: 'Workflow automation, document processing, legacy system integration' },
  { name: 'Low-Code Platforms', href: '/services/?category=low-code', emoji: '⚡', desc: 'Rapid application development, citizen developer enablement, integration' },
];

export default function SolutionsHub() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-950 to-indigo-900/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />
        <div className="relative container-page py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
              Organized by outcome
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Solutions that fit <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">your business</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Every engagement at Zion starts with a business outcome — not a technology checkbox.
              Browse our solutions by industry, goal, or technology stack to find the right starting point.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/consultation" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/25">
                Find Your Solution
                <span className="text-sm opacity-70">→</span>
              </Link>
              <Link href="/discovery" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-purple-500/40 text-slate-300 hover:text-white font-medium transition-all">
                Start with Discovery $99
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🏭</span>
          <div>
            <h2 className="text-2xl font-bold text-white">By Industry</h2>
            <p className="text-slate-400 text-sm">AI & IT solutions tailored for your sector</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.href} href={ind.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/5">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent 60%)' }} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{ind.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{ind.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Explore {ind.name}
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* By Business Goal */}
      <section className="border-t border-slate-800/60 container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🎯</span>
          <div>
            <h2 className="text-2xl font-bold text-white">By Business Goal</h2>
            <p className="text-slate-400 text-sm">What are you trying to achieve?</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GOALS.map((goal) => (
            <Link key={goal.href} href={goal.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/5">
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{goal.emoji}</span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">{goal.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{goal.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {goal.cats.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* By Technology */}
      <section className="border-t border-slate-800/60 bg-slate-900/30 container-page py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">⚡</span>
          <div>
            <h2 className="text-2xl font-bold text-white">By Technology</h2>
            <p className="text-slate-400 text-sm">Technology stacks and platforms</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECHNOLOGIES.map((tech) => (
            <Link key={tech.href} href={tech.href} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/5">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent 60%)' }} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{tech.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{tech.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Browse {tech.name.split(' / ')[0]}
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-t border-slate-800/60 container-page py-12">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-6">Not sure where to start?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/discovery" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500/40 text-slate-300 hover:text-white text-sm transition-all">
              Discovery $99 — map 1 process
            </Link>
            <Link href="/consultation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500/40 text-slate-300 hover:text-white text-sm transition-all">
              Free consultation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500/40 text-slate-300 hover:text-white text-sm transition-all">
              Browse all services
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all shadow-lg shadow-purple-500/20">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
