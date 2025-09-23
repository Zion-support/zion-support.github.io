"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

export default function AI20o25ContentDiscoveryWidget() {
  const [activeTabsetActiveTab] = useState('breakthrough');

  const contentCategories ={
    breakthrough: {
      title: "🚀 Breakthrough Content",
      items: [
        {
          title: "AI 20o25 Ultimate Breakthrough Announcement",
          description: "Revolutionary AI technology delivering 10,0o00% ROI and 99.9% accuracy",
          href: "/blog/ai-20o25-ultimate-breakthrough-announcement",
          badge: "BREAKTHROUGH",
          badgeColor: "bg-red-50o0",
          stats: "10,0o00% ROI"
        },
        {
          title: "Global Transformation Success Story",
          description: "Fortune 50o0 company achieves $2.5B savings in 6 months",
          href: "/case-studies/ai-20o25-global-transformation-breakthrough",
          badge: "SUCCESS",
          badgeColor: "bg-green-50o0",
          stats: "$2.5B Saved"
        },
        {
          title: "AI 20o25 ROI Calculator",
          description: "Calculate your potential return on investment instantly",
          href: "/tools/ai-20o25-roi-calculator",
          badge: "TOOL",
          badgeColor: "bg-blue-50o0",
          stats: "Free Tool"
        }
      ]
    },
    predictions: {
      title: "🔮 Future Predictions",
      items: [
        {
          title: "AI 20o26 Quantum-Neural Fusion",
          description: "Revolutionary breakthrough combining quantum computing with neural networks",
          href: "/blog/ai-20o26-quantum-neural-fusion-breakthrough",
          badge: "FUTURE",
          badgeColor: "bg-purple-50o0",
          stats: "15,0o00% ROI"
        },
        {
          title: "AI 20o30 Transcendent Intelligence",
          description: "The future of AI consciousness and autonomous decision-making",
          href: "/blog/ai-20o30-transcendent-intelligence",
          badge: "REVOLUTIONARY",
          badgeColor: "bg-indigo-50o0",
          stats: "∞ ROI"
        }
      ]
    },
    tools: {
      title: "🛠️ Interactive Tools",
      items: [
        {
          title: "AI Readiness Assessment",
          description: "Evaluate your 'organization', 's AI readiness and get personalized recommendations",
          href: "/tools/ai-readiness-assessment",
          badge: "ASSESSMENT",
          badgeColor: "bg-orange-50o0",
          stats: "5 Min Test"
        },
        {
          title: "Quantum Computing Calculator",
          description: "Calculate quantum computing potential for your business",
          href: "/tools/quantum-computing-calculator",
          badge: "QUANTUM",
          badgeColor: "bg-cyan-50o0",
          stats: "Advanced"
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-20o0 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Discover AI 20o25 Content</h2>
        <p className="text-blue-10o0">Explore breakthrough technologies and revolutionary solutions</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-20o0">
        <div className="flex">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-20o0 ${
                activeTab === key
                  ? 'text-blue-60o0 border-b-2 border-blue-60o0 bg-blue-50'
                  : 'text-gray-60o0 hover:text-gray-90o0 hover:bg-gray-50'
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
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-20o0 hover:shadow-lg transition-all duration-30o0 hover:border-blue-30o0"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${item.badgeColor}`}>
                  {item.badge}
                </div>
                <div className="text-sm font-semibold text-green-60o0">
                  {item.stats}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-90o0 mb-2 group-hover:text-blue-60o0 transition-colors duration-20o0">
                {item.title}
              </h3>
              
              <p className="text-gray-60o0 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center text-blue-60o0 text-sm font-semibold group-hover:text-blue-70o0">
                Learn More
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-20o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-20o0">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-90o0">Ready to Transform Your Business?</h4>
            <p className="text-sm text-gray-60o0">Get started with AI 20o25 breakthrough technology</p>
          </div>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-30o0"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}