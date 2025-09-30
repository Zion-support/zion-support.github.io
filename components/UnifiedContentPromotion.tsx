import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  badge: string;
  badgeColor: string;
  icon: string;
  publishedDate: string;
  readTime: string;
  category: string;
}

const featuredContent: ContentItem[] = [
  // May 2026 — newly added revolutionary content
  {
    id: 'may2026-1',
    title: 'Meta-Cognitive Superintelligence: The Next Evolution of AI',
    description: 'Discover the revolutionary AI breakthrough of May 2026 featuring meta-cognitive superintelligence, quantum-neural fusion, and autonomous enterprise operations.',
    link: '/blog/ai-2026-may-revolutionary-breakthrough',
    badge: 'Revolutionary',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    icon: '🧠',
    publishedDate: 'May 1, 2026',
    readTime: '15 min read',
    category: 'AI Breakthrough'
  },
  {
    id: 'may2026-2',
    title: '$5.2B Fortune 500 Transformation Success',
    description: 'See how a Fortune 500 manufacturing giant achieved unprecedented business value using our meta-cognitive superintelligence platform in just 90 days.',
    link: '/case-studies/fortune-500-ai-2026-may-mega-success',
    badge: 'Mega Success',
    badgeColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    icon: '💰',
    publishedDate: 'May 15, 2026',
    readTime: '12 min read',
    category: 'Case Study'
  },
  // Legacy content
  {
    id: 'legacy-1',
    title: 'Autonomous Runbooks Quickstart: Budgeted Actions and Instant Rollback',
    description: 'Design incident playbooks that close the loop from detection to safe action in <60s.',
    link: '/blog/ai-2025-sept-30-autonomous-runbooks-quickstart',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    icon: '✅',
    publishedDate: 'September 30, 2025',
    readTime: '7 min read',
    category: 'AI Operations'
  },
  {
    id: 'legacy-2',
    title: 'Privacy‑Preserving Telemetry: Scoped IDs, On‑Device Redaction, DP Noise',
    description: 'Actionable analytics without PII using edge aggregation and differential privacy.',
    link: '/blog/edge-2025-sept-30-privacy-preserving-telemetry',
    badge: 'Fresh',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-sky-600',
    icon: '🔒',
    publishedDate: 'September 30, 2025',
    readTime: '8 min read',
    category: 'AI Reliability'
  },
  {
    id: 'legacy-3',
    title: 'GenAI Quality Tiers Quickstart: Stable UX at 40–70% Lower Cost',
    description: 'Tiered routing and semantic caches with KPI‑linked budgets.',
    link: '/blog/genai-2025-sept-30-quality-tiers-quickstart',
    badge: 'Featured',
    badgeColor: 'bg-gradient-to-r from-indigo-600 to-blue-600',
    icon: '💸',
    publishedDate: 'September 30, 2025',
    readTime: '8 min read',
    category: 'GenAI'
  }
];

export default function UnifiedContentPromotion() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 Latest Revolutionary Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Discover the Future of AI
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our latest revolutionary AI breakthroughs, success stories, and implementation guides 
            that are transforming enterprises worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className={`${item.badgeColor} px-3 py-1 rounded-full text-white text-sm font-bold`}>
                  {item.badge}
                </span>
                <span className="text-gray-400 text-sm">{item.publishedDate}</span>
              </div>
              
              <div className="text-4xl mb-4">{item.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400 text-sm">{item.readTime}</span>
                <span className="text-purple-400 text-sm font-semibold">{item.category}</span>
              </div>
              
              <Link 
                href={item.link}
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already transforming with our revolutionary AI technologies. 
              Get started with a free consultation and discover your potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/blog" 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}