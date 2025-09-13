import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2025 Ultimate Content Showcase | Zion Tech Group',
  description: 'Comprehensive showcase of AI 2025 breakthrough content, case studies, and resources. Discover the latest in AI technology and implementation strategies.',
  keywords: ['AI 2025', 'Content Showcase', 'AI Breakthroughs', 'Case Studies', 'AI Resources', 'Technology Showcase'],
  openGraph: {
    title: 'AI 2025 Ultimate Content Showcase',
    description: 'Comprehensive showcase of AI 2025 breakthrough content and resources',
    type: 'website',
  },
};

export default function AI2025UltimateContentShowcase() {
  const contentCategories = [
    {
      title: "🚀 Revolutionary Breakthroughs",
      description: "Latest AI breakthroughs transforming industries",
      color: "from-red-500 to-pink-500",
      content: [
        {
          title: "AI 2025: Advanced Autonomous Systems Revolution",
          description: "Breakthrough autonomous systems achieving 99.8% autonomy across industries",
          href: "/blog/ai-2025-advanced-autonomous-systems",
          type: "Blog Post",
          badge: "BREAKTHROUGH",
          metrics: "99.8% Autonomy Rate"
        },
        {
          title: "AI 2025: Quantum Machine Learning Breakthrough",
          description: "Revolutionary quantum ML achieving 10,000x speedup in complex computations",
          href: "/blog/ai-2025-quantum-machine-learning-breakthrough",
          type: "Blog Post",
          badge: "QUANTUM BREAKTHROUGH",
          metrics: "10,000x Speedup"
        },
        {
          title: "AI 2025: Neural Interface Revolution",
          description: "Breakthrough neural interfaces achieving 95% accuracy in brain-computer communication",
          href: "/blog/ai-2025-neural-interface-revolution",
          type: "Blog Post",
          badge: "REVOLUTIONARY",
          metrics: "95% Accuracy"
        }
      ]
    },
    {
      title: "💰 Success Stories",
      description: "Real-world AI implementations delivering massive ROI",
      color: "from-green-500 to-emerald-500",
      content: [
        {
          title: "AI 2025: Global Finance Transformation Breakthrough",
          description: "Revolutionary AI transformation achieving 1500% ROI in global finance",
          href: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
          type: "Case Study",
          badge: "BREAKTHROUGH SUCCESS",
          metrics: "1,500% ROI"
        },
        {
          title: "AI 2025: Global Enterprise Transformation",
          description: "Fortune 500 enterprise achieving 2000% ROI through comprehensive AI implementation",
          href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
          type: "Case Study",
          badge: "SUCCESS STORY",
          metrics: "2,000% ROI"
        },
        {
          title: "AI 2025: Manufacturing Revolution Success",
          description: "Autonomous manufacturing achieving 8500% ROI through AI transformation",
          href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
          type: "Case Study",
          badge: "REVOLUTIONARY",
          metrics: "8,500% ROI"
        }
      ]
    },
    {
      title: "📚 Implementation Guides",
      description: "Comprehensive guides for AI implementation",
      color: "from-blue-500 to-cyan-500",
      content: [
        {
          title: "AI 2025: Ultimate Implementation Toolkit",
          description: "Complete toolkit for implementing AI solutions in your organization",
          href: "/resources/ai-2025-ultimate-implementation-toolkit",
          type: "Resource",
          badge: "ESSENTIAL",
          metrics: "100+ Tools"
        },
        {
          title: "AI 2025: Enterprise Automation Mastery",
          description: "Master guide for enterprise automation with AI technologies",
          href: "/resources/ai-2025-enterprise-automation-mastery",
          type: "Resource",
          badge: "MASTERY",
          metrics: "50+ Strategies"
        },
        {
          title: "AI 2025: Quantum Computing Implementation",
          description: "Complete guide to implementing quantum computing solutions",
          href: "/resources/ai-2025-quantum-computing-implementation",
          type: "Resource",
          badge: "ADVANCED",
          metrics: "25+ Use Cases"
        }
      ]
    },
    {
      title: "🔮 Future Predictions",
      description: "AI trends and predictions for the future",
      color: "from-purple-500 to-indigo-500",
      content: [
        {
          title: "AI 2026: Future Predictions Breakthrough",
          description: "Comprehensive predictions for AI development in 2026 and beyond",
          href: "/blog/ai-2026-future-predictions-breakthrough",
          type: "Blog Post",
          badge: "FUTURE",
          metrics: "50+ Predictions"
        },
        {
          title: "AI 2030: Vision Showcase",
          description: "Long-term vision for AI development through 2030",
          href: "/blog/ai-2030-future-predictions",
          type: "Blog Post",
          badge: "VISION",
          metrics: "10-Year Outlook"
        },
        {
          title: "AI 2029: Singularity Predictions",
          description: "Predictions about AI singularity and its implications",
          href: "/blog/ai-2029-singularity-breakthrough",
          type: "Blog Post",
          badge: "SINGULARITY",
          metrics: "Singularity Analysis"
        }
      ]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025: Revolutionary Breakthroughs",
      description: "The most comprehensive collection of AI 2025 breakthrough content",
      href: "/ai-2025-breakthrough-content-showcase",
      image: "🚀",
      stats: "25+ Articles"
    },
    {
      title: "AI 2025: Success Stories",
      description: "Real-world case studies showing massive ROI from AI implementation",
      href: "/ai-2025-success-stories-showcase",
      image: "💰",
      stats: "15+ Case Studies"
    },
    {
      title: "AI 2025: Implementation Resources",
      description: "Complete toolkit for implementing AI solutions in your organization",
      href: "/ai-2025-implementation-resources",
      image: "📚",
      stats: "100+ Resources"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI 2025 Ultimate Content Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI 2025 breakthrough content, 
            case studies, and implementation resources. Everything you need to transform 
            your organization with cutting-edge AI technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#content"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Content
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">AI Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Implementation Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10,000%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Content Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-sm font-semibold text-blue-600">{item.stats}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div id="content" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Content Categories
          </h2>
          <div className="space-y-16">
            {contentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.content.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex}
                      href={item.href}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                    >
                      <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500">{item.type}</span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            item.badge.includes('BREAKTHROUGH') ? 'bg-red-100 text-red-800' :
                            item.badge.includes('SUCCESS') ? 'bg-green-100 text-green-800' :
                            item.badge.includes('QUANTUM') ? 'bg-purple-100 text-purple-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        <div className="text-sm font-semibold text-blue-600">{item.metrics}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of organizations already leveraging AI 2025 technologies 
            to achieve breakthrough results and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/ai-services-2025"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}