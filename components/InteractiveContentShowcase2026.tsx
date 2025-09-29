import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Clock, CheckCircle } from 'lucide-react';

export default function InteractiveContentShowcase2026() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', count: 50 },
    { id: 'breakthrough', name: 'Breakthrough', count: 15 },
    { id: 'case-studies', name: 'Case Studies', count: 20 },
    { id: 'guides', name: 'Guides', count: 15 },
  ];

  const content = [
    {
      id: 1,
      title: 'AI 2026 Mega Breakthrough Innovations',
      description: 'Revolutionary technologies reshaping industries with quantum AI, autonomous systems, and 1000x performance gains.',
      category: 'breakthrough',
      type: 'Article',
      readTime: '28 min',
      rating: 4.9,
      views: '50K+',
      image: '🚀',
      color: 'from-purple-500 to-blue-500',
      href: '/blog/ai-2026-mega-breakthrough-innovations',
      metrics: { performance: '1000x', reliability: '99.9%', roi: '$100M+' }
    },
    {
      id: 2,
      title: 'AI Space Tech Mission Success 2026',
      description: '$50M cost savings and 99.9% reliability in autonomous space operations with deep space intelligence.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '15 min',
      rating: 5.0,
      views: '25K+',
      image: '🛰️',
      color: 'from-blue-500 to-purple-500',
      href: '/case-studies/ai-space-tech-mission-success-2026',
      metrics: { savings: '$50M+', reliability: '99.9%', speed: '1000x' }
    },
    {
      id: 3,
      title: 'AI Sustainability Transformation 2026',
      description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '12 min',
      rating: 4.9,
      views: '30K+',
      image: '🌱',
      color: 'from-green-500 to-teal-500',
      href: '/case-studies/ai-sustainability-transformation-2026',
      metrics: { roi: '$10M+', carbon: '100%', energy: '80%' }
    },
    {
      id: 4,
      title: 'AI Quantum Computing 2026',
      description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
      category: 'breakthrough',
      type: 'Article',
      readTime: '25 min',
      rating: 4.8,
      views: '35K+',
      image: '⚛️',
      color: 'from-purple-500 to-indigo-500',
      href: '/blog/ai-quantum-computing-2026',
      metrics: { speed: '1000x', accuracy: '95%', cost: '60%' }
    },
    {
      id: 5,
      title: 'AI Neural Architecture Optimization 2026',
      description: 'Master neural architecture optimization with 40% performance gains, 60% cost reduction, and enterprise-grade scalability patterns.',
      category: 'guides',
      type: 'Guide',
      readTime: '32 min',
      rating: 4.9,
      views: '28K+',
      image: '🧠',
      color: 'from-orange-500 to-red-500',
      href: '/blog/ai-neural-architecture-optimization-2026',
      metrics: { performance: '40%', cost: '60%', training: '80%' }
    },
    {
      id: 6,
      title: 'AI Agent Orchestration 2026',
      description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.',
      category: 'guides',
      type: 'Guide',
      readTime: '22 min',
      rating: 4.8,
      views: '22K+',
      image: '🤖',
      color: 'from-cyan-500 to-blue-500',
      href: '/blog/ai-agent-orchestration-2026',
      metrics: { automation: '95%', roi: '$5M+', efficiency: '90%' }
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🚀 INTERACTIVE 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              CONTENT SHOWCASE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Interactive Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Showcase 2026
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our most popular and impactful AI content, case studies, and breakthrough innovations. Filter by category to discover exactly what you need to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:scale-105">
                {/* Image Header */}
                <div className={`relative h-48 bg-gradient-to-br ${item.color}`}>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">{item.image}</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      <Star className="w-3 h-3" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-gradient-to-r ${item.color} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                      NEW 2026
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime} read</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
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
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Content Impact by the Numbers</h3>
            <p className="text-xl text-blue-100">Real results from our breakthrough AI content and case studies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-blue-200">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <div className="text-blue-200">Total ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who are already using our breakthrough AI content and case studies to revolutionize their businesses and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Explore All Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                View Success Stories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}