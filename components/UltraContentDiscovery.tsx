import React, { useState } from 'react';
import Link from 'next/link';
import Card from './ui/Card';

export default function UltraContentDiscovery() {
  const [activeTab, setActiveTab] = useState('featured');

  const contentSections = {
    featured: [
      {
        title: "AI Innovation Hub",
        description: "Explore cutting-edge AI breakthroughs and revolutionary technologies",
        href: "/ai-innovation-hub",
        type: "Hub",
        icon: "🚀",
        featured: true
      },
      {
        title: "AI Tools Showcase",
        description: "Discover our comprehensive collection of professional AI tools and calculators",
        href: "/ai-tools-showcase",
        type: "Tools",
        icon: "🛠️",
        featured: true
      },
      {
        title: "AI Resources 2025",
        description: "Access our complete library of AI courses, guides, and learning materials",
        href: "/ai-resources-2025",
        type: "Resources",
        icon: "📚",
        featured: true
      }
    ],
    latest: [
      {
        title: "AI Implementation Masterclass 2025",
        description: "Comprehensive guide to implementing AI solutions in enterprise environments",
        href: "/webinars/ai-2025-implementation-masterclass",
        type: "Webinar",
        icon: "🎓",
        date: "2025-01-15"
      },
      {
        title: "AI Governance Blueprint",
        description: "Complete framework for establishing AI governance and compliance",
        href: "/blog/ai-2025-ai-governance-blueprint",
        type: "Guide",
        icon: "📋",
        date: "2025-01-14"
      },
      {
        title: "AI Cost Optimization Playbook",
        description: "Strategies for optimizing AI infrastructure costs while maintaining performance",
        href: "/blog/ai-2025-cost-guardrails",
        type: "Playbook",
        icon: "💰",
        date: "2025-01-13"
      }
    ],
    popular: [
      {
        title: "AI Readiness Assessment",
        description: "Evaluate your organization's readiness for AI implementation",
        href: "/tools/ai-readiness-assessment",
        type: "Tool",
        icon: "📊",
        views: "10K+"
      },
      {
        title: "AI ROI Calculator",
        description: "Calculate the return on investment for your AI projects",
        href: "/tools/ai-roi-calculator",
        type: "Tool",
        icon: "🧮",
        views: "8K+"
      },
      {
        title: "AI Security Assessment",
        description: "Assess and strengthen your AI systems' security posture",
        href: "/tools/ai-security-assessment",
        type: "Tool",
        icon: "🔒",
        views: "6K+"
      }
    ]
  };

  const tabs = [
    { id: 'featured', label: 'Featured', count: contentSections.featured.length },
    { id: 'latest', label: 'Latest', count: contentSections.latest.length },
    { id: 'popular', label: 'Popular', count: contentSections.popular.length }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI resources, tools, and insights 
            designed to accelerate your AI journey and maximize your success.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentSections[activeTab as keyof typeof contentSections].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                  {item.date && (
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  )}
                  {item.views && (
                    <span className="text-sm text-gray-500">
                      {item.views} views
                    </span>
                  )}
                </div>
                <Link
                  href={item.href}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Explore Now
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Browse our complete content library or get personalized recommendations from our AI experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/content-showcase"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Recommendations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}