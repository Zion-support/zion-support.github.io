import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Star, Zap, Users, Target, Award } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  metrics: {
    primary: string;
    secondary: string;
    label: string;
  };
  href: string;
  featured: boolean;
  new: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-mega-trends-2026',
    title: 'AI Mega Trends 2026: The Future of Enterprise Intelligence',
    description: 'Discover the 10 mega trends shaping AI in 2026. From autonomous systems to quantum computing, explore how these trends will transform your business.',
    type: 'article',
    category: 'AI Trends',
    readTime: '28 min',
    metrics: { primary: '$12T', secondary: '45%', label: 'Market Value' },
    href: '/blog/ai-2026-mega-trends',
    featured: true,
    new: true
  },
  {
    id: 'ai-transformation-mega-success',
    title: 'AI Transformation Mega Success 2026: $15M ROI in 12 Months',
    description: 'See how a Fortune 500 manufacturing company achieved $15M ROI through comprehensive AI transformation, including autonomous systems and quantum optimization.',
    type: 'case-study',
    category: 'Fortune 500',
    readTime: '18 min',
    metrics: { primary: '$15M', secondary: '95%', label: 'ROI' },
    href: '/case-studies/ai-transformation-mega-success-2026',
    featured: true,
    new: true
  },
  {
    id: 'ai-agent-orchestration-2026',
    title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
    description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns and enterprise-grade coordination strategies.',
    type: 'guide',
    category: 'AI Orchestration',
    readTime: '22 min',
    metrics: { primary: '95%', secondary: '$5M+', label: 'Automation' },
    href: '/blog/ai-agent-orchestration-2026',
    featured: true,
    new: true
  },
  {
    id: 'ai-sustainability-green-tech-2026',
    title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology and green AI practices.',
    type: 'article',
    category: 'Sustainability',
    readTime: '18 min',
    metrics: { primary: '80%', secondary: '$2M+', label: 'Energy Saved' },
    href: '/blog/ai-sustainability-green-tech-2026',
    featured: false,
    new: true
  },
  {
    id: 'ai-quantum-computing-2026',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities that transform enterprise operations.',
    type: 'article',
    category: 'Quantum Computing',
    readTime: '25 min',
    metrics: { primary: '1000x', secondary: '95%', label: 'Faster' },
    href: '/blog/ai-quantum-computing-2026',
    featured: false,
    new: true
  },
  {
    id: 'ai-sustainability-transformation-2026',
    title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation and green technology.',
    type: 'case-study',
    category: 'Sustainability',
    readTime: '15 min',
    metrics: { primary: '$10M', secondary: '100%', label: 'ROI' },
    href: '/case-studies/ai-sustainability-transformation-2026',
    featured: false,
    new: true
  },
  {
    id: 'ai-quantum-optimization-2026',
    title: 'AI Quantum Optimization 2026: 1000x Speed Improvement Case Study',
    description: 'See how a financial services company achieved 1000x optimization speed and $12M additional returns with quantum-enhanced AI systems.',
    type: 'case-study',
    category: 'Quantum Computing',
    readTime: '12 min',
    metrics: { primary: '1000x', secondary: '$12M', label: 'Faster' },
    href: '/case-studies/ai-quantum-optimization-2026',
    featured: false,
    new: true
  },
  {
    id: 'ai-enterprise-automation-2026',
    title: 'AI Enterprise Automation 2026: Complete Business Process Transformation',
    description: 'Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations across all business functions.',
    type: 'guide',
    category: 'Enterprise AI',
    readTime: '20 min',
    metrics: { primary: '95%', secondary: '$5M+', label: 'Efficiency' },
    href: '/blog/ai-enterprise-automation-2026',
    featured: false,
    new: true
  }
];

export default function EnhancedContentShowcase2026() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'article' | 'case-study' | 'guide'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'trending'>('newest');

  const filteredContent = contentItems.filter(item => 
    activeFilter === 'all' || item.type === activeFilter
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'guide': return <Target className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-teal-500';
      case 'guide': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>2026 CONTENT COLLECTION</span>
            <Star className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Enterprise Transformation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge articles, case studies, and implementation guides that will 
            transform your business with the latest AI technologies and best practices.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveFilter('article')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'article'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => setActiveFilter('case-study')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'case-study'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveFilter('guide')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'guide'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Guides
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item, index) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                item.featured ? 'border-blue-200 hover:border-blue-300' : 'border-gray-100 hover:border-gray-200'
              } hover:scale-105`}>
                {/* Header */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg flex items-center justify-center text-white`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {item.type === 'case-study' ? 'Case Study' : item.type === 'guide' ? 'Guide' : 'Article'}
                        </div>
                        <div className="text-xs text-gray-400">{item.category}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {item.new && (
                        <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          NEW 2026
                        </span>
                      )}
                      {item.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{item.metrics.primary}</div>
                        <div className="text-xs text-gray-500">{item.metrics.label}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{item.metrics.secondary}</div>
                        <div className="text-xs text-gray-500">Impact</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">10K+ views</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our AI experts can help you implement these cutting-edge technologies 
              and achieve similar results in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="w-5 h-5 mr-2">💬</span>
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <span className="w-5 h-5 mr-2">🚀</span>
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}