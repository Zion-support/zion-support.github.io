'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase2026() {
  const [activeTab, setActiveTab] = useState('articles');

  const content = {
    articles: [
      {
        title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
        description: 'Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 90% efficiency gains, and $50M+ savings.',
        href: '/blog/ai-enterprise-transformation-2026',
        category: 'Featured Article',
        readTime: '20 min read',
        metrics: { roi: '300%', efficiency: '90%', savings: '$50M+' },
        color: 'blue'
      },
      {
        title: 'AI Multimodal Integration 2025: The Future of Enterprise AI',
        description: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration.',
        href: '/blog/ai-multimodal-integration-2025',
        category: 'Featured Article',
        readTime: '22 min read',
        metrics: { efficiency: '250%', accuracy: '95%', reduction: '60%' },
        color: 'purple'
      },
      {
        title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
        description: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.',
        href: '/blog/ai-trends-2025-predictions',
        category: 'Featured Article',
        readTime: '15 min read',
        metrics: { trends: '10', impact: 'High', future: '2025' },
        color: 'green'
      }
    ],
    caseStudies: [
      {
        title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
        description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
        href: '/case-studies/ai-supply-chain-optimization-2025',
        category: 'Success Story',
        industry: 'Manufacturing',
        metrics: { reduction: '60%', efficiency: '90%', savings: '$12M' },
        color: 'green'
      },
      {
        title: 'Multimodal AI Customer Service: 80% Faster Response Times',
        description: 'See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction.',
        href: '/case-studies/multimodal-ai-customer-service-transformation',
        category: 'Success Story',
        industry: 'E-commerce',
        metrics: { response: '80%', accuracy: '95%', reduction: '60%' },
        color: 'blue'
      },
      {
        title: 'AI Finance Automation: 95% Process Reduction & $3M Savings',
        description: 'See how AI automation achieved 95% process reduction and $3M annual savings for a leading financial services company.',
        href: '/case-studies/ai-finance-automation',
        category: 'Success Story',
        industry: 'Fintech',
        metrics: { reduction: '95%', savings: '$3M', roi: '340%' },
        color: 'purple'
      }
    ],
    calculators: [
      {
        title: 'AI ROI Calculator 2026',
        description: 'Calculate your potential ROI from AI implementation with our advanced calculator.',
        href: '/tools/ai-roi-calculator',
        category: 'Interactive Tool',
        features: ['ROI Projection', 'Cost Analysis', 'Efficiency Metrics'],
        color: 'blue'
      },
      {
        title: 'AI Implementation Cost Estimator',
        description: 'Get accurate cost estimates for your AI transformation project.',
        href: '/tools/ai-cost-estimator',
        category: 'Interactive Tool',
        features: ['Cost Breakdown', 'Timeline Planning', 'Resource Allocation'],
        color: 'green'
      },
      {
        title: 'AI Efficiency Assessment',
        description: 'Assess your current AI readiness and identify optimization opportunities.',
        href: '/tools/ai-efficiency-assessment',
        category: 'Interactive Tool',
        features: ['Readiness Score', 'Gap Analysis', 'Recommendations'],
        color: 'purple'
      }
    ]
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500 bg-blue-50 text-blue-800 border-blue-200',
      purple: 'from-purple-500 to-indigo-500 bg-purple-50 text-purple-800 border-purple-200',
      green: 'from-green-500 to-teal-500 bg-green-50 text-green-800 border-green-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Hub 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of AI insights, case studies, and interactive tools designed to transform your business
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'articles'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Articles & Guides
            </button>
            <button
              onClick={() => setActiveTab('caseStudies')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'caseStudies'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab('calculators')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'calculators'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Interactive Tools
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content[activeTab as keyof typeof content].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(item.color).split(' ')[2]} ${getColorClasses(item.color).split(' ')[3]} ${getColorClasses(item.color).split(' ')[4]}`}>
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  )}
                  {item.industry && (
                    <span className="text-sm text-gray-500">{item.industry}</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Metrics */}
                {item.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold ${getColorClasses(item.color).split(' ')[3]}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features for calculators */}
                {item.features && (
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Features:</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href={item.href}
                  className={`inline-block bg-gradient-to-r ${getColorClasses(item.color).split(' ')[0]} ${getColorClasses(item.color).split(' ')[1]} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                >
                  {activeTab === 'calculators' ? 'Try Tool →' : 'Read More →'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get personalized AI insights and implementation guidance from our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}