'use client';

import React, { useState, useEffect } from 'react';
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
  // New 2026 Content - Ultimate Breakthroughs
  {
    id: 'ultimate-2026',
    title: 'AI 2026: Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI technologies delivering 1000x performance improvements, 99% automation rates, and $10B+ ROI across Fortune 500 enterprises.',
    link: '/blog/ai-2026-ultimate-breakthrough-revolution',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    icon: '🚀',
    publishedDate: 'January 15, 2026',
    readTime: '45 min read',
    category: 'AI Revolution'
  },
  {
    id: 'autonomous-2026',
    title: 'AI 2026: Autonomous Enterprise Revolution',
    description: 'Revolutionary AI automation achieving 99% enterprise autonomy with self-healing systems and autonomous decision-making.',
    link: '/blog/ai-2026-autonomous-enterprise-revolution',
    badge: 'AUTONOMOUS',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    icon: '🤖',
    publishedDate: 'January 15, 2026',
    readTime: '28 min read',
    category: 'Enterprise Automation'
  },
  {
    id: 'success-2026',
    title: '$10.2B AI Transformation Success Story',
    description: 'How a Fortune 100 company achieved $10.2B ROI with revolutionary AI technologies, 99.7% efficiency, and 1.2 month payback.',
    link: '/case-studies/ai-2026-ultimate-breakthrough-mega-success',
    badge: 'MEGA SUCCESS',
    badgeColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    icon: '💰',
    publishedDate: 'January 15, 2026',
    readTime: '35 min read',
    category: 'Case Study'
  },
  // Legacy content
  {
    id: 'n0a',
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
    id: 'n0b',
    title: 'Privacy‑Preserving Telemetry: Scoped IDs, On‑Device Redaction, DP Noise',
    description: 'Actionable analytics without PII using edge aggregation and differential privacy.',
    link: '/blog/edge-2025-sept-30-privacy-preserving-telemetry',
    badge: 'Fresh',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-sky-600',
    icon: '🔒',
    publishedDate: 'September 30, 2025',
    readTime: '12 min read',
    category: 'Edge Computing'
  },
  {
    id: 'n0c',
    title: 'Operational Trust Scorecards v3 — KPIs, Budgets, Instant Rollback',
    description: 'Wire SLIs to KPIs with budgeted actions, live canaries, and deterministic rollback that prevents regressions.',
    link: '/blog/ai-2025-sept-30-operational-trust-scorecards-v3',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    icon: '📊',
    publishedDate: 'September 30, 2025',
    readTime: '9 min read',
    category: 'AI Operations'
  }
];

export default function UnifiedContentPromotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = featuredContent[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Latest Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        {/* Featured Content Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">{currentItem.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${currentItem.badgeColor}`}>
                    {currentItem.badge}
                  </span>
                  <span className="text-sm text-gray-400">{currentItem.publishedDate}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{currentItem.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{currentItem.title}</h3>
                <p className="text-gray-300 mb-4">{currentItem.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{currentItem.category}</span>
                  <Link 
                    href={currentItem.link}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.slice(0, 6).map((item, index) => (
            <Link 
              key={item.id}
              href={item.link}
              className="group block bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{item.icon}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{item.category}</span>
                <span>{item.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Explore All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}