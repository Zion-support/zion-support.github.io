import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 2025 Content Showcase: Revolutionary Breakthroughs & Insights',
  description: 'Explore our comprehensive collection of AI 2025 content including breakthrough research, case studies, implementation guides, and industry insights.',
  keywords: ['AI 2025', 'content showcase', 'artificial intelligence', 'breakthroughs', 'case studies', 'implementation guides'],
  openGraph: {
    title: 'AI 2025 Content Showcase: Revolutionary Breakthroughs & Insights',
    description: 'Explore our comprehensive collection of AI 2025 content including breakthrough research, case studies, and implementation guides.',
    type: 'website',
  },
};

export default function AI2025ContentShowcase() {
  const contentCategories = [
    {
      title: "🚀 Revolutionary Breakthroughs",
      description: "Cutting-edge AI innovations that will reshape industries",
      items: [
        {
          title: "AI 2025 Revolutionary Breakthroughs",
          description: "Discover the groundbreaking AI innovations that will reshape industries in 2025",
          href: "/blog/ai-2025-revolutionary-breakthroughs",
          type: "Blog Post",
          featured: true
        },
        {
          title: "Quantum-Enhanced Neural Networks",
          description: "10,000x performance improvements in optimization and pattern recognition",
          href: "/blog/ai-2025-quantum-neural-networks",
          type: "Research"
        },
        {
          title: "Autonomous Enterprise Systems",
          description: "Fully autonomous business operations with 99.9% uptime",
          href: "/blog/ai-2025-autonomous-enterprise",
          type: "Analysis"
        }
      ]
    },
    {
      title: "🏆 Success Stories",
      description: "Real-world case studies with measurable ROI",
      items: [
        {
          title: "Global Enterprise Transformation: 2000% ROI",
          description: "How a Fortune 500 company achieved unprecedented transformation",
          href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
          type: "Case Study",
          featured: true
        },
        {
          title: "Manufacturing Revolution: 99.9% Uptime",
          description: "Zero-defect manufacturing through AI automation",
          href: "/case-studies/ai-2025-manufacturing-revolution",
          type: "Case Study"
        },
        {
          title: "Financial Services Breakthrough",
          description: "Real-time risk assessment with 99.5% accuracy",
          href: "/case-studies/ai-2025-financial-services-breakthrough",
          type: "Case Study"
        }
      ]
    },
    {
      title: "📚 Implementation Guides",
      description: "Step-by-step guides for successful AI adoption",
      items: [
        {
          title: "AI 2025 Implementation Master Guide",
          description: "Comprehensive roadmap for enterprise AI transformation",
          href: "/resources/ai-2025-implementation-master-guide",
          type: "Guide",
          featured: true
        },
        {
          title: "ROI Calculator & Assessment Tools",
          description: "Calculate your potential AI investment returns",
          href: "/tools/ai-2025-roi-calculator",
          type: "Tool"
        },
        {
          title: "AI Readiness Assessment",
          description: "Evaluate your organization's AI readiness",
          href: "/tools/ai-2025-readiness-assessment",
          type: "Tool"
        }
      ]
    },
    {
      title: "🔮 Future Predictions",
      description: "Insights into AI trends and future developments",
      items: [
        {
          title: "AI 2026 Breakthrough Predictions",
          description: "What to expect in the next wave of AI innovation",
          href: "/blog/ai-2026-breakthrough-predictions",
          type: "Prediction"
        },
        {
          title: "AI 2028 Future Vision",
          description: "Long-term outlook on AI transformation",
          href: "/blog/ai-2028-future-predictions",
          type: "Prediction"
        },
        {
          title: "AI 2030 Singularity Predictions",
          description: "The path to artificial general intelligence",
          href: "/blog/ai-2030-singularity-predictions",
          type: "Prediction"
        }
      ]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "The most comprehensive analysis of AI innovations that will reshape industries in 2025",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      image: "/images/ai-2025-breakthroughs.jpg",
      category: "Breakthroughs",
      readTime: "15 min read"
    },
    {
      title: "Global Enterprise Transformation: 2000% ROI",
      description: "How a Fortune 500 company achieved unprecedented transformation through AI",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      image: "/images/enterprise-transformation.jpg",
      category: "Case Study",
      readTime: "12 min read"
    },
    {
      title: "AI 2025 Implementation Master Guide",
      description: "Complete roadmap for successful enterprise AI transformation",
      href: "/resources/ai-2025-implementation-master-guide",
      image: "/images/implementation-guide.jpg",
      category: "Guide",
      readTime: "25 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              🚀 AI 2025 Content Showcase
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive collection of revolutionary AI breakthroughs, 
              success stories, and implementation guides that will transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/ai-services-2025" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ⭐ Featured Content
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl text-white">🚀</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{content.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {content.description}
                  </p>
                  <Link 
                    href={content.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            📚 Content Categories
          </h2>
          <div className="space-y-12">
            {contentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                        {item.featured && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <Link 
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        Explore →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            📊 Content Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-blue-100">Research Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">25+</div>
              <div className="text-purple-100">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">15+</div>
              <div className="text-green-100">Implementation Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">100K+</div>
              <div className="text-yellow-100">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📧 Stay Updated with AI 2025
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest AI breakthroughs, case studies, and implementation insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI 2025?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't let your competitors gain the advantage. Start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-services-2025" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}