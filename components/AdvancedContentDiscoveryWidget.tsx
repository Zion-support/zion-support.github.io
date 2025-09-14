"use client";
import React{ useState } from 'react';
import Link from 'next/link';

export default function AdvancedContentDiscoveryWidget() {
  const [activeTabsetActiveTab] = useState('trending');

  const contentCategories = {
    trending: [
      {
        title: 'AI 2025 Ultimate Breakthrough Revolution',
        description: 'Discover the revolutionary AI breakthrough delivering 10,000% ROI',
        category: 'Breakthrough',
        readTime: '8 min read',
        href: '/ai-2025-ultimate-breakthrough-revolution',
        featured: true
      },
      {
        title: 'Global Transformation Success Story',
        description: 'How a Fortune 500 company achieved 10,000% ROI in 6 months',
        category: 'Case Study',
        readTime: '6 min read',
        href: '/case-studies/ai-2025-global-transformation-breakthrough',
        featured: true
      },
      {
        title: 'AI 2025 Revolutionary Trends & Predictions',
        description: 'Expert insights on the AI trends that will define 2025',
        category: 'Analysis',
        readTime: '15 min read',
        href: '/blog/ai-2025-revolutionary-trends-predictions',
        featured: false
      }
    ],
    breakthrough: [
      {
        title: 'Quantum-AI Fusion Revolution',
        description: 'The convergence of quantum computing and AI creating unprecedented opportunities',
        category: 'Technology',
        readTime: '12 min read',
        href: '/blog/quantum-ai-fusion-2025',
        featured: true
      },
      {
        title: 'Neural Interface Breakthroughs',
        description: 'Direct brain-computer communication revolutionizing human-AI interaction',
        category: 'Innovation',
        readTime: '10 min read',
        href: '/blog/neural-interface-breakthroughs-2025',
        featured: false
      },
      {
        title: 'Autonomous Operations Mastery',
        description: 'Fully autonomous business operations with 99.9% efficiency',
        category: 'Automation',
        readTime: '9 min read',
        href: '/blog/autonomous-operations-mastery-2025',
        featured: false
      }
    ],
    caseStudies: [
      {
        title: 'Manufacturing Giant: 15,000% ROI Success',
        description: 'How AI transformed production lines achieving unprecedented efficiency',
        category: 'Manufacturing',
        readTime: '7 min read',
        href: '/case-studies/manufacturing-ai-transformation-2025',
        featured: true
      },
      {
        title: 'Financial Services: 8,500% ROI Breakthrough',
        description: 'Revolutionary AI implementation in financial risk management',
        category: 'Finance',
        readTime: '6 min read',
        href: '/case-studies/financial-services-ai-breakthrough-2025',
        featured: false
      },
      {
        title: 'Healthcare Revolution: 95% Patient Recovery',
        description: 'AI-powered healthcare achieving breakthrough patient outcomes',
        category: 'Healthcare',
        readTime: '8 min read',
        href: '/case-studies/healthcare-ai-revolution-2025',
        featured: false
      }
    ],
    resources: [
      {
        title: 'Ultimate AI Implementation Toolkit',
        description: 'Complete guide to implementing AI solutions in your organization',
        category: 'Guide',
        readTime: '20 min read',
        href: '/resources/ai-2025-ultimate-implementation-toolkit',
        featured: true
      },
      {
        title: 'AI ROI Calculator 2025',
        description: 'Calculate your potential ROI with our advanced AI solutions',
        category: 'Tool',
        readTime: '5 min read',
        href: '/tools/ai-2025-roi-calculator',
        featured: false
      },
      {
        title: 'AI Readiness Assessment',
        description: 'Evaluate your organization\'s readiness for AI transformation',
        category: 'Assessment',
        readTime: '10 min read',
        href: '/tools/ai-readiness-assessment-2025',
        featured: false
      }
    ]
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Breakthrough': 'from-red-500 to-pink-500',
      'Case Study': 'from-green-500 to-emerald-500',
      'Analysis': 'from-blue-500 to-cyan-500',
      'Technology': 'from-purple-500 to-indigo-500',
      'Innovation': 'from-yellow-500 to-orange-500',
      'Automation': 'from-teal-500 to-green-500',
      'Manufacturing': 'from-gray-500 to-slate-500',
      'Finance': 'from-green-600 to-emerald-600',
      'Healthcare': 'from-blue-600 to-cyan-600',
      'Guide': 'from-purple-600 to-indigo-600',
      'Tool': 'from-orange-500 to-red-500',
      'Assessment': 'from-indigo-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Discover Revolutionary Content</h2>
            <p className="text-blue-100">Explore the latest AI breakthroughsuccess storiesand insights</p>
          </div>
          <div className="text-4xl">🔍</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {Object.entries({
            trending: '🔥 Trending',
            breakthrough: '🚀 Breakthroughs',
            caseStudies: '📊 Case Studies',
            resources: '📚 Resources'
          }).map(([keylabel]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === key
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentCategories[activeTab as keyof typeof contentCategories]?.map((itemindex) => (
            <Link
              key={index}
              href={item.href}
              className={`group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  FEATURED
                </div>
              )}
              
              <div className="mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(item.category)} mb-3`}>
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.readTime}</span>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="mr-1">Read More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>View All Content</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated with AI Breakthroughs</h3>
          <p className="text-gray-600 text-sm mb-4">Get the latest insights delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}