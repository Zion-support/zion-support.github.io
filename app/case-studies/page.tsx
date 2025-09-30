import React from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    title: '$150M ROI Success Story - AI 2027 Mega Transformation',
    slug: 'ai-2027-mega-transformation-success',
    excerpt: 'Discover how a Fortune 500 company achieved $150M in ROI through our comprehensive AI 2027 transformation, revolutionizing their operations and market position.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Advanced Manufacturing',
    roi: '$150M',
    duration: '18 months',
    category: 'Mega Transformation',
    publishedAt: 'March 15, 2027',
    image: '💰',
    color: 'green',
    readTime: '18 min read',
    featured: true,
    metrics: {
      costSavings: '$65M',
      efficiencyGain: '85%',
      marketShare: '+12%'
    }
  },
  {
    title: 'AI Sustainability Transformation: $10M ROI Success',
    slug: 'ai-sustainability-transformation-2026',
    excerpt: 'How a global energy company achieved $10M ROI through AI-driven sustainability initiatives, reducing carbon footprint by 40% while increasing operational efficiency.',
    company: 'Global Energy Corp',
    industry: 'Energy & Utilities',
    roi: '$10M',
    duration: '12 months',
    category: 'Sustainability',
    publishedAt: 'January 10, 2026',
    image: '🌱',
    color: 'green',
    readTime: '15 min read',
    featured: true,
    metrics: {
      costSavings: '$8M',
      efficiencyGain: '40%',
      marketShare: '+5%'
    }
  },
  {
    title: 'AI Autonomous Business Systems: $15M ROI Success',
    slug: 'ai-autonomous-business-systems-success-2026',
    excerpt: 'Learn how a financial services company achieved $15M ROI through autonomous AI business systems, achieving 95% operational autonomy and 300% efficiency gains.',
    company: 'Financial Services Inc',
    industry: 'Financial Services',
    roi: '$15M',
    duration: '15 months',
    category: 'Autonomous Systems',
    publishedAt: 'January 5, 2026',
    image: '🏦',
    color: 'blue',
    readTime: '16 min read',
    featured: true,
    metrics: {
      costSavings: '$12M',
      efficiencyGain: '300%',
      marketShare: '+8%'
    }
  },
  {
    title: 'AI Neural Interface Success: $12M ROI Achievement',
    slug: 'ai-neural-interface-success-2026',
    excerpt: 'Revolutionary neural interface implementation delivering $12M ROI through enhanced human-AI collaboration and unprecedented decision-making capabilities.',
    company: 'Tech Innovation Ltd',
    industry: 'Technology',
    roi: '$12M',
    duration: '14 months',
    category: 'Neural Interfaces',
    publishedAt: 'December 20, 2025',
    image: '🧠',
    color: 'purple',
    readTime: '14 min read',
    featured: false,
    metrics: {
      costSavings: '$9M',
      efficiencyGain: '250%',
      marketShare: '+6%'
    }
  }
];

const categories = [
  { name: 'All', count: caseStudies.length, color: 'gray' },
  { name: 'Mega Transformation', count: caseStudies.filter(cs => cs.category === 'Mega Transformation').length, color: 'green' },
  { name: 'Autonomous Systems', count: caseStudies.filter(cs => cs.category === 'Autonomous Systems').length, color: 'blue' },
  { name: 'Sustainability', count: caseStudies.filter(cs => cs.category === 'Sustainability').length, color: 'green' },
  { name: 'Neural Interfaces', count: caseStudies.filter(cs => cs.category === 'Neural Interfaces').length, color: 'purple' }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {' '}Stories
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies achieve extraordinary results through our AI transformation programs. 
            Real ROI, real results, real success stories.
          </p>
        </div>

        {/* ROI Summary */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Total Client ROI Achieved</h2>
            <div className="text-6xl font-bold mb-2">$187M+</div>
            <p className="text-green-100 text-lg">Across all transformation projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">$150M</div>
              <div className="text-sm text-green-100">Mega Transformation</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">$15M</div>
              <div className="text-sm text-green-100">Autonomous Systems</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">$12M</div>
              <div className="text-sm text-green-100">Neural Interfaces</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">$10M</div>
              <div className="text-sm text-green-100">Sustainability</div>
            </div>
          </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      study.color === 'green' ? 'bg-green-100' :
                      study.color === 'blue' ? 'bg-blue-100' :
                      study.color === 'purple' ? 'bg-purple-100' :
                      'bg-indigo-100'
                    }`}>
                      <span className="text-3xl">{study.image}</span>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${
                        study.color === 'green' ? 'text-green-600' :
                        study.color === 'blue' ? 'text-blue-600' :
                        study.color === 'purple' ? 'text-purple-600' :
                        'text-indigo-600'
                      }`}>
                        {study.category}
                      </div>
                      <div className="text-sm text-gray-500">{study.readTime}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {study.excerpt}
                  </p>

                  {/* ROI Highlight */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">{study.roi}</div>
                      <div className="text-sm text-gray-600">Total ROI Achieved</div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{study.metrics.costSavings}</div>
                      <div className="text-xs text-gray-500">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{study.metrics.efficiencyGain}</div>
                      <div className="text-xs text-gray-500">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{study.metrics.marketShare}</div>
                      <div className="text-xs text-gray-500">Market Share</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div className="font-semibold">{study.company}</div>
                      <div>{study.industry} • {study.duration}</div>
                    </div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      study.color === 'green' ? 'bg-green-100 text-green-800' :
                      study.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      study.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      'bg-indigo-100 text-indigo-800'
                    }`}>
                      {study.category}
                    </span>
                    {study.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {study.excerpt}
                  </p>

                  {/* ROI Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                    study.color === 'green' ? 'bg-green-100 text-green-800' :
                    study.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    study.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    'bg-indigo-100 text-indigo-800'
                  }`}>
                    {study.roi} ROI
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div>{study.company}</div>
                      <div>{study.readTime}</div>
                    </div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join the companies that have achieved extraordinary ROI through our AI transformation programs. 
            Let's discuss how we can help you achieve similar success.
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
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}