import React, { useState } from 'react';
import Link from 'next/link';

export default function Interactive2027ContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contentItems = [
    {
      id: 'autonomous-enterprise',
      title: 'AI 2027: Autonomous Enterprise Transformation',
      description: 'Discover how AI-driven autonomous enterprise transformation will revolutionize business operations by 2027',
      category: 'blog',
      type: 'BREAKTHROUGH',
      typeColor: 'bg-green-500',
      readTime: '12 min',
      date: 'Jan 15, 2027',
      icon: '🏢',
      href: '/blog/ai-2027-autonomous-enterprise-transformation',
      tags: ['AI 2027', 'Enterprise', 'Transformation']
    },
    {
      id: 'neuromorphic-computing',
      title: 'AI 2027: Neuromorphic Computing Breakthrough',
      description: 'Brain-inspired AI systems delivering 1,000x power efficiency and cognitive capabilities',
      category: 'blog',
      type: 'REVOLUTIONARY',
      typeColor: 'bg-purple-500',
      readTime: '15 min',
      date: 'Jan 20, 2027',
      icon: '🧠',
      href: '/blog/ai-2027-neuromorphic-computing-breakthrough',
      tags: ['Neuromorphic', 'Computing', 'Breakthrough']
    },
    {
      id: 'neuromorphic-success',
      title: '$750M Neuromorphic AI Breakthrough Success',
      description: 'Fortune 100 company achieves breakthrough results with neuromorphic AI implementation',
      category: 'case-study',
      type: '$750M SUCCESS',
      typeColor: 'bg-green-500',
      readTime: '8 min',
      date: 'Jan 25, 2027',
      icon: '💰',
      href: '/case-studies/ai-2027-neuromorphic-breakthrough-success',
      tags: ['Case Study', 'Success', 'ROI']
    },
    {
      id: 'quantum-neural',
      title: 'AI 2027: Quantum Neural Networks',
      description: 'Exploring the breakthrough technology revolutionizing AI computing with quantum neural networks',
      category: 'blog',
      type: 'BREAKTHROUGH',
      typeColor: 'bg-blue-500',
      readTime: '14 min',
      date: 'Jan 10, 2027',
      icon: '⚛️',
      href: '/blog/ai-2027-quantum-neural-networks',
      tags: ['Quantum', 'Neural Networks', 'AI']
    },
    {
      id: 'quantum-success',
      title: '$500M Quantum AI Success Story',
      description: 'How quantum AI transformed a Fortune 100 company with unprecedented results',
      category: 'case-study',
      type: '$500M SUCCESS',
      typeColor: 'bg-yellow-500',
      readTime: '10 min',
      date: 'Jan 5, 2027',
      icon: '🚀',
      href: '/case-studies/ai-2027-quantum-breakthrough-success',
      tags: ['Quantum AI', 'Success', 'Transformation']
    },
    {
      id: 'autonomous-intelligence',
      title: 'AI 2026: Autonomous Business Intelligence',
      description: 'Advanced autonomous business intelligence systems driving enterprise transformation',
      category: 'blog',
      type: 'FEATURED',
      typeColor: 'bg-indigo-500',
      readTime: '11 min',
      date: 'Dec 28, 2026',
      icon: '🧠',
      href: '/blog/ai-2026-autonomous-business-intelligence',
      tags: ['Business Intelligence', 'Autonomous', 'AI']
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 Interactive 2027 Content Discovery
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore breakthrough AI technologies and success stories from 2027
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setSelectedCategory('blog')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'blog'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              📝 Blog Posts
            </button>
            <button
              onClick={() => setSelectedCategory('case-study')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'case-study'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              📊 Case Studies
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                bg-white rounded-lg shadow-lg p-6 h-full transition-all duration-300
                ${hoveredCard === item.id ? 'transform -translate-y-2 shadow-xl' : 'hover:shadow-lg'}
                border-l-4 ${item.typeColor.replace('bg-', 'border-')}
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <span className={`${item.typeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>⏱️ {item.readTime}</span>
                    <span>📅 {item.date}</span>
                  </div>
                  <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/content-hub" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all inline-block">
            Explore Content Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}