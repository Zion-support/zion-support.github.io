import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Explore real-world AI transformation success stories and enterprise implementations.'
};

const caseStudies = [
  {
    title: 'Enterprise AI Transformation Success: Fortune 500 Company Achieves 300% ROI',
    slug: 'enterprise-ai-transformation-success-2026',
    excerpt: 'How a Fortune 500 manufacturing company transformed operations with AI, achieving 300% ROI and $50M in annual savings.',
    industry: 'Manufacturing',
    publishedAt: 'January 25, 2026',
    image: '💰',
    color: 'green',
    readTime: '12 min read',
    results: ['$50M Annual Savings', '300% ROI', '75% Efficiency Gain']
  },
  {
    title: 'AI Neuromorphic Transformation: Mega Success in 2026',
    slug: 'ai-neuromorphic-transformation-mega-success-2026',
    excerpt: 'Revolutionary neuromorphic computing implementation delivering unprecedented performance gains.',
    industry: 'Technology',
    publishedAt: 'January 2026',
    image: '🧠',
    color: 'purple',
    readTime: '15 min read',
    results: ['200% Performance Boost', '90% Energy Reduction']
  },
  {
    title: 'AI Quantum Breakthrough Success: Revolutionary Implementation',
    slug: 'ai-quantum-breakthrough-success-2026',
    excerpt: 'First enterprise quantum-AI integration achieving breakthrough computational capabilities.',
    industry: 'Research & Development',
    publishedAt: 'January 2026',
    image: '⚛️',
    color: 'blue',
    readTime: '18 min read',
    results: ['1000x Speed Increase', '99.9% Accuracy']
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Real-world AI transformation success stories
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span>📊 Proven Results</span>
              <span>🏆 Industry Leaders</span>
              <span>💰 Measurable ROI</span>
              <span>🚀 Innovation Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Case Studies</span>
          </nav>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br from-${study.color}-500 to-${study.color}-600 p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{study.image}</div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-100 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-blue-100 mb-4">
                  {study.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-blue-200">
                  <span>{study.publishedAt}</span>
                  <span>{study.readTime}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                  <span className="text-sm font-medium">Read Case Study</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join industry leaders who have transformed their operations with AI. 
            Let Zion Tech Group help you achieve similar results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}