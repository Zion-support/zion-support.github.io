import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️' },
    { id: 'quantum', name: 'Quantum Computing', icon: '🌌' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'guides', name: 'Implementation Guides', icon: '📚' },
  ];

  const contentCategories = {
    all: 'All Content',
    ai2025: 'AI 2025 Breakthroughs',
    ai2026: 'AI 2026-2030 Predictions',
    quantum: 'Quantum Computing',
    automation: 'Enterprise Automation',
    caseStudies: 'Success Stories'
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technologies delivering 2,500-5,000% ROI with quantum computing, neural interfaces, and autonomous operations.',
      category: 'ai2025',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-red-500 to-pink-500',
      icon: '🚀',
      stats: '2,500-5,000% ROI'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Breakthrough',
      description: 'Revolutionary AI predictions from quantum-neural fusion to consciousness AI and transcendent intelligence.',
      category: 'ai2026',
      href: '/ai-2026-2030-future-predictions-breakthrough',
      badge: 'FUTURE',
      badgeColor: 'from-cyan-500 to-blue-500',
      icon: '🔮',
      stats: 'Infinite ROI Potential'
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions 2025',
      description: 'Achieve quantum supremacy with error-corrected quantum computers, quantum machine learning, and quantum internet.',
      category: 'quantum',
      href: '/quantum-computing-solutions-2025',
      badge: 'REVOLUTIONARY',
      badgeColor: 'from-indigo-500 to-purple-500',
      icon: '⚛️',
      stats: '15,000% ROI'
    },
    {
      id: 4,
      title: 'Enterprise Automation Mastery 2025',
      description: 'Transform your business with intelligent process automation, predictive analytics, and autonomous decision systems.',
      category: 'automation',
      href: '/enterprise-automation-mastery-2025',
      badge: 'MASTERY',
      badgeColor: 'from-green-500 to-teal-500',
      icon: '🤖',
      stats: '8,500% ROI'
    },
    {
      id: 5,
      title: 'Global Enterprise Transformation Success',
      description: 'Fortune 500 company achieved 10,000% ROI with our AI breakthrough technologies and quantum optimization.',
      category: 'caseStudies',
      href: '/case-studies/ai-2025-global-transformation-breakthrough',
      badge: 'SUCCESS',
      badgeColor: 'from-emerald-500 to-green-500',
      icon: '🏆',
      stats: '10,000% ROI'
    },
    {
      id: 6,
      title: 'Quantum-Neural Fusion Breakthrough',
      description: 'Manufacturing company revolutionized operations with quantum-neural fusion achieving 15,000% ROI.',
      category: 'caseStudies',
      href: '/case-studies/ai-2026-quantum-neural-fusion-success',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-purple-500 to-pink-500',
      icon: '⚛️',
      stats: '15,000% ROI'
      description: 'The most significant AI advancement in history, delivering 15,000% ROI',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '15,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'REVOLUTIONARY',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Breakthrough',
      description: 'World\'s first successful fusion of quantum computing with neural networks',
      category: 'ai-2026',
      type: 'breakthrough',
      roi: '25,000%',
      link: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
      badge: 'BREAKTHROUGH',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 3,
      title: 'AI 2025 Ultimate Implementation Master Guide',
      description: 'Complete step-by-step guide to achieve 15,000% ROI with AI implementation',
      category: 'guides',
      type: 'guide',
      roi: '15,000%',
      link: '/resources/ai-2025-ultimate-implementation-master-guide',
      badge: 'ESSENTIAL',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Fortune 500 AI Transformation Success',
      description: 'How Fortune 500 companies achieved 18,500% ROI with our AI solutions',
      category: 'case-studies',
      type: 'case-study',
      roi: '18,500%',
      link: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
      badge: 'SUCCESS',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum computing solutions delivering unprecedented performance',
      category: 'quantum',
      type: 'breakthrough',
      roi: '30,000%',
      link: '/quantum-computing-breakthroughs-2030',
      badge: 'FUTURE',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'AI 2026 Future Predictions',
      description: 'Comprehensive predictions for AI development through 2026 and beyond',
      category: 'ai-2026',
      type: 'prediction',
      roi: 'N/A',
      link: '/blog/ai-2026-future-predictions-breakthrough',
      badge: 'PREDICTION',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-4 animate-pulse">
            🎯 ULTIMATE CONTENT DISCOVERY
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough AI technologies, future predictions, 
            and proven success stories that are transforming industries worldwide.
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, and implementation guides designed to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {label}
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
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.badgeColor}`}>
                    {item.badge}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Content Stats */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {item.stats}
                  </div>
                  <Link
                    href={item.href}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Explore →
                  </Link>
                </div>
              key={content.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.color} text-white`}>
                  {content.badge}
                </span>
                {content.roi !== 'N/A' && (
                  <span className="text-green-400 font-bold text-sm">
                    {content.roi} ROI
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors">
                <Link href={content.link}>
                  {content.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>

              {/* Type Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {content.type.replace('-', ' ')}
                </span>
                <Link
                  href={content.link}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of companies already achieving unprecedented success with our AI breakthrough technologies.
        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation system can help you discover the perfect resources for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Success Stories
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/content-library"
                className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}