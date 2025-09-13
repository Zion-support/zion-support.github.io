import React from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Announcement",
      description: "Revolutionary Quantum-Neural Fusion technology delivering 15,000% ROI",
      href: "/blog/ai-2025-ultimate-breakthrough-announcement",
      category: "Breakthrough",
      badge: "NEW",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "Global Tech Giant Transformation",
      description: "Fortune 500 company achieves 15,000% ROI with our AI system",
      href: "/case-studies/ai-2025-global-tech-giant-transformation",
      category: "Case Study",
      badge: "15,000% ROI",
      badgeColor: "bg-green-500",
      icon: "🏆"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Revolutionary breakthrough with consciousness-level AI capabilities",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      category: "Future Tech",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-500",
      icon: "⚛️"
    },
    {
      title: "AI 2035 Matter Creation",
      description: "Transcendent technology enabling reality manipulation and infinite resources",
      href: "/blog/ai-2035-matter-creation",
      category: "Transcendent",
      badge: "∞ ROI",
      badgeColor: "bg-indigo-500",
      icon: "🌌"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🚀 Ultimate Content Discovery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the most revolutionary AI breakthroughs, case studies, and future predictions. 
          Explore content that's transforming industries and delivering unprecedented results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {featuredContent.map((content, index) => (
          <Link
            key={index}
            href={content.href}
            className="group bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{content.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${content.badgeColor} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                    {content.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    {content.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {content.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/content-showcase"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        >
          <span>Explore All Content</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}