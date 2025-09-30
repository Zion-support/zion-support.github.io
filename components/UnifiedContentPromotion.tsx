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
  // January 2026 — Revolutionary AI Breakthroughs
  {
    id: 'jan2026-1',
    title: 'AI 2026: Autonomous Cognitive Enterprise Breakthrough',
    description: 'Revolutionary autonomous cognitive enterprise systems achieving 99.8% business automation with self-managing AI.',
    link: '/blog/ai-2026-autonomous-cognitive-enterprise-breakthrough',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    icon: '🧠',
    publishedDate: 'January 20, 2026',
    readTime: '25 min read',
    category: 'Autonomous Enterprise'
  },
  {
    id: 'jan2026-2',
    title: 'AI 2026: Quantum Neural Superintelligence Breakthrough',
    description: 'Revolutionary quantum neural superintelligence achieving 10,000x performance improvements with consciousness-level AI.',
    link: '/blog/ai-2026-quantum-neural-superintelligence-breakthrough',
    badge: 'SUPERINTELLIGENCE',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    icon: '⚛️',
    publishedDate: 'January 22, 2026',
    readTime: '30 min read',
    category: 'Quantum AI'
  },
  {
    id: 'jan2026-3',
    title: 'Autonomous Cognitive Enterprise Success: $5.2B ROI',
    description: 'How a Fortune 100 technology conglomerate achieved $5.2B ROI through autonomous cognitive enterprise implementation.',
    link: '/case-studies/ai-2026-autonomous-cognitive-enterprise-5-billion-success',
    badge: 'MEGA ROI',
    badgeColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    icon: '💰',
    publishedDate: 'January 21, 2026',
    readTime: '20 min read',
    category: 'Success Stories'
  },
  {
    id: 'jan2026-4',
    title: 'Quantum Neural Superintelligence Success: $15.8B ROI',
    description: 'How a global pharmaceutical giant achieved $15.8B ROI through quantum neural superintelligence implementation.',
    link: '/case-studies/ai-2026-quantum-neural-superintelligence-15-billion-success',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-gradient-to-r from-orange-600 to-red-600',
    icon: '🏆',
    publishedDate: 'January 23, 2026',
    readTime: '22 min read',
    category: 'Success Stories'
  },
  // Legacy content
  {
    id: 'legacy1',
    title: 'Operational Trust Scorecards v3 — KPIs, Budgets, Instant Rollback',
    description: 'Wire SLIs to KPIs with budgeted actions, live canaries, and deterministic rollback that prevents regressions.',
    link: '/blog/ai-2025-sept-30-operational-trust-scorecards-v3',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    icon: '🧭',
    publishedDate: 'September 30, 2025',
    readTime: '9 min read',
    category: 'AI Operations'
  },
  {
    id: 'legacy2',
    title: 'Autonomic Runbooks — Contain Incidents in Under 60 Seconds',
    description: 'Policy‑tested actions, guardrails, and live traces that auto‑contain incidents without sacrificing velocity.',
    link: '/blog/ai-2025-sept-30-autonomic-runbooks',
    badge: 'Fresh',
    badgeColor: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    icon: '⚙️',
    publishedDate: 'September 30, 2025',
    readTime: '8 min read',
    category: 'AI Reliability'
  },
  {
    id: 'legacy3',
    title: 'Consentless Telemetry v2 — Useful Insights, Zero‑PII, <100ms',
    description: 'Scoped IDs, on‑device redaction, and DP noise to keep analytics rich and privacy‑first worldwide.',
    link: '/blog/edge-2025-sept-30-consentless-telemetry-v2',
    badge: 'New',
    badgeColor: 'bg-gradient-to-r from-cyan-600 to-sky-600',
    icon: '📈',
    publishedDate: 'September 30, 2025',
    readTime: '6 min read',
    category: 'Observability'
  }
];

export default function UnifiedContentPromotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = featuredContent[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 border-t border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">
              🌟 FEATURED CONTENT
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold animate-pulse">
              BREAKTHROUGH
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Breakthroughs
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Transforming the Future
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most advanced AI technologies reshaping business operations, 
            from autonomous cognitive enterprises to quantum neural superintelligence.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl">
                {currentContent.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${currentContent.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-gray-400 text-sm">{currentContent.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{currentContent.title}</h3>
                <p className="text-gray-400 text-sm">{currentContent.publishedDate} • {currentContent.readTime}</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {currentContent.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}