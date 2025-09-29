import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Star, Zap, Brain, Shield } from 'lucide-react';

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '🚀' },
    { id: 'breakthrough', label: 'Breakthroughs', icon: '🔮' },
    { id: 'case-studies', label: 'Case Studies', icon: '🏆' },
    { id: 'autonomous', label: 'Autonomous', icon: '🤖' },
    { id: 'innovation', label: 'Innovation', icon: '⚡' },
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI Breakthrough Innovations 2026',
      description: 'Discover the 15 most revolutionary AI breakthrough innovations transforming enterprise operations with 300% ROI.',
      category: 'breakthrough',
      type: 'Article',
      readTime: '45 min',
      views: '25,000+',
      rating: 4.9,
      href: '/blog/ai-2026-breakthrough-innovations',
      featured: true,
      metrics: { roi: '300%', automation: '95%', savings: '$50M+' }
    },
    {
      id: 2,
      title: '$50M AI Transformation Success',
      description: 'See how a Fortune 500 company achieved $50M ROI with comprehensive AI transformation in 18 months.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '30 min',
      views: '18,000+',
      rating: 4.8,
      href: '/case-studies/ai-mega-transformation-2026',
      featured: true,
      metrics: { roi: '$50M', uptime: '99.9%', automation: '95%' }
    },
    {
      id: 3,
      title: 'AI Autonomous Operations 2026',
      description: 'Master autonomous AI enterprise operations with zero-touch business management and $8M+ savings.',
      category: 'autonomous',
      type: 'Guide',
      readTime: '35 min',
      views: '22,000+',
      rating: 4.9,
      href: '/blog/ai-autonomous-operations-2026',
      featured: true,
      metrics: { automation: '90%', savings: '$8M+', uptime: '99.9%' }
    },
    {
      id: 4,
      title: 'AI Innovation Revolution 2026',
      description: 'Complete guide to AI innovation with proven strategies and implementation frameworks for enterprise transformation.',
      category: 'innovation',
      type: 'Complete Guide',
      readTime: '40 min',
      views: '30,000+',
      rating: 4.9,
      href: '/blog/ai-innovation-2026-revolution',
      featured: false,
      metrics: { roi: '300%', productivity: '400%', efficiency: '95%' }
    },
    {
      id: 5,
      title: 'AI Agent Orchestration 2026',
      description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.',
      category: 'breakthrough',
      type: 'Technical Guide',
      readTime: '25 min',
      views: '15,000+',
      rating: 4.7,
      href: '/blog/ai-agent-orchestration-2026',
      featured: false,
      metrics: { automation: '95%', roi: '$5M+', efficiency: '90%' }
    },
    {
      id: 6,
      title: 'AI Sustainability & Green Tech 2026',
      description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
      category: 'innovation',
      type: 'Sustainability Guide',
      readTime: '20 min',
      views: '12,000+',
      rating: 4.6,
      href: '/blog/ai-sustainability-green-tech-2026',
      featured: false,
      metrics: { energy: '80%', savings: '$2M+', carbon: '100%' }
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      breakthrough: '🔮',
      'case-studies': '🏆',
      autonomous: '🤖',
      innovation: '⚡',
      all: '🚀'
    };
    return categoryMap[category] || '📄';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎯 INTERACTIVE CONTENT RECOMMENDATION
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized AI Content for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI content based on your business needs. 
            Filter by category and find the perfect resources to transform your operations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200 hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                          item.type === 'Complete Guide' ? 'bg-purple-100 text-purple-800' :
                          item.type === 'Technical Guide' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.type}
                        </span>
                        {item.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(item.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI experts can create custom content tailored to your specific business needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Request Custom Content
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}