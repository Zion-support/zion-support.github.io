import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentShowcase() {
  const newContent = [
    {
      type: 'blog',
      title: 'AI 2025: The Enterprise Automation Revolution',
      description: 'Discover how AI automation is revolutionizing enterprise operations with unprecedented efficiency gains and real-world success stories.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      category: 'AI Strategy',
      readTime: '15 min read',
      featured: true,
      metrics: {
        efficiency: '300-500%',
        companies: '500+',
        roi: '400% avg'
      }
    },
    {
      type: 'case-study',
      title: 'Global Retail Transformation: 600% ROI Success',
      description: 'Learn how a global retail chain achieved 600% ROI through strategic AI implementation across 2,500+ stores worldwide.',
      url: '/case-studies/ai-2025-global-retail-transformation-success',
      category: 'Success Story',
      readTime: '12 min read',
      featured: true,
      metrics: {
        roi: '600%',
        savings: '$2.1B',
        stores: '2,500+'
      }
    },
    {
      type: 'resource',
      title: 'AI 2025 Ultimate Implementation Toolkit',
      description: 'The most comprehensive guide to AI implementation in 2025. Includes frameworks, templates, and step-by-step guides.',
      url: '/resources/ai-2025-ultimate-implementation-toolkit',
      category: 'Implementation Guide',
      readTime: '45 min read',
      featured: true,
      metrics: {
        templates: '50+',
        frameworks: '5',
        tools: '20+'
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className="text-sm font-semibold">FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, success stories, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    content.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    content.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {content.category}
                  </span>
                  {content.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <div className="flex space-x-2">
                    {Object.entries(content.metrics).map(([key, value]) => (
                      <span key={key} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={content.url}
                  className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {content.type === 'blog' ? 'Read Article' : 
                   content.type === 'case-study' ? 'View Case Study' : 
                   'Download Toolkit'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already seeing extraordinary results from AI implementation. Get started with our proven frameworks and expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/resources"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Our AI Solutions?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">500+ successful implementations with average 400% ROI</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Implementation</h4>
              <p className="text-sm text-gray-600">Get results in weeks, not months with our proven frameworks</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete Support</h4>
              <p className="text-sm text-gray-600">End-to-end support from strategy to optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h4>
              <p className="text-sm text-gray-600">Solutions that grow with your business needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}