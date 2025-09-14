'use client';

import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Star, TrendingUp, Users, DollarSign, Clock, ArrowRight, Filter, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    satisfaction: string;
  };
  readingTime: string;
  featured: boolean;
  tags: string[];
  year: number;
}

const UltimateContentShowcase2026 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 'quantum-ai-revolution-2026',
      title: 'Quantum AI Revolution 2026: The Future of Enterprise Computing',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-breakthrough',
      metrics: {
        roi: '1200%',
        savings: '$4.2B',
        efficiency: '500%',
        satisfaction: '99.9%'
      },
      readingTime: '30 min read',
      featured: true,
      tags: ['Quantum AI', 'Future Tech', 'Enterprise', 'Revolution'],
      year: 2026
    },
    {
      id: 'autonomous-enterprise-2026',
      title: 'Autonomous Enterprise 2026: Self-Managing AI Systems',
      type: 'case-study',
      url: '/case-studies/autonomous-enterprise-2026',
      metrics: {
        roi: '850%',
        savings: '$2.1B',
        efficiency: '400%',
        satisfaction: '99.5%'
      },
      readingTime: '28 min read',
      featured: true,
      tags: ['Autonomous', 'AI Systems', 'Self-Managing', 'Future'],
      year: 2026
    },
    {
      id: 'ai-2026-implementation-guide',
      title: 'AI 2026 Implementation Guide: Next-Gen Enterprise Strategy',
      type: 'resource',
      url: '/resources/ai-2026-implementation-guide',
      metrics: {
        roi: '950%',
        savings: '$3.8B',
        efficiency: '450%',
        satisfaction: '99.2%'
      },
      readingTime: '40 min read',
      featured: true,
      tags: ['Implementation', 'Strategy', 'Next-Gen', 'Guide'],
      year: 2026
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-5 h-5" />;
      case 'case-study':
        return <Star className="w-5 h-5" />;
      case 'resource':
        return <Users className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function UltimateContentShowcase2026() {
>>>>>>> cursor/create-and-deploy-new-content-41b2
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <Zap className="w-5 h-5" />
            <span>FUTURE CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Future of AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore next-generation AI content that's shaping the future of enterprise computing and business transformation
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                    {item.featured && (
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-medium">FEATURED</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </div>
                    <div className="text-xs text-purple-600 font-bold">
                      {item.year}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Future</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prepare for the AI Future
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Get ahead of the curve with our cutting-edge AI content and stay competitive in the rapidly evolving digital landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;
=======

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-gray-300">Expert Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">100K+</div>
            <div className="text-gray-300">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
            <div className="text-gray-300">Reader Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-gray-300">Updated Content</div>
          </div>
=======
const UltimateContentShowcase2026 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
=======
import { BookOpen, FileText, Users, TrendingUp, Star, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const contentItems = [
    {
      title: "AI 2026 Revolutionary Breakthrough Guide",
      description: "Complete guide to the revolutionary AI breakthroughs of 2026 that are transforming industries worldwide.",
      type: "Blog Post",
      readTime: "15 min read",
      href: "/blog/ai-2026-revolutionary-breakthrough-complete-guide",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "AI 2026 Transformation Success Story",
      description: "How a Fortune 500 company achieved 500% ROI through comprehensive AI transformation in 2026.",
      type: "Case Study",
      readTime: "12 min read",
      href: "/case-studies/ai-2026-transformation-ultimate-success-story",
      icon: Users,
      color: "from-green-500 to-teal-500",
      featured: true
    },
    {
      title: "AI 2026 Implementation Master Guide",
      description: "The definitive guide to implementing AI technologies in 2026 with complete roadmap and best practices.",
      type: "Resource",
      readTime: "20 min read",
      href: "/resources/ai-2026-implementation-ultimate-master-guide",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      featured: true
    }
  ];

  const benefits = [
    "500% Average ROI Achievement",
    "95% Quality Improvement",
    "40% Cost Reduction",
    "99.7% Accuracy Rate",
    "Revolutionary AI Technologies",
    "Proven Implementation Methods"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            ULTIMATE AI 2026 CONTENT SHOWCASE
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
>>>>>>> cursor/create-and-deploy-new-content-1ab1
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              That Drives Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI 2026 content featuring breakthrough technologies, 
            real success stories, and proven implementation strategies that deliver measurable results.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} text-white mb-6`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-sm text-gray-500 ml-3">
                      {item.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Our AI 2026 Content Delivers Results
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Proven Results from Our AI 2026 Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Quality Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI 2026?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already achieving breakthrough results with our proven AI strategies and implementation guides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-revolutionary-breakthrough-complete-guide"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start with Complete Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Expert Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default UltimateContentShowcase2026;
>>>>>>> 74be3321a801d4a34d6bac9d15fcac3698adcd40
>>>>>>> cursor/create-and-deploy-new-content-41b2
=======
export default UltimateContentShowcase2026;
>>>>>>> cursor/create-and-deploy-new-content-1ab1
