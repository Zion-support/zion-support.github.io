import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedContentDiscovery2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: { label: 'All Content', icon: '📚' },
    quantum: { label: 'Quantum AI', icon: '⚛️' },
    business: { label: 'Business Revolution', icon: '🚀' },
    automation: { label: 'AI Automation', icon: '🤖' },
    implementation: { label: 'Implementation', icon: '⚙️' },
    caseStudies: { label: 'Case Studies', icon: '📊' }
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Business Revolution: Complete Implementation Guide',
      description: 'Transform your business with comprehensive AI strategies achieving 3,000% ROI through revolutionary automation.',
      category: 'business',
      readTime: '45 min',
      difficulty: 'Advanced',
      roi: '3,000%',
      tags: ['Business Strategy', 'AI Implementation', 'ROI Optimization'],
      href: '/resources/ai-2025-ultimate-business-revolution-complete-implementation-guide'
    },
    {
      id: 2,
      title: 'Quantum AI 2025: Ultimate Breakthrough Implementation Roadmap',
      description: 'Experience 100,000x faster processing with quantum computing. Achieve 15,000% ROI and dominate your industry.',
      category: 'quantum',
      readTime: '60 min',
      difficulty: 'Expert',
      roi: '15,000%',
      tags: ['Quantum Computing', 'AI Revolution', 'Breakthrough Technology'],
      href: '/resources/quantum-ai-2025-ultimate-breakthrough-implementation-roadmap'
    },
    {
      id: 3,
      title: 'Autonomous Enterprise Systems Implementation Guide 2025',
      description: 'Build self-managing business systems with AI-powered automation achieving 40,000% ROI.',
      category: 'automation',
      readTime: '50 min',
      difficulty: 'Advanced',
      roi: '40,000%',
      tags: ['Autonomous Systems', 'Enterprise AI', 'Automation'],
      href: '/resources/autonomous-enterprise-systems-implementation-guide-2025'
    },
    {
      id: 4,
      title: 'Neural Interface Implementation Master Guide 2025',
      description: 'Direct human-AI interaction systems for enhanced productivity and decision-making.',
      category: 'implementation',
      readTime: '35 min',
      difficulty: 'Expert',
      roi: '800%',
      tags: ['Neural Interfaces', 'Human-AI Interaction', 'Productivity'],
      href: '/resources/neural-interface-implementation-master-guide-2025'
    },
    {
      id: 5,
      title: 'Fortune 500 AI Transformation Success Stories',
      description: 'Real-world case studies of major corporations achieving unprecedented AI transformation results.',
      category: 'caseStudies',
      readTime: '30 min',
      difficulty: 'Intermediate',
      roi: '2,400%',
      tags: ['Case Studies', 'Fortune 500', 'Success Stories'],
      href: '/case-studies/fortune-500-ai-transformation'
    },
    {
      id: 6,
      title: 'Generative AI Implementation Master Guide 2025',
      description: 'Complete roadmap for implementing generative AI across enterprise operations.',
      category: 'implementation',
      readTime: '40 min',
      difficulty: 'Advanced',
      roi: '400%',
      tags: ['Generative AI', 'Content Creation', 'Automation'],
      href: '/resources/generative-ai-implementation-master-guide-2025-ultimate-roadmap'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-3 mb-6">
            <span className="text-white font-bold text-lg">🎯 ENHANCED CONTENT DISCOVERY 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Revolutionary
            </span>
            <br />
            <span className="text-gray-900">AI Content</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of AI implementation guides, case studies, and breakthrough strategies. 
            Each resource is designed to deliver measurable business transformation results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-500">{item.readTime}</span>
                    <span className="text-gray-300">•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.roi} ROI
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      +{item.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={item.href}
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  📖 Read Complete Guide
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-blue-600 mb-2">50+</div>
              <div className="text-sm font-semibold text-gray-600">Implementation Guides</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">25+</div>
              <div className="text-sm font-semibold text-gray-600">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green-600 mb-2">3,000%</div>
              <div className="text-sm font-semibold text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of organizations already achieving breakthrough results with our AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                🚀 Start Your AI Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                💡 Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentDiscovery2025;