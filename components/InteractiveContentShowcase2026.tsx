import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase2026() {
  const [activeTab, setActiveTab] = useState('blog');

  const content = {
    blog: [
      {
        title: "AI 2026: Revolutionary Automation That Transforms Everything",
        excerpt: "Discover the revolutionary AI automation technologies reshaping industries in 2026. Learn how autonomous systems, cognitive computing, and quantum AI are driving unprecedented transformation.",
        href: "/blog/ai-2026-revolutionary-automation",
        category: "Revolutionary",
        readTime: "15 min read",
        featured: true
      },
      {
        title: "AI Enterprise Transformation 2026: Complete Implementation Guide",
        excerpt: "Master AI enterprise transformation with our comprehensive 2026 guide. Learn proven strategies, ROI frameworks, and implementation roadmaps to achieve 300% ROI.",
        href: "/blog/ai-enterprise-transformation-2026",
        category: "Implementation Guide",
        readTime: "25 min read",
        featured: true
      },
      {
        title: "AI Trends 2026: Top 10 Predictions & Industry Insights",
        excerpt: "Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies that will define the future.",
        href: "/blog/ai-trends-2026-predictions",
        category: "Trends",
        readTime: "12 min read",
        featured: false
      },
      {
        title: "Multimodal AI Integration: 250% Efficiency Gains",
        excerpt: "Learn how multimodal AI integration is revolutionizing customer service and business operations with text, voice, and video processing capabilities.",
        href: "/blog/ai-multimodal-integration-2025",
        category: "Integration",
        readTime: "18 min read",
        featured: false
      }
    ],
    caseStudies: [
      {
        title: "AI Automation Mega Success: 400% ROI in 6 Months",
        excerpt: "Discover how a Fortune 500 company achieved 400% ROI and 95% efficiency gains with our AI automation solutions. Real results, proven strategies.",
        href: "/case-studies/ai-automation-mega-success-2026",
        category: "Manufacturing",
        results: "400% ROI",
        featured: true
      },
      {
        title: "Fortune 500 AI Transformation Success",
        excerpt: "See how a global corporation transformed their entire operation with AI, achieving 300% ROI and 90% efficiency improvements across all departments.",
        href: "/case-studies/fortune-500-ai-transformation-success",
        category: "Enterprise",
        results: "300% ROI",
        featured: true
      },
      {
        title: "AI Supply Chain Optimization: 60% Cost Reduction",
        excerpt: "Learn how AI-powered supply chain optimization helped a global manufacturer reduce costs by 60% while improving delivery times by 45%.",
        href: "/case-studies/ai-supply-chain-optimization-2025",
        category: "Supply Chain",
        results: "60% Cost Reduction",
        featured: false
      },
      {
        title: "Multimodal AI Customer Service Transformation",
        excerpt: "Discover how multimodal AI transformed customer service operations, achieving 80% faster response times and 60% cost reduction.",
        href: "/case-studies/multimodal-ai-customer-service-transformation",
        category: "Customer Service",
        results: "80% Faster Response",
        featured: false
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest insights, implementation guides, and real-world 
            success stories from companies transforming with AI.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Latest Articles
            </button>
            <button
              onClick={() => setActiveTab('caseStudies')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'caseStudies'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Success Stories
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[activeTab].map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                item.featured ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50' : 'border-gray-200 hover:border-blue-300'
              }`}>
                {item.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                )}
                
                {!item.featured && (
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {activeTab === 'blog' ? item.readTime : item.results}
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    {activeTab === 'blog' ? 'Read Article →' : 'View Case Study →'}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of successful companies achieving 300% ROI with our proven AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}