'use client';

import React from 'react';
import Link from 'next/link';

const AI2025AutomationRevolutionShowcase = () => {
  const featuredContent = [
    {
      id: 'ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide to 2,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025',
      description: 'Transform your enterprise with cutting-edge AI automation that delivers unprecedented results. Learn the strategies, technologies, and implementation frameworks that Fortune 500 companies are using to achieve 2,500% ROI.',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B+',
        efficiency: '1,200%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-ai-automation-transformation-2500-roi-success-story',
      title: 'Fortune 500 AI Automation Transformation: $15.8B Annual Savings - 2,500% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-transformation-2500-roi-success-story',
      description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented results with comprehensive AI automation, generating $15.8B in annual savings while improving operational efficiency by 1,200%.',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-automation-implementation-ultimate-guide-2025',
      title: 'AI Automation Implementation Ultimate Guide 2025: Complete Roadmap to 2,500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-guide-2025',
      description: 'The definitive guide to implementing AI automation that delivers extraordinary results. Complete roadmap with strategies, technologies, and implementation frameworks for achieving 2,500% ROI.',
      metrics: {
        roi: '2,500%',
        success: '1,000+',
        timeline: '18 months',
        projects: 'Fortune 500'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    }
  ];

  const successMetrics = [
    { label: 'Average ROI', value: '2,500%', color: 'text-green-600' },
    { label: 'Cost Savings', value: '$15.8B+', color: 'text-blue-600' },
    { label: 'Efficiency Gains', value: '1,200%', color: 'text-purple-600' },
    { label: 'Success Stories', value: '1,000+', color: 'text-orange-600' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI AUTOMATION REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Enterprise with AI Automation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving extraordinary results with our comprehensive AI automation solutions. 
            Average ROI of 2,500% within 18 months.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content.type.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Content Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {content.metrics.savings || content.metrics.success}
                    </div>
                    <div className="text-xs text-gray-500">
                      {content.metrics.savings ? 'Savings' : 'Success Stories'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={content.url}
                    className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    {content.type === 'case-study' ? 'Read Case Study' : 
                     content.type === 'resource' ? 'View Guide' : 'Read Article'}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                  >
                    Get Help
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-purple-100">
              Get personalized consultation and implementation roadmap for your AI automation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2,500%</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">18</div>
              <div className="text-purple-200">Months to ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1,000+</div>
              <div className="text-purple-200">Success Stories</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More AI Automation Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/blog"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold text-gray-900">AI Blog</div>
              <div className="text-sm text-gray-600">Latest insights and trends</div>
            </Link>
            <Link
              href="/case-studies"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-gray-900">Case Studies</div>
              <div className="text-sm text-gray-600">Real success stories</div>
            </Link>
            <Link
              href="/resources"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">📖</div>
              <div className="font-semibold text-gray-900">Resources</div>
              <div className="text-sm text-gray-600">Implementation guides</div>
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-semibold text-gray-900">Contact Us</div>
              <div className="text-sm text-gray-600">Get expert help</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025AutomationRevolutionShowcase;