'use client';

import React from 'react';
import Link from 'next/link';

const RevolutionaryAITransformationShowcase2025 = () => {
  const contentPieces = [
    {
      id: 'enterprise-transformation',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 600% ROI through comprehensive AI transformation strategies.',
      metrics: {
        roi: '600%',
        timeline: '8 months',
        savings: '$2.8B',
        success: '94%'
      },
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      type: 'Blog Post',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success: $2.8B Annual Savings',
      description: 'Complete case study of a Fortune 500 manufacturing company that achieved 600% ROI and $2.8B in annual savings.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '156%',
        uptime: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-600-roi-success',
      type: 'Case Study',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Transformation Ultimate Implementation Guide 2025',
      description: 'The complete step-by-step guide to AI transformation success. Proven framework for achieving 600% ROI within 8 months.',
      metrics: {
        roi: '600%',
        success: '94%',
        timeline: '8 months',
        projects: '500+'
      },
      url: '/resources/ai-transformation-ultimate-implementation-guide-2025',
      type: 'Implementation Guide',
      readingTime: '25 min read',
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY AI TRANSFORMATION CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achieve 600% ROI in 8 Months
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the proven frameworks, real-world case studies, and step-by-step implementation guides that Fortune 500 companies use to achieve unprecedented AI transformation success.
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">600%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Within 8 months</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Average Savings</div>
            <div className="text-sm text-gray-500 mt-1">Per enterprise</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
            <div className="text-sm text-gray-500 mt-1">Exceed targets</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Success Stories</div>
            <div className="text-sm text-gray-500 mt-1">Proven results</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentPieces.map((content, index) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{content.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{content.metrics.savings || content.metrics.success}</div>
                    <div className="text-sm text-gray-600">{content.metrics.savings ? 'Savings' : 'Success Rate'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{content.metrics.efficiency || content.metrics.timeline}</div>
                    <div className="text-sm text-gray-600">{content.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{content.metrics.uptime || content.metrics.projects}</div>
                    <div className="text-sm text-gray-600">{content.metrics.uptime ? 'Uptime' : 'Projects'}</div>
                  </div>
                </div>

                {/* Call to Action */}
                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read Full {content.type}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why This Content Will Transform Your AI Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Proven Frameworks</h4>
              <p className="text-gray-600">
                Battle-tested methodologies from 500+ successful AI transformations across Fortune 500 companies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Guides</h4>
              <p className="text-gray-600">
                Detailed implementation roadmaps with checklists, templates, and real-world examples.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Real Case Studies</h4>
              <p className="text-gray-600">
                In-depth analysis of actual Fortune 500 transformations with detailed metrics and results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">ROI Validation</h4>
              <p className="text-gray-600">
                Comprehensive ROI measurement frameworks and validation methods used by leading enterprises.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Pitfall Prevention</h4>
              <p className="text-gray-600">
                Common mistakes and how to avoid them, based on analysis of failed transformations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Future-Proofing</h4>
              <p className="text-gray-600">
                Strategies for continuous innovation and adaptation to emerging AI technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 600% ROI?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join hundreds of Fortune 500 companies that have transformed their operations with our proven AI frameworks and strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default RevolutionaryAITransformationShowcase2025;