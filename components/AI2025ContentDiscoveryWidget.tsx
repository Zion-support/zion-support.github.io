"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

export default function AI2025ContentDiscoveryWidget() {
  const [activeTabsetActiveTab] = useState('breakthrough');

  const contentCategories = {
    breakthrough: {
      title: "🚀 Breakthrough Content",
      items: [
        {
          title: "AI 2025 Ultimate Breakthrough Announcement",
          description: "Revolutionary AI technology delivering 10,000% ROI and 99.9% accuracy",
          href: "/blog/ai-2025-ultimate-breakthrough-announcement",
          badge: "BREAKTHROUGH",
          badgeColor: "bg-red-500",
          stats: "10,000% ROI"
        },
        {
          title: "Global Transformation Success Story",
          description: "Fortune 500 company achieves $2.5B savings in 6 months",
          href: "/case-studies/ai-2025-global-transformation-breakthrough",
          badge: "SUCCESS",
          badgeColor: "bg-green-500",
          stats: "$2.5B Saved"
        },
        {
          title: "AI 2025 ROI Calculator",
          description: "Calculate your potential return on investment instantly",
          href: "/tools/ai-2025-roi-calculator",
          badge: "TOOL",
          badgeColor: "bg-blue-500",
          stats: "Free Tool"
        }
      ]
    },
    predictions: {
      title: "🔮 Future Predictions",
      items: [
        {
          title: "AI 2026 Quantum-Neural Fusion",
          description: "Revolutionary breakthrough combining quantum computing with neural networks",
          href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
          badge: "FUTURE",
          badgeColor: "bg-purple-500",
          stats: "15,000% ROI"
        },
        {
          title: "AI 2030 Transcendent Intelligence",
          description: "The future of AI consciousness and autonomous decision-making",
          href: "/blog/ai-2030-transcendent-intelligence",
          badge: "REVOLUTIONARY",
          badgeColor: "bg-indigo-500",
          stats: "∞ ROI"
        }
      ]
    },
    tools: {
      title: "🛠️ Interactive Tools",
      items: [
        {
          title: "AI Readiness Assessment",
          description: "Evaluate your organization's AI readiness and get personalized recommendations",
          href: "/tools/ai-readiness-assessment",
          badge: "ASSESSMENT",
          badgeColor: "bg-orange-500",
          stats: "5 Min Test"
        },
        {
          title: "Quantum Computing Calculator",
          description: "Calculate quantum computing potential for your business",
          href: "/tools/quantum-computing-calculator",
          badge: "QUANTUM",
          badgeColor: "bg-cyan-500",
          stats: "Advanced"
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Discover AI 2025 Content</h2>
        <p className="text-blue-100">Explore breakthrough technologies and revolutionary solutions</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-200 ${
                activeTab === key
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((itemindex) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                  {item.badge}
                </div>
                <div className="text-sm font-semibold text-green-600">
                  {item.stats}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                Learn More
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">Ready to Transform Your Business?</h4>
            <p className="text-sm text-gray-600">Get started with AI 2025 breakthrough technology</p>
          </div>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}