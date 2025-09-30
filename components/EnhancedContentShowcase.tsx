import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  readTime: string;
  metrics: {
    value: string;
    label: string;
    color: string;
  }[];
  href: string;
  featured?: boolean;
  new?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'breakthrough-innovations',
    title: 'AI 2026 Breakthrough Innovations',
    description: 'Revolutionary technologies reshaping enterprise operations with quantum AI, autonomous systems, and $50B+ market growth.',
    type: 'article',
    readTime: '45 min read',
    metrics: [
      { value: '95%', label: 'Automation', color: 'text-blue-600' },
      { value: '$25M+', label: 'Average ROI', color: 'text-green-600' },
      { value: '1000x', label: 'Performance', color: 'text-purple-600' }
    ],
    href: '/blog/ai-2026-breakthrough-innovations',
    featured: true,
    new: true
  },
  {
    id: 'mega-success-case-study',
    title: '$25M ROI Success Story',
    description: 'Fortune 500 manufacturing company achieved unprecedented success with 99% automation and complete business revolution.',
    type: 'case-study',
    readTime: '30 min read',
    metrics: [
      { value: '$25M', label: 'Total ROI', color: 'text-green-600' },
      { value: '99%', label: 'Automation', color: 'text-blue-600' },
      { value: '18', label: 'Months', color: 'text-purple-600' }
    ],
    href: '/case-studies/ai-transformation-mega-success-2026',
    featured: true,
    new: true
  },
  {
    id: 'quantum-computing',
    title: 'AI Quantum Computing 2026',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    type: 'article',
    readTime: '25 min read',
    metrics: [
      { value: '1000x', label: 'Faster', color: 'text-purple-600' },
      { value: '95%', label: 'Accuracy', color: 'text-blue-600' },
      { value: '$12M', label: 'Returns', color: 'text-green-600' }
    ],
    href: '/blog/ai-quantum-computing-2026',
    new: true
  },
  {
    id: 'autonomous-enterprise',
    title: 'AI Autonomous Enterprise 2026',
    description: 'Complete guide to self-managing business operations with zero-touch management and predictive analytics.',
    type: 'guide',
    readTime: '30 min read',
    metrics: [
      { value: '99.9%', label: 'Uptime', color: 'text-green-600' },
      { value: '90%', label: 'Cost Reduction', color: 'text-blue-600' },
      { value: 'Zero', label: 'Touch Ops', color: 'text-purple-600' }
    ],
    href: '/blog/ai-autonomous-enterprise-2026',
    new: true
  },
  {
    id: 'sustainability-green-tech',
    title: 'AI Sustainability & Green Tech 2026',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
    type: 'article',
    readTime: '18 min read',
    metrics: [
      { value: '80%', label: 'Energy Saved', color: 'text-green-600' },
      { value: '$2M+', label: 'Savings', color: 'text-blue-600' },
      { value: '100%', label: 'Carbon Neutral', color: 'text-purple-600' }
    ],
    href: '/blog/ai-sustainability-green-tech-2026',
    new: true
  },
  {
    id: 'retail-automation',
    title: 'AI Retail Automation 2026',
    description: 'See how a Fortune 500 retailer achieved 98% automation, 300% productivity gains, and $8M annual ROI.',
    type: 'case-study',
    readTime: '20 min read',
    metrics: [
      { value: '98%', label: 'Automation', color: 'text-blue-600' },
      { value: '300%', label: 'Productivity', color: 'text-green-600' },
      { value: '$8M', label: 'Annual ROI', color: 'text-purple-600' }
    ],
    href: '/case-studies/ai-retail-automation-2026',
    new: true
  }
];

export default function EnhancedContentShowcase() {
  const featuredItems = contentItems.filter(item => item.featured);
  const regularItems = contentItems.filter(item => !item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ LATEST 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="relative h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">
                        {item.type === 'article' ? '📝' : item.type === 'case-study' ? '📊' : '📋'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-indigo-100">{item.type === 'case-study' ? 'Success Story' : 'Innovation Guide'}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.new ? 'NEW 2026' : 'FEATURED'}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'article' ? 'bg-blue-100 text-blue-600' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {item.type === 'case-study' ? 'Case Study' : 'Article'}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    {item.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={item.href}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  {item.new && (
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                  )}
                  <span className={`text-sm font-medium ${
                    item.type === 'article' ? 'text-blue-600' :
                    item.type === 'case-study' ? 'text-green-600' :
                    'text-purple-600'
                  }`}>
                    {item.type === 'case-study' ? '📊 Case Study' : '📝 Article'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex gap-4 mb-4">
                  {item.metrics.slice(0, 2).map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-4 h-4 mr-1">⏱️</span>
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest AI Innovations</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Get weekly insights on AI trends, breakthrough technologies, and success stories 
              that are transforming businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}