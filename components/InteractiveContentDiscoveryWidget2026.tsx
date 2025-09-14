import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀', count: 50 },
    { id: 'quantum', name: 'Quantum-Neural Fusion', icon: '⚛️', count: 12 },
    { id: 'predictions', name: 'Future Predictions', icon: '🔮', count: 8 },
    { id: 'success', name: 'Success Stories', icon: '🏆', count: 15 },
    { id: 'implementation', name: 'Implementation Guides', icon: '🛠️', count: 10 },
    { id: 'transcendent', name: 'Transcendent Intelligence', icon: '🌌', count: 4 },
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2026 Ultimate Breakthrough Revolution',
      description: 'Quantum-Neural Fusion technology delivering 15,000% ROI and transcendent intelligence capabilities.',
      category: 'quantum',
      roi: '15,000%',
      accuracy: '99.9%',
      link: '/ai-2026-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2027 Future Predictions Revolutionary',
      description: 'Neural synthesis breakthroughs achieving 99.7% accuracy and 8,000% ROI predictions.',
      category: 'predictions',
      roi: '8,000%',
      accuracy: '99.7%',
      link: '/ai-2027-future-predictions-revolutionary',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum-Neural Fusion Enterprise Transformation',
      description: 'Fortune 500 company achieves 15,000% ROI through revolutionary AI implementation.',
      category: 'success',
      roi: '15,000%',
      accuracy: '99.9%',
      link: '/case-studies/ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025 Global Transformation Breakthrough',
      description: 'Global enterprise achieves 10,000% ROI through revolutionary AI transformation.',
      category: 'success',
      roi: '10,000%',
      accuracy: '95%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: false
    },
    {
      id: 5,
      title: 'Neural Synthesis Technology Breakthrough',
      description: 'Revolutionary neural synthesis achieving 99.7% accuracy in complex decision-making.',
      category: 'transcendent',
      roi: '∞',
      accuracy: '99.7%',
      link: '/blog/ai-2027-neural-synthesis-breakthrough',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2026 Ultimate Implementation Master Guide',
      description: 'Complete guide to implementing revolutionary AI systems in your organization.',
      category: 'implementation',
      roi: '15,000%',
      accuracy: '99.9%',
      link: '/resources/ai-2026-ultimate-implementation-master-guide',
      featured: false
    }
  ];

  const filteredContent = contentCategories.find(cat => cat.id === selectedCategory)?.name === 'All Content' 
    ? contentCategories 
    : contentCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = contentCategories.find(cat => cat.id === selectedCategory)?.name === 'All Content'
    ? contentCategories
    : contentCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Content Discovery Widget 2026
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most relevant revolutionary AI content for your needs. 
            Use our intelligent discovery widget to find breakthrough technologies, success stories, and implementation guides.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary AI content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {contentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 border border-white/20 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentCategories.map((category) => (
            <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">
                {category.id === 'quantum' && 'Revolutionary fusion of quantum computing and neural networks'}
                {category.id === 'predictions' && 'Comprehensive AI predictions from 2026-2030'}
                {category.id === 'success' && 'Real-world case studies with proven ROI results'}
                {category.id === 'implementation' && 'Step-by-step guides for AI implementation'}
                {category.id === 'transcendent' && 'AI systems achieving consciousness-level intelligence'}
                {category.id === 'all' && 'Complete collection of revolutionary AI content'}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-bold">{category.count} articles</span>
                <Link 
                  href={category.id === 'all' ? '/ultimate-content-showcase-2026' : `/${category.id}`}
                  className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Featured Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.slice(0, 6).map((content) => (
              <div key={content.id} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{content.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white">{content.name}</h4>
                    <div className="text-sm text-gray-400">{content.count} articles</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  {content.id === 'quantum' && 'Revolutionary fusion technology delivering unprecedented processing power'}
                  {content.id === 'predictions' && 'Future predictions including transcendent intelligence systems'}
                  {content.id === 'success' && 'Proven success stories with extraordinary ROI achievements'}
                  {content.id === 'implementation' && 'Complete implementation guides and toolkits'}
                  {content.id === 'transcendent' && 'AI systems achieving consciousness-level intelligence'}
                  {content.id === 'all' && 'Complete collection of revolutionary AI content and resources'}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <span className="text-green-400 font-bold text-sm">15,000% ROI</span>
                    <span className="text-blue-400 font-bold text-sm">99.9% Accuracy</span>
                  </div>
                  <Link 
                    href={content.id === 'all' ? '/ultimate-content-showcase-2026' : `/${content.id}`}
                    className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Discover Revolutionary AI Content?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the most comprehensive collection of revolutionary AI content. 
            Find breakthrough technologies, success stories, and implementation guides tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ultimate-content-showcase-2026"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/ai-2026-ultimate-breakthrough-revolution"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Start with Breakthrough
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}