// app/blog-hub/page.tsx — Blog Hub: Comprehensive blog discovery
'use client';

import Link from 'next/link';

const METADATA = {
  title: 'Zion Tech Blog - AI, IT & Technology Insights | Zion Tech Group',
  description: 'Latest insights on AI, IT services, cloud, cybersecurity, automation, and technology trends from Zion Tech Group.',
};

const CATEGORIES = [
  { name: 'AI & Machine Learning', href: '/blog/ai', emoji: '🧠', desc: 'Deep dives into AI models, LLM applications, ML ops, and agent architectures' },
  { name: 'Cloud & DevOps', href: '/blog/cloud', emoji: '☁️', desc: 'Cloud migration, Kubernetes, CI/CD, serverless, and platform engineering' },
  { name: 'Cybersecurity', href: '/blog/security', emoji: '🔐', desc: 'Threat detection, zero trust, compliance, penetration testing, and security ops' },
  { name: 'Data & Analytics', href: '/blog/data', emoji: '📊', desc: 'Data warehouses, BI, real-time analytics, data lakes, and decision intelligence' },
  { name: 'Automation', href: '/blog/automation', emoji: '🤖', desc: 'RPA, workflow automation, AI agents, and business process automation' },
  { name: 'Microservices & API', href: '/blog/api', emoji: '🔌', desc: 'API design, microservice patterns, service mesh, and distributed systems' },
  { name: 'Blockchain & Web3', href: '/blog/blockchain', emoji: '⛓️', desc: 'Smart contracts, DeFi, tokenization, and decentralized infrastructure' },
  { name: 'IoT & Edge Computing', href: '/blog/iot', emoji: '📡', desc: 'Edge AI, sensor networks, device management, and IoT security' },
  { name: 'IT Operations', href: '/blog/it-ops', emoji: '🖥️', desc: 'ITSM, managed services, FinOps, monitoring, and incident management' },
  { name: 'Industry Trends', href: '/blog/trends', emoji: '📈', desc: 'Technology trends, market analysis, and future of IT — from an operator\'s view' },
];

const FEATURED_ARTICLES = [
  { title: 'AI-Powered Analytics Platform for Telecommunications', href: '/blog/ai/ai-powered-analytics-platform-telecommunications-ai-powered-analytics-platform-for-telecommunications', category: 'AI & Machine Learning', excerpt: 'Advanced telecommunications analytics platform leveraging machine learning for network optimization, customer churn prediction, and 5G analytics.', readTime: '8 min' },
  { title: 'AI Customer Support Agent — 64% Faster Resolution', href: '/blog/ai/ai-customer-support-agent-cut-ticket-resolution-time-by-64', category: 'AI & Machine Learning', excerpt: 'How an AI customer support agent cut ticket resolution time by 64% in the first month for a mid-market SaaS company.', readTime: '6 min' },
  { title: 'Automated Reporting Engine — From 2 Weeks to Overnight', href: '/blog/ai/automated-reporting-engine-force-multiplier', category: 'Automation', excerpt: 'What used to take a data team 2 weeks every month now happens overnight. ROI was visible in the first billing cycle.', readTime: '5 min' },
  { title: 'Autonomous Code Deployment — 3× More Features Per Quarter', href: '/blog/ai/autonomous-code-deployment-agent-ci-to-prod', category: 'DevOps', excerpt: 'Their Autonomous Code Deployment Agent now handles the entire CI-to-prod pipeline. They ship 3× more features per quarter without hiring additional DevOps engineers.', readTime: '7 min' },
  { title: 'AI Omnichannel Chatbot — 28% Patient Satisfaction Jump', href: '/blog/ai/ai-omnichannel-chatbot-ehr-integration', category: 'Healthcare AI', excerpt: 'AI Omnichannel Chatbot integration with EHR system was seamless. Patient satisfaction scores jumped 28%.', readTime: '6 min' },
  { title: 'SIEM Security Platform — Correlation Rules Across 3 DCs', href: '/blog/security/siem-security-platform-3-data-centers', category: 'Cybersecurity', excerpt: 'Deployed the SIEM Security Platform across 3 data centers. The correlation rules and MITRE ATT&CK mapping alone saved months of internal tooling work.', readTime: '8 min' },
  { title: 'Supply Chain Visibility — End-to-End Across 14 Carriers', href: '/blog/data/supply-chain-visibility-14-carriers', category: 'Data & Analytics', excerpt: 'Supply Chain Visibility gave real end-to-end tracking across 14 carriers. Disruption alerts let them reroute shipments before customers noticed a delay.', readTime: '5 min' },
  { title: 'Cloud Cost Optimization — FinOps at Mid-Market Scale', href: '/blog/cloud/cloud-cost-optimization-finops-mid-market', category: 'Cloud & DevOps', excerpt: 'How a mid-market e-commerce company reduced cloud spend by 34% while improving performance through systematic FinOps practices.', readTime: '7 min' },
];

const TRENDING_TOPICS = [
  { name: 'Generative AI in Enterprise', href: '/blog/ai/generative-ai-enterprise-2026', tag: 'AI' },
  { name: 'FinOps — Cloud Cost Intelligence', href: '/blog/cloud/finops-cloud-cost-intelligence', tag: 'Cloud' },
  { name: 'Zero Trust Architecture', href: '/blog/security/zero-trust-architecture-2026', tag: 'Security' },
  { name: 'AI Agents vs Chatbots', href: '/blog/ai/ai-agents-vs-chatbots-difference', tag: 'AI' },
  { name: 'Edge AI — Intelligence at the Edge', href: '/blog/iot/edge-ai-intelligence-at-the-edge', tag: 'IoT' },
  { name: 'MLOps — Production ML Pipelines', href: '/blog/data/mlops-production-ml-pipelines', tag: 'Data' },
];

const BLOG_BY_INDUSTRY = [
  { industry: 'Healthcare', href: '/blog/healthcare', emoji: '🏥', topics: 'HIPAA-compliant AI, clinical workflows, patient data analytics' },
  { industry: 'Financial Services', href: '/blog/financial-services', emoji: '🏦', topics: 'Fraud detection, compliance AI, algorithmic trading, risk management' },
  { industry: 'Retail & E-commerce', href: '/blog/retail', emoji: '🛍️', topics: 'Personalization, inventory optimization, customer churn, omnichannel' },
  { industry: 'Manufacturing', href: '/blog/manufacturing', emoji: '🏭', topics: 'Predictive maintenance, quality control, digital twins, supply chain' },
  { industry: 'Education', href: '/blog/education', emoji: '📚', topics: 'Adaptive learning, automated assessment, student analytics, EdTech' },
  { industry: 'Real Estate', href: '/blog/real-estate', emoji: '🏠', topics: 'Property valuation, market analysis, tenant experience, proptech' },
  { industry: 'Energy & Utilities', href: '/blog/energy', emoji: '⚡', topics: 'Grid optimization, energy trading, predictive maintenance, sustainability' },
  { industry: 'Government', href: '/blog/government', emoji: '🏛️', topics: 'Citizen services, digital transformation, cybersecurity, data transparency' },
];

export default function BlogHub() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-slate-950 to-indigo-900/10" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="relative container-page py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-4">
              Insights from the front line
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Zion Tech <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Real insights from real engagements. AI, IT services, cloud, cybersecurity, automation —
              written by engineers who ship, not by marketing departments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-sky-500/25">
                Browse all posts
                <span className="text-sm opacity-70">→</span>
              </Link>
              <Link href="/newsletter" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-sky-500/40 text-slate-300 hover:text-white font-medium transition-all">
                Subscribe to newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📂</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Blog Categories</h2>
            <p className="text-slate-400 text-sm">{CATEGORIES.length} topics — pick your area</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.08), transparent 60%)' }} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">{cat.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sky-400 text-sm font-medium group-hover:gap-2 transition-all">
                  View category →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="border-t border-slate-800/60 bg-slate-900/30 container-page py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">⭐</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
            <p className="text-slate-400 text-sm">Most-read and most-impactful posts</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURED_ARTICLES.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.05), transparent 60%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-medium">{article.category}</span>
                  <span className="text-xs text-slate-500">{article.readTime} read</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                <div className="mt-3 flex items-center gap-1 text-sky-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Read article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Topics */}
      <section className="border-t border-slate-800/60 container-page py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🔥</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Trending Topics</h2>
            <p className="text-slate-400 text-sm">What the industry is talking about</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRENDING_TOPICS.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all hover:scale-[1.01]"
            >
              <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-medium shrink-0">{topic.tag}</span>
              <span className="text-sm font-medium group-hover:text-sky-300 transition-colors">{topic.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog by Industry */}
      <section className="border-t border-slate-800/60 bg-slate-900/30 container-page py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🏭</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Blog by Industry</h2>
            <p className="text-slate-400 text-sm">Technology insights tailored to your sector</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOG_BY_INDUSTRY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.08), transparent 60%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">{item.industry}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.topics}</p>
                <div className="mt-4 flex items-center gap-1 text-sky-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-slate-800/60 container-page py-16">
        <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8 lg:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-slate-400 mb-6">
            Get the latest AI & IT insights delivered to your inbox every week. No spam, no fluff — just useful content from the front line.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/newsletter" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-all shadow-lg shadow-sky-500/25">
              Subscribe to newsletter
              <span className="text-sm opacity-70">→</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-sky-500/40 text-slate-300 hover:text-white font-medium transition-all">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
