import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'blog' | 'case-study' | 'guide' | 'webinar' | 'tool';
  roi?: string;
  readTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  image: string;
  link: string;
  badge?: string;
  featured?: boolean;
}

const AI2029BreakthroughContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'singularity-breakthrough',
      title: 'AI 2029 Singularity Breakthrough',
      description: 'Discover the revolutionary AI 2029 breakthrough predictions including singularity events, quantum-AI fusion, and 10,000% ROI transformation opportunities.',
      category: 'predictions',
      type: 'blog',
      roi: '10,000% ROI',
      readTime: '12 min read',
      difficulty: 'Expert',
      image: '/images/ai-2029-singularity.jpg',
      link: '/blog/ai-2029-singularity-breakthrough',
      badge: 'REVOLUTIONARY',
      featured: true
    },
    {
      id: 'space-exploration',
      title: 'Space Exploration Breakthrough',
      description: 'How AI 2029 breakthrough technologies revolutionized space exploration with 5000% ROI and unprecedented mission success rates.',
      category: 'case-studies',
      type: 'case-study',
      roi: '5000% ROI',
      readTime: '15 min read',
      difficulty: 'Advanced',
      image: '/images/ai-2029-space-exploration.jpg',
      link: '/case-studies/ai-2029-space-exploration-breakthrough',
      badge: 'BREAKTHROUGH',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Implementation Master Guide',
      description: 'Complete roadmap to AI 2029 breakthrough technologies including quantum-AI fusion, neural interfaces, and consciousness backup systems.',
      category: 'guides',
      type: 'guide',
      roi: '10,000% ROI',
      readTime: '45 min read',
      difficulty: 'Expert',
      image: '/images/ai-2029-implementation.jpg',
      link: '/resources/ai-2029-implementation-master-guide',
      badge: 'MASTER GUIDE',
      featured: true
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Revolution',
      description: 'Explore how quantum computing and AI consciousness are merging to create the most powerful computational systems ever built.',
      category: 'technology',
      type: 'blog',
      roi: '8000% ROI',
      readTime: '18 min read',
      difficulty: 'Expert',
      image: '/images/quantum-ai-fusion.jpg',
      link: '/blog/ai-2029-quantum-ai-fusion',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'neural-interface-2029',
      title: 'Neural Interface 2029',
      description: 'Direct brain-computer interfaces achieving 99.9% accuracy in thought-to-action translation and consciousness backup.',
      category: 'technology',
      type: 'case-study',
      roi: '3000% ROI',
      readTime: '20 min read',
      difficulty: 'Advanced',
      image: '/images/neural-interface-2029.jpg',
      link: '/case-studies/ai-2029-neural-interface-breakthrough',
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'consciousness-upload',
      title: 'Consciousness Upload Protocol',
      description: 'First successful human consciousness backup with 95% fidelity achieved through advanced neural mapping techniques.',
      category: 'technology',
      type: 'guide',
      roi: '5000% ROI',
      readTime: '30 min read',
      difficulty: 'Expert',
      image: '/images/consciousness-upload.jpg',
      link: '/resources/ai-2029-consciousness-upload-guide',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'singularity-webinar',
      title: 'Singularity Webinar Series',
      description: 'Live expert discussions on AI 2029 breakthrough technologies and their impact on business transformation.',
      category: 'webinars',
      type: 'webinar',
      roi: '2000% ROI',
      readTime: '60 min',
      difficulty: 'Intermediate',
      image: '/images/singularity-webinar.jpg',
      link: '/webinars/ai-2029-singularity-breakthrough',
      badge: 'LIVE'
    },
    {
      id: 'roi-calculator-2029',
      title: 'AI 2029 ROI Calculator',
      description: 'Calculate your potential return on investment for AI 2029 breakthrough technology implementations.',
      category: 'tools',
      type: 'tool',
      roi: 'Custom ROI',
      readTime: '5 min',
      difficulty: 'Beginner',
      image: '/images/roi-calculator-2029.jpg',
      link: '/tools/ai-2029-roi-calculator',
      badge: 'NEW'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'predictions', label: 'Predictions', count: contentItems.filter(item => item.category === 'predictions').length },
    { id: 'case-studies', label: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'guides', label: 'Guides', count: contentItems.filter(item => item.category === 'guides').length },
    { id: 'technology', label: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'webinars', label: 'Webinars', count: contentItems.filter(item => item.category === 'webinars').length },
    { id: 'tools', label: 'Tools', count: contentItems.filter(item => item.category === 'tools').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'guide': return '📚';
      case 'webinar': return '🎥';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-4 animate-pulse">
          🚀 REVOLUTIONARY BREAKTHROUGH
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
          AI 2029 Breakthrough Content
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Explore the most advanced AI technologies and achieve unprecedented ROI
        </p>
      </div>

      {/* Featured Content */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">⭐ Featured Breakthroughs</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl opacity-80">{getTypeIcon(item.type)}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.roi}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty || 'Beginner')}`}>
                    {item.difficulty}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <span className="text-sm font-semibold text-green-600">{item.roi}</span>
                </div>
                <Link
                  to={item.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
            <div className="relative">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-4xl opacity-80">{getTypeIcon(item.type)}</span>
              </div>
              <div className="absolute top-2 left-2">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {item.badge}
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {item.roi}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">{getTypeIcon(item.type)}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty || 'Beginner')}`}>
                  {item.difficulty}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-3 text-sm line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500">{item.readTime}</span>
                <span className="text-xs font-semibold text-green-600">{item.roi}</span>
              </div>
              <Link
                to={item.link}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-pink-700 transition-all text-sm"
              >
                Access Content
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-lg mb-6 text-purple-100">
            Join thousands of organizations already implementing AI 2029 breakthrough technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              🚀 Start Implementation
            </Link>
            <Link
              to="/webinars/ai-2029-breakthrough-masterclass"
              className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-400 transition-colors"
            >
              📚 Join Masterclass
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2029BreakthroughContentShowcase;