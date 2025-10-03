import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Neural Superintelligence Mega Success 2026: $500M Revenue Increase',
    slug: 'neural-superintelligence-mega-success-2026',
    excerpt: 'See how a Fortune 500 company achieved $500M additional revenue and 1000x performance gains through neural superintelligence implementation in just 6 months.',
    category: 'Success Story',
    publishedAt: 'January 20, 2026',
    image: '💰',
    color: 'green',
    metrics: {
      revenue: '$500M',
      roi: '1000x',
      efficiency: '99.9%',
      timeline: '6 months'
    }
  },
  {
    title: 'AI Manufacturing Transformation: 90% Efficiency Gain',
    slug: 'ai-manufacturing-transformation-2026',
    excerpt: 'See how a Fortune 500 manufacturer achieved 90% efficiency gains and $50M annual savings through comprehensive AI transformation.',
    category: 'Manufacturing',
    publishedAt: 'January 15, 2026',
    image: '🏭',
    color: 'blue',
    metrics: {
      savings: '$50M+',
      roi: '300%',
      efficiency: '85%',
      timeline: '12 months'
    }
  },
  {
    title: 'AI FinTech Quantum Transformation: $100M Revenue & 99.9% Security',
    slug: 'ai-fintech-quantum-transformation-2026',
    excerpt: 'Discover how a leading fintech achieved $100M additional revenue and 99.9% security compliance through quantum AI transformation.',
    category: 'FinTech',
    publishedAt: 'January 10, 2026',
    image: '🏦',
    color: 'purple',
    metrics: {
      revenue: '$100M',
      security: '99.9%',
      efficiency: '95%',
      timeline: '8 months'
    }
  },
  {
    title: 'AI Healthcare Revolution: 40% Better Outcomes',
    slug: 'ai-healthcare-revolution-2026',
    excerpt: 'See how a major healthcare system achieved 40% better patient outcomes and 60% faster diagnostics through AI transformation.',
    category: 'Healthcare',
    publishedAt: 'January 5, 2026',
    image: '🏥',
    color: 'green',
    metrics: {
      outcomes: '40%',
      speed: '60%',
      accuracy: '95%',
      timeline: '10 months'
    }
  }
];

const categories = [
  { name: 'All', count: caseStudies.length, color: 'gray' },
  { name: 'Success Story', count: caseStudies.filter(study => study.category === 'Success Story').length, color: 'green' },
  { name: 'Manufacturing', count: caseStudies.filter(study => study.category === 'Manufacturing').length, color: 'blue' },
  { name: 'FinTech', count: caseStudies.filter(study => study.category === 'FinTech').length, color: 'purple' },
  { name: 'Healthcare', count: caseStudies.filter(study => study.category === 'Healthcare').length, color: 'green' }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {' '}Stories
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI solutions have transformed businesses across industries, 
            delivering unprecedented results and competitive advantages.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                category.color === 'gray'
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : category.color === 'green'
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : category.color === 'blue'
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      study.color === 'green' ? 'bg-green-100' :
                      study.color === 'blue' ? 'bg-blue-100' :
                      'bg-purple-100'
                    }`}>
                      <span className="text-2xl">{study.image}</span>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${
                        study.color === 'green' ? 'text-green-600' :
                        study.color === 'blue' ? 'text-blue-600' :
                        'text-purple-600'
                      }`}>
                        {study.category}
                      </div>
                      <div className="text-sm text-gray-500">Case Study</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(study.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{study.publishedAt}</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Case Studies */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      study.color === 'green' ? 'bg-green-100 text-green-800' :
                      study.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">Case Study</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {study.excerpt}
                  </p>
                  
                  {/* Key Metric */}
                  <div className="text-center mb-3 p-2 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">
                      {Object.values(study.metrics)[0]}
                    </div>
                    <div className="text-xs text-gray-500">
                      {Object.keys(study.metrics)[0]}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{study.publishedAt}</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join the companies that have transformed their operations with our AI solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}