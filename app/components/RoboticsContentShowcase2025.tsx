'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, DollarSign, Zap, Users, Target, Award } from 'lucide-react';

const RoboticsContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'robotics-guide',
      type: 'blog',
      title: 'AI 2025: The Advanced Robotics Revolution - Ultimate Enterprise Guide',
      description: 'Transform your business with next-generation robotic intelligence achieving 600% ROI and $4.2B annual savings.',
      url: '/blog/ai-2025-advanced-robotics-revolution-ultimate-guide',
      readingTime: '18 min read',
      category: 'guide',
      featured: true,
      metrics: {
        roi: '600%',
        savings: '$4.2B',
        efficiency: '95%',
        productivity: '340%'
      },
      tags: ['AI', 'Robotics', 'Enterprise', 'ROI', 'Automation']
    },
    {
      id: 'fortune-500-case-study',
      type: 'case-study',
      title: 'Fortune 500 Robotics Transformation: 600% ROI Success Story',
      description: 'How a global manufacturing giant achieved $4.2B annual savings with advanced robotics in 12 months.',
      url: '/case-studies/fortune-500-robotics-transformation-600-roi-success',
      readingTime: '15 min read',
      category: 'case-study',
      featured: true,
      metrics: {
        roi: '600%',
        savings: '$4.2B',
        timeline: '12 months',
        satisfaction: '98%'
      },
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story']
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'Robotics Implementation Master Guide 2025: From Strategy to 600% ROI',
      description: 'Complete roadmap for implementing advanced robotics solutions with proven frameworks and best practices.',
      url: '/resources/robotics-implementation-master-guide-2025',
      readingTime: '25 min read',
      category: 'resource',
      featured: true,
      metrics: {
        success: '98%',
        timeline: '8-12 months',
        payback: '3-6 months',
        projects: '500+'
      },
      tags: ['Implementation', 'Strategy', 'Framework', 'Best Practices']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <Zap className="w-5 h-5" />;
      case 'case-study': return <TrendingUp className="w-5 h-5" />;
      case 'resource': return <Target className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Robotics Revolution 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 600% ROI with cutting-edge robotics solutions
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">600%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$4.2B</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">340%</div>
            <div className="text-gray-600">Productivity Boost</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 600% ROI with Robotics?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join Fortune 500 companies transforming their operations with advanced robotics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsContentShowcase2025;