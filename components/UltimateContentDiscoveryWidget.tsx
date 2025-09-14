"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  status: string;
  href: string;
  icon: string;
  gradient: string;
}

export default function UltimateContentDiscoveryWidget() {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI through quantum neural networks',
      category: 'breakthrough',
      roi: '10,000%',
      status: 'REVOLUTIONARY',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: '2',
      title: 'AI 2025 Ultimate Breakthrough Success',
      description: 'Real case study showing 15,000% ROI achievement with Fortune 500 company',
      category: 'case-study',
      roi: '15,000%',
      status: 'SUCCESS',
      href: '/case-studies/ai-2025-ultimate-breakthrough-success',
      icon: '🏆',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: '3',
      title: 'Quantum Neural Networks Implementation',
      description: 'Complete guide to implementing quantum-enhanced neural networks',
      category: 'guide',
      roi: '5,000%',
      status: 'BREAKTHROUGH',
      href: '/resources/quantum-neural-networks-guide',
      icon: '🧠',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '4',
      title: 'Autonomous Operations Mastery',
      description: 'Learn to deploy fully autonomous business operations',
      category: 'guide',
      roi: '8,000%',
      status: 'REVOLUTIONARY',
      href: '/resources/autonomous-operations-mastery',
      icon: '🤖',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: '5',
      title: 'Fortune 500 Transformation Success',
      description: 'How we transformed a Fortune 500 company with AI breakthrough',
      category: 'case-study',
      roi: '12,000%',
      status: 'SUCCESS',
      href: '/case-studies/fortune-500-transformation',
      icon: '🏢',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: '6',
      title: 'Quantum Supremacy Achievement',
      description: 'Achieve quantum supremacy in business operations',
      category: 'breakthrough',
      roi: '20,000%',
      status: 'REVOLUTIONARY',
      href: '/quantum-supremacy-achievement',
      icon: '⚛️',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'guide', name: 'Guides', count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-4">
            🔥 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough AI content, 
            case studies, and implementation guides that deliver guaranteed results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-green-600">
                    {item.roi} ROI
                  </div>
                  <div className="text-sm text-gray-500 capitalize">
                    {item.category.replace('-', ' ')}
                  </div>
                </div>
                
                <Link
                  href={item.href}
                  className={`w-full bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold text-center block hover:opacity-90 transition-all duration-300`}
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 text-purple-100">
              Join thousands of businesses already experiencing unprecedented growth 
              with our revolutionary AI breakthrough technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}