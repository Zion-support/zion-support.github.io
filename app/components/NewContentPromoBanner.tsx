import React from 'react';
import Link from 'next/link';

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'minimal';
  maxItems?: number;
}

const newContentItems = [
  {
    title: "AI 2025: Breakthrough Innovations",
    description: "Discover revolutionary AI innovations transforming industries",
    url: "/blog/ai-2025-breakthrough-innovations",
    type: "Blog Post",
    category: "AI Trends",
    icon: "🚀",
    featured: true,
    new: true
  },
  {
    title: "Enterprise AI Transformation: $50M Success",
    description: "Fortune 500 company achieves unprecedented growth",
    url: "/case-studies/ai-enterprise-transformation-breakthrough-2025",
    type: "Case Study",
    category: "Success Story",
    icon: "🏆",
    featured: true,
    new: true
  },
  {
    title: "AI 2025: Complete Implementation Playbook",
    description: "250+ page guide with templates, frameworks & case studies",
    url: "/resources/ai-2025-complete-implementation-playbook",
    type: "Resource",
    category: "Guide",
    icon: "📋",
    featured: true,
    new: true
  },
  {
    title: "GenAI Security Blueprint 2025",
    description: "Enterprise-grade practices to secure GenAI systems in production",
    url: "/blog/ai-2025-genai-security-blueprint",
    type: "Blog Post",
    category: "Security",
    icon: "🛡️",
    featured: true,
    new: true
  },
  {
    title: "AI Productivity Automation 2025",
    description: "Complete guide to 300% productivity gains with AI",
    url: "/blog/ai-productivity-automation-2025",
    type: "Blog Post",
    category: "Productivity",
    icon: "⚡",
    featured: false,
    new: true
  },
  {
    title: "Manufacturing AI Success Story",
    description: "40% cost reduction and 60% faster processing",
    url: "/case-studies/ai-manufacturing-automation-success-2025",
    type: "Case Study",
    category: "Manufacturing",
    icon: "🏭",
    featured: false,
    new: true
  }
  ,
  {
    title: "Telecom Network Automation: 55% OPEX Reduction",
    description: "Global operator automates incidents and changes with AI agents",
    url: "/case-studies/ai-telecom-network-automation-success-2025",
    type: "Case Study",
    category: "Telecom",
    icon: "📶",
    featured: false,
    new: true
  }
  ,
  {
    title: "AI Governance Starter Kit 2025",
    description: "Templates and policies to operationalize responsible AI",
    url: "/resources/ai-governance-starter-kit-2025",
    type: "Resource",
    category: "Governance",
    icon: "📋",
    featured: true,
    new: true
  }
];

export default function NewContentPromoBanner({ variant = 'default', maxItems = 3 }: NewContentPromoBannerProps) {
  const featuredItems = newContentItems.filter(item => item.featured).slice(0, maxItems);
  
  if (variant === 'minimal') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl">🔥</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Fresh AI Content Just Published</h3>
              <p className="text-sm text-gray-600">Breakthrough innovations, success stories, and implementation guides</p>
            </div>
          </div>
          <Link
            href="/content-showcase"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            Explore Now
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Content & Success Stories
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover breakthrough innovations, enterprise transformation success stories, 
              and the complete AI implementation playbook. Expert insights to accelerate your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <Link key={index} href={item.url} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                        {item.new && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{item.description}</p>
                      <div className="flex items-center text-xs opacity-75">
                        <span>{item.category}</span>
                        <span className="mx-2">•</span>
                        <span>Read More →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              📚 Explore All New Content
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🔥</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Fresh AI Content Just Published</h3>
            <p className="text-gray-600">Breakthrough innovations, success stories, and implementation guides</p>
          </div>
        </div>
        <Link
          href="/content-showcase"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View All →
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {featuredItems.map((item, index) => (
          <Link key={index} href={item.url} className="group">
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    {item.new && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}