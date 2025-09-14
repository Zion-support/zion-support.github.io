'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Shield, 
  Zap, 
  Eye, 
  Mic, 
  Video, 
  ArrowRight, 
  TrendingUp,
  Clock,
  Users,
  Award
} from 'lucide-react';

const RevolutionaryAI2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 'multimodal-intelligence',
      title: 'AI 2025: The Multimodal Intelligence Revolution',
      description: 'Discover how multimodal AI is transforming enterprise operations with 750% ROI, combining text, image, audio, and video processing for unprecedented business intelligence.',
      url: '/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide',
      type: 'blog',
      category: 'ai-revolution',
      readingTime: '25 min read',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        accuracy: '99.7%',
        productivity: '156%'
      },
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      featured: true
    },
    {
      id: 'federated-learning',
      title: 'Federated Learning Enterprise Privacy Breakthrough',
      description: 'Achieve 650% ROI with zero data compromise using privacy-preserving federated learning across enterprise networks.',
      url: '/blog/ai-2025-federated-learning-enterprise-privacy-breakthrough',
      type: 'blog',
      category: 'privacy',
      readingTime: '22 min read',
      metrics: {
        roi: '650%',
        savings: '$3.8M',
        privacy: '100%',
        compliance: '100%'
      },
      icon: Shield,
      color: 'from-green-600 to-teal-600',
      featured: true
    },
    {
      id: 'edge-computing',
      title: 'The Edge Computing Revolution - Ultimate Guide',
      description: 'Transform enterprise AI with 450% ROI, reducing latency by 67% and cutting costs by 89% through distributed intelligence.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      category: 'infrastructure',
      readingTime: '20 min read',
      metrics: {
        roi: '450%',
        savings: '$2.3M',
        latency: '67%',
        uptime: '99.7%'
      },
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      featured: true
    },
    {
      id: 'multimodal-case-study',
      title: 'Fortune 500 Multimodal AI Success: 750% ROI',
      description: 'How a Fortune 500 manufacturing giant achieved 750% ROI and $67M annual savings through multimodal AI implementation.',
      url: '/case-studies/multimodal-ai-fortune-500-success-750-roi',
      type: 'case-study',
      category: 'case-studies',
      readingTime: '18 min read',
      metrics: {
        roi: '750%',
        savings: '$67M',
        efficiency: '94%',
        satisfaction: '99.8%'
      },
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentPieces.filter(c => c.category === 'ai-revolution').length },
    { id: 'privacy', label: 'Privacy & Security', count: contentPieces.filter(c => c.category === 'privacy').length },
    { id: 'infrastructure', label: 'Infrastructure', count: contentPieces.filter(c => c.category === 'infrastructure').length },
    { id: 'case-studies', label: 'Case Studies', count: contentPieces.filter(c => c.category === 'case-studies').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.category === activeCategory);

  const featuredContent = contentPieces.filter(content => content.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-6 py-2 mb-6">
            <Brain className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">REVOLUTIONARY AI 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Future of Enterprise AI is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI technology that are transforming 
            enterprise operations with unprecedented ROI and revolutionary capabilities.
          </p>
        </div>

        {/* Featured content highlight */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">FEATURED</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {featuredContent.length} Revolutionary Guides
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Multimodal Intelligence Revolution
                </h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  The most comprehensive guide to multimodal AI, featuring 750% ROI 
                  strategies and real-world implementation case studies from Fortune 500 companies.
                </p>

                {/* Success metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">750%</div>
                    <div className="text-sm text-gray-300">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$4.2M</div>
                    <div className="text-sm text-gray-300">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">99.7%</div>
                    <div className="text-sm text-gray-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">156%</div>
                    <div className="text-sm text-gray-300">Productivity</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide"
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
                  >
                    Get Custom Assessment
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredContent.slice(0, 4).map((content) => (
                  <div
                    key={content.id}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
                  >
                    <div className="flex items-start space-x-3">
                      <content.icon className={`w-6 h-6 text-${content.color.split('-')[1]}-400 flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{content.title}</h4>
                        <div className="text-xs text-gray-300 mb-2">
                          {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                            <span key={key} className="mr-3">
                              {value} {key.toUpperCase()}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-xs text-white text-opacity-60">
                          <Clock className="w-3 h-3 mr-1" />
                          {content.readingTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs bg-white bg-opacity-20 rounded-full px-2 py-1">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${content.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${content.color} text-white`}>
                      <content.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold bg-gray-100 text-gray-700 rounded-full px-3 py-1">
                          {content.type.toUpperCase()}
                        </span>
                        {content.featured && (
                          <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full px-3 py-1">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readingTime}
                  </div>
                  <Link
                    href={content.url}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${content.color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a comprehensive assessment of your AI opportunities and a 
              customized implementation strategy that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025Showcase;