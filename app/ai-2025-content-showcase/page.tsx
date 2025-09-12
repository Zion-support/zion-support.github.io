import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 2025 Content Showcase | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI 2025 content including breakthrough technologies, case studies, implementation guides, and success stories.',
  keywords: ['AI 2025', 'Content Showcase', 'AI Breakthrough', 'Technology Showcase', 'AI Resources'],
  openGraph: {
    title: 'AI 2025 Content Showcase',
    description: 'Comprehensive collection of AI 2025 breakthrough content and resources.',
    type: 'website',
  },
};

export default function AI2025ContentShowcase() {
  const contentCategories = [
    {
      title: "🚀 Breakthrough Technologies",
      description: "Revolutionary AI technologies transforming industries",
      color: "from-blue-500 to-purple-500",
      items: [
        {
          title: "Advanced Autonomous Systems",
          description: "Self-driving vehicles, autonomous manufacturing, and AI decision systems",
          link: "/blog/ai-2025-advanced-autonomous-systems",
          badge: "BREAKTHROUGH",
          metrics: "2000% ROI"
        },
        {
          title: "Quantum Machine Learning",
          description: "10,000x speed improvements with quantum AI algorithms",
          link: "/blog/ai-2025-quantum-machine-learning-breakthrough",
          badge: "REVOLUTIONARY",
          metrics: "10,000x Faster"
        },
        {
          title: "Neural Interface Technology",
          description: "Direct brain-computer interfaces for enhanced human capabilities",
          link: "/blog/ai-2025-neural-interface-revolution",
          badge: "FUTURE",
          metrics: "95% Accuracy"
        }
      ]
    },
    {
      title: "🏆 Success Stories",
      description: "Proven results from real-world AI implementations",
      color: "from-green-500 to-blue-500",
      items: [
        {
          title: "Global Enterprise Transformation",
          description: "Fortune 500 company achieves 2000% ROI through AI transformation",
          link: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
          badge: "SUCCESS STORY",
          metrics: "2000% ROI"
        },
        {
          title: "Manufacturing Revolution",
          description: "Smart factory implementation delivers 85% efficiency improvement",
          link: "/case-studies/ai-2025-manufacturing-transformation",
          badge: "CASE STUDY",
          metrics: "85% Efficiency"
        },
        {
          title: "Healthcare Breakthrough",
          description: "AI-powered diagnostics achieve 99.5% accuracy in medical imaging",
          link: "/case-studies/ai-2025-healthcare-breakthrough",
          badge: "BREAKTHROUGH",
          metrics: "99.5% Accuracy"
        }
      ]
    },
    {
      title: "📚 Implementation Guides",
      description: "Step-by-step guides for AI implementation",
      color: "from-purple-500 to-pink-500",
      items: [
        {
          title: "Ultimate Implementation Toolkit",
          description: "Comprehensive guide for AI transformation across industries",
          link: "/resources/ai-2025-ultimate-implementation-toolkit",
          badge: "ESSENTIAL",
          metrics: "Complete Guide"
        },
        {
          title: "ROI Calculator & Assessment",
          description: "Calculate your potential return on AI investment",
          link: "/tools/ai-2025-roi-calculator",
          badge: "TOOL",
          metrics: "Free Calculator"
        },
        {
          title: "Enterprise AI Strategy",
          description: "Strategic framework for enterprise AI adoption",
          link: "/resources/ai-2025-enterprise-strategy-guide",
          badge: "STRATEGY",
          metrics: "Proven Framework"
        }
      ]
    },
    {
      title: "🔮 Future Predictions",
      description: "AI trends and predictions for 2025 and beyond",
      color: "from-orange-500 to-red-500",
      items: [
        {
          title: "AI 2025 Trends Analysis",
          description: "Comprehensive analysis of AI trends shaping 2025",
          link: "/blog/ai-2025-comprehensive-trends-analysis",
          badge: "TRENDS",
          metrics: "Expert Analysis"
        },
        {
          title: "Future Technology Roadmap",
          description: "Technology roadmap for AI development through 2030",
          link: "/blog/ai-2025-future-technology-roadmap",
          badge: "ROADMAP",
          metrics: "2030 Vision"
        },
        {
          title: "Industry Impact Predictions",
          description: "How AI will transform different industries",
          link: "/blog/ai-2025-industry-impact-predictions",
          badge: "PREDICTIONS",
          metrics: "Industry Focus"
        }
      ]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough",
      description: "The most comprehensive guide to AI breakthroughs in 2025",
      link: "/ai-2025-breakthrough-revolution",
      image: "/images/ai-2025-breakthrough.jpg",
      badge: "FEATURED",
      metrics: "Most Popular"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing applications for business",
      link: "/quantum-computing-solutions",
      image: "/images/quantum-computing.jpg",
      badge: "BREAKTHROUGH",
      metrics: "10,000x Speed"
    },
    {
      title: "Enterprise Automation Mastery",
      description: "Complete guide to enterprise automation with AI",
      link: "/enterprise-automation-mastery-2026",
      image: "/images/enterprise-automation.jpg",
      badge: "MASTERY",
      metrics: "2000% ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              AI 2025 Content Showcase
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover the most comprehensive collection of AI 2025 breakthrough content, 
              case studies, implementation guides, and success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">50+ Articles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">25+ Case Studies</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">15+ Tools</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">10+ Guides</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-sm text-gray-500">{item.metrics}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">Explore Content</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Content Categories
          </h2>
          <div className="space-y-12">
            {contentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.link}
                        className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {item.badge}
                          </span>
                          <span className="text-xs text-gray-500">{item.metrics}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                          <span className="text-sm font-medium">Read More</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Content Impact Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500K+</div>
              <p className="text-blue-100">Monthly Readers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Reader Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2000%</div>
              <p className="text-blue-100">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Success Stories</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with our comprehensive AI implementation guides and tools. 
            Join thousands of companies already achieving breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Download Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}