import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover real-world AI success stories and case studies from Fortune 500 companies. Learn how our AI solutions delivered measurable results and transformed business operations.',
  keywords: 'AI case studies, success stories, enterprise AI, AI ROI, digital transformation, AI implementation, Fortune 500 AI',
};

const caseStudies = [
  {
    title: 'Fortune 500 AI Transformation: $2.3B Value Created',
    slug: 'fortune-500-ai-transformation-2027',
    excerpt: 'See how a Fortune 500 company achieved unprecedented success through comprehensive AI transformation. Discover the strategies, results, and lessons learned from this $2.3B value creation story.',
    category: 'Success Story',
    readTime: '20 min read',
    publishedAt: 'January 20, 2025',
    image: '🏆',
    color: 'green',
    metrics: {
      value: '$2.3B',
      roi: '340%',
      automation: '95%',
      savings: '$50M'
    }
  },
  {
    title: 'Manufacturing AI Revolution: 60% Cost Reduction & 90% Efficiency Gain',
    slug: 'manufacturing-ai-revolution-2026',
    excerpt: 'Learn how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement through AI-powered automation and predictive analytics.',
    category: 'Success Story',
    readTime: '15 min read',
    publishedAt: 'January 20, 2025',
    image: '🏭',
    color: 'blue',
    metrics: {
      value: '$12M',
      roi: '280%',
      automation: '85%',
      savings: '$8M'
    }
  },
  {
    title: 'Financial Services AI Implementation: 99.9% Fraud Detection Accuracy',
    slug: 'financial-services-ai-implementation-2026',
    excerpt: 'Discover how a leading financial services company achieved 99.9% fraud detection accuracy and 50% faster processing with AI-powered security systems.',
    category: 'Success Story',
    readTime: '12 min read',
    publishedAt: 'January 20, 2025',
    image: '💳',
    color: 'purple',
    metrics: {
      value: '$5M',
      roi: '220%',
      automation: '90%',
      savings: '$3M'
    }
  },
  {
    title: 'Healthcare AI Transformation: 95% Diagnostic Accuracy & 70% Faster Treatment',
    slug: 'healthcare-ai-transformation-2026',
    excerpt: 'See how a major healthcare provider achieved 95% diagnostic accuracy and 70% faster treatment delivery through AI-powered medical imaging and predictive analytics.',
    category: 'Success Story',
    readTime: '18 min read',
    publishedAt: 'January 20, 2025',
    image: '🏥',
    color: 'red',
    metrics: {
      value: '$8M',
      roi: '190%',
      automation: '80%',
      savings: '$4M'
    }
  },
  {
    title: 'Retail AI Optimization: 200% Sales Increase & 85% Customer Satisfaction',
    slug: 'retail-ai-optimization-2026',
    excerpt: 'Learn how a retail chain achieved 200% sales increase and 85% customer satisfaction through AI-powered personalization and inventory optimization.',
    category: 'Success Story',
    readTime: '14 min read',
    publishedAt: 'January 20, 2025',
    image: '🛍️',
    color: 'orange',
    metrics: {
      value: '$15M',
      roi: '350%',
      automation: '75%',
      savings: '$6M'
    }
  },
  {
    title: 'Supply Chain AI Revolution: 50% Cost Reduction & 70% Faster Delivery',
    slug: 'supply-chain-ai-revolution-2026',
    excerpt: 'Discover how a logistics company achieved 50% cost reduction and 70% faster delivery through AI-powered supply chain optimization and predictive analytics.',
    category: 'Success Story',
    readTime: '16 min read',
    publishedAt: 'January 20, 2025',
    image: '📦',
    color: 'teal',
    metrics: {
      value: '$10M',
      roi: '250%',
      automation: '88%',
      savings: '$5M'
    }
  }
];

const categories = [
  { name: 'All Case Studies', count: caseStudies.length, active: true },
  { name: 'Fortune 500', count: caseStudies.filter(study => study.title.includes('Fortune 500')).length },
  { name: 'Manufacturing', count: caseStudies.filter(study => study.category === 'Success Story' && (study.title.includes('Manufacturing') || study.title.includes('Supply Chain'))).length },
  { name: 'Financial Services', count: caseStudies.filter(study => study.title.includes('Financial')).length },
  { name: 'Healthcare', count: caseStudies.filter(study => study.title.includes('Healthcare')).length }
];

export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Success Stories & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover real-world AI success stories and case studies from Fortune 500 companies. 
          Learn how our AI solutions delivered measurable results and transformed business operations.
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              category.active
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Featured Case Studies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`bg-${study.color}-100 text-${study.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">{study.readTime}</span>
                  </div>
                  <div className="text-4xl mb-4">{study.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-gray-900">{study.metrics.value}</div>
                      <div className="text-xs text-gray-600">Value Created</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-gray-900">{study.metrics.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{study.publishedAt}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`bg-${study.color}-100 text-${study.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                    {study.category}
                  </span>
                  <span className="text-sm text-gray-500">{study.readTime}</span>
                </div>
                <div className="text-2xl mb-3">{study.image}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {study.excerpt}
                </p>
                
                {/* Compact Metrics */}
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>Value: {study.metrics.value}</span>
                  <span>ROI: {study.metrics.roi}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{study.publishedAt}</span>
                  <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Success Metrics Summary */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Proven Results Across Industries</h2>
          <p className="text-xl opacity-90">
            Our AI solutions have delivered measurable results for companies across all sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Successful Implementations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">$2.3B</div>
            <div className="text-sm opacity-90">Total Value Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">340%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-sm opacity-90">Process Automation</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI solutions to achieve 
            unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}