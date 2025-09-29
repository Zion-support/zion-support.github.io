import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase() {
  const [activeTab, setActiveTab] = useState('trending');

  const contentCategories = {
    trending: {
      title: 'Trending Now',
      content: [
        {
          title: 'AI Advanced Automation 2026',
          description: 'Complete enterprise transformation guide with 95% efficiency gains',
          readTime: '25 min',
          category: 'Automation',
          href: '/blog/ai-advanced-automation-2026',
          featured: true
        },
        {
          title: 'AI Enterprise Security 2026',
          description: 'Next-generation cybersecurity with 99.9% threat detection',
          readTime: '22 min',
          category: 'Security',
          href: '/blog/ai-enterprise-security-2026',
          featured: true
        },
        {
          title: '$15M ROI Case Study',
          description: 'Fortune 500 automation success story with 98% process efficiency',
          readTime: '15 min',
          category: 'Case Study',
          href: '/case-studies/ai-advanced-automation-success-2026',
          featured: true
        }
      ]
    },
    guides: {
      title: 'Complete Guides',
      content: [
        {
          title: 'AI Agent Evals 2026',
          description: 'Practical frameworks for shipping reliable autonomous agents',
          readTime: '14 min',
          category: 'Development',
          href: '/blog/ai-agent-evals-2026'
        },
        {
          title: 'AI Ethical Framework 2026',
          description: 'Comprehensive ethics and governance framework for responsible AI',
          readTime: '18 min',
          category: 'Ethics',
          href: '/blog/ai-ethical-framework-2026'
        },
        {
          title: 'AI Quantum Computing 2026',
          description: 'Next-generation intelligence with 1000x faster processing',
          readTime: '25 min',
          category: 'Quantum',
          href: '/blog/ai-quantum-computing-2026'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      content: [
        {
          title: 'AI Autonomous Enterprise Success',
          description: '$25M ROI with 99.9% uptime and 90% cost reduction',
          readTime: '12 min',
          category: 'Enterprise',
          href: '/case-studies/ai-autonomous-enterprise-success-2026'
        },
        {
          title: 'AI Retail Automation Success',
          description: '$8M ROI with 98% automation and 300% productivity gains',
          readTime: '10 min',
          category: 'Retail',
          href: '/case-studies/ai-retail-automation-2026'
        },
        {
          title: 'AI Enterprise Transformation',
          description: '$10M ROI with 95% automation and 300% productivity gains',
          readTime: '14 min',
          category: 'Transformation',
          href: '/case-studies/ai-enterprise-transformation-success-2026'
        }
      ]
    }
  };

  const currentContent = contentCategories[activeTab as keyof typeof contentCategories];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, guides, and success stories. 
            Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentContent.content.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                item.featured ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50' : 'border-gray-200'
              } group-hover:border-blue-300`}>
                {item.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime} read</span>
                  </div>
                )}
                {!item.featured && (
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${
                  item.featured ? 'text-gray-900' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className={`flex items-center font-semibold ${
                  item.featured ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                } transition-colors`}>
                  {item.featured ? 'Read Complete Guide →' : 'Read More →'}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Interactive Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Content Impact Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Reader Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl mr-4"
          >
            Explore All Content
          </Link>
          <Link
            href="/case-studies"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}