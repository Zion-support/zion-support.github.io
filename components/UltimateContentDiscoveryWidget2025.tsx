import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: 'All Content',
    breakthroughs: 'Breakthroughs',
    predictions: 'Predictions',
    quantum: 'Quantum Computing',
    caseStudies: 'Case Studies',
    resources: 'Resources'
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthroughs delivering 10,000% ROI with quantum computing, neural interfaces, and autonomous systems.',
      category: 'breakthroughs',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      image: '🚀',
      badge: 'NEW',
      badgeColor: 'bg-red-500',
      stats: '10,000% ROI'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Revolutionary',
      description: 'Discover revolutionary AI predictions from quantum-neural fusion to transcendent intelligence and infinite ROI potential.',
      category: 'predictions',
      url: '/ai-2026-2030-future-predictions-revolutionary',
      image: '🔮',
      badge: 'REVOLUTIONARY',
      badgeColor: 'bg-purple-500',
      stats: '∞ ROI Potential'
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthrough 2025',
      description: 'Revolutionary quantum computing with error-corrected quantum supremacy delivering 10,000% ROI across industries.',
      category: 'quantum',
      url: '/quantum-computing-breakthrough-2025',
      image: '⚛️',
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-cyan-500',
      stats: '10,000x Faster'
    },
    {
      id: 4,
      title: 'Global Manufacturing Transformation',
      description: 'Quantum manufacturing breakthrough delivering 10,000% ROI through 90% cost reduction and 500% output increase.',
      category: 'caseStudies',
      url: '/case-studies/ai-2025-quantum-manufacturing-transformation',
      image: '🏭',
      badge: 'SUCCESS',
      badgeColor: 'bg-green-500',
      stats: '10,000% ROI'
    },
    {
      id: 5,
      title: 'Neural Interface Healthcare Revolution',
      description: '95% patient recovery rate achieved through direct brain-computer interfaces and neural synthesis technology.',
      category: 'caseStudies',
      url: '/case-studies/ai-2026-neural-interface-healthcare-breakthrough',
      image: '🧠',
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-pink-500',
      stats: '95% Recovery Rate'
    },
    {
      id: 6,
      title: 'Quantum Implementation Master Guide',
      description: 'Complete implementation guide for quantum computing solutions with proven methodologies and best practices.',
      category: 'resources',
      url: '/resources/quantum-computing-implementation-guide',
      image: '📚',
      badge: 'ESSENTIAL',
      badgeColor: 'bg-blue-500',
      stats: '99.9% Success Rate'
    },
    {
      id: 7,
      title: 'AI 2025 Revolutionary Trends Analysis',
      description: 'Comprehensive analysis of AI trends and predictions for 2025 with actionable insights for business transformation.',
      category: 'predictions',
      url: '/blog/ai-2025-revolutionary-trends-predictions',
      image: '📈',
      badge: 'TRENDING',
      badgeColor: 'bg-orange-500',
      stats: '99.7% Accuracy'
    },
    {
      id: 8,
      title: 'Fortune 500 Transformation Success',
      description: '1,500% ROI achieved for Fortune 500 company through AI automation and quantum optimization solutions.',
      category: 'caseStudies',
      url: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
      image: '🏢',
      badge: 'SUCCESS',
      badgeColor: 'bg-yellow-500',
      stats: '1,500% ROI'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🚀 Ultimate Content Discovery Hub 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary AI content library featuring breakthrough technologies, 
            future predictions, and success stories delivering unprecedented ROI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-400 hover:text-purple-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200"
            >
              {/* Image/Badge Section */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <div className="text-6xl">{item.image}</div>
                <div className={`absolute top-4 right-4 ${item.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {item.badge}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-purple-600">
                    {item.stats}
                  </div>
                  <div className="text-purple-500 group-hover:text-purple-700 font-semibold">
                    Explore →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Content Highlight */}
        <div className="mt-16 bg-gradient-to-r from-purple-800 to-blue-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              🌟 Featured: AI 2025 Ultimate Breakthrough Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the most comprehensive collection of AI breakthroughs, predictions, and success stories 
              that are transforming industries with unprecedented ROI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">1000+</div>
                <div className="text-gray-300">Success Stories</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution" 
                className="bg-gradient-to-r from-yellow-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Explore All Content
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                💬 Get Personalized Recommendations
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Ready to Transform Your Business?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-xl font-bold mb-2">Free Assessment</h4>
              <p className="text-gray-600 mb-4">
                Get a personalized AI readiness assessment and implementation roadmap.
              </p>
              <Link 
                href="/tools/ai-readiness-assessment" 
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Start Assessment →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">ROI Calculator</h4>
              <p className="text-gray-600 mb-4">
                Calculate your potential ROI with our AI solutions and quantum computing.
              </p>
              <Link 
                href="/tools/ai-roi-calculator" 
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Calculate ROI →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold mb-2">Expert Consultation</h4>
              <p className="text-gray-600 mb-4">
                Speak with our AI experts about your specific transformation needs.
              </p>
              <Link 
                href="/contact" 
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Schedule Call →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}