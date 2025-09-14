import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContent2025Showcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 'advanced-automation-revolution',
      type: 'blog',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Enterprise Guide',
      description: 'Transform your business with cutting-edge AI automation solutions achieving 600% ROI and $3.2B in annual savings.',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      readingTime: '25 min read',
      tags: ['AI Automation', 'Enterprise', 'ROI', '2025'],
      metrics: {
        roi: '600%',
        savings: '$3.2B',
        efficiency: '95%',
        timeline: '12 months'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'tech-giant-transformation',
      type: 'case-study',
      title: 'Tech Giant AI Transformation 2025: $5.2B Annual Savings in 12 Months',
      description: 'How a Fortune 100 technology company achieved 800% ROI with strategic AI implementation across their entire enterprise.',
      url: '/case-studies/tech-giant-ai-transformation-2025-ultimate-success',
      readingTime: '22 min read',
      tags: ['Fortune 100', 'AI Transformation', 'ROI', 'Success Story'],
      metrics: {
        roi: '800%',
        savings: '$5.2B',
        efficiency: '95%',
        timeline: '12 months'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'ultimate-playbook-2025',
      type: 'resource',
      title: 'AI Transformation Ultimate Playbook 2025: From Strategy to 800% ROI',
      description: 'The complete guide to enterprise AI implementation and success with step-by-step methodologies and proven frameworks.',
      url: '/resources/ai-transformation-ultimate-playbook-2025',
      readingTime: '35 min read',
      tags: ['Playbook', 'Strategy', 'Implementation', 'ROI'],
      metrics: {
        roi: '800%',
        success: '94%',
        savings: '$5.2B',
        timeline: '18 months'
      },
      featured: true,
      isNew: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              800% ROI Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive AI transformation content library, featuring proven strategies, 
            real-world case studies, and step-by-step implementation guides that have delivered 
            <span className="font-semibold text-purple-600"> $5.2B in annual savings</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">800%</div>
              <div className="text-lg opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$5.2B</div>
              <div className="text-lg opacity-90">Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Efficiency Gains</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'blog' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'case-study' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {item.type === 'blog' ? '📝 Blog' : 
                       item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                    </span>
                    {item.isNew && (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold">
                        ⭐ FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-sm text-green-600 font-medium">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-sm text-blue-600 font-medium">Savings</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8">
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of enterprises that have achieved 800% ROI with our proven AI transformation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free AI Assessment
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2025Showcase;