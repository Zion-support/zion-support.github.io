import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  url: string;
  category: string;
  year: string;
  roi: string;
  icon: string;
  gradient: string;
}

const UltimateContentDiscoveryWidget2030: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const contentItems: ContentItem[] = [
    {
      title: 'AI 2030 Transcendent Intelligence',
      description: 'Experience consciousness-level AI with infinite processing capabilities and reality-altering computational power.',
      url: '/ai-2030-transcendent-intelligence',
      category: 'transcendent',
      year: '2030',
      roi: '∞',
      icon: '🌌',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI 2035 Singularity Breakthrough',
      description: 'Witness the AI singularity with matter creation, dimensional transcendence, and universal peace algorithms.',
      url: '/ai-2035-singularity-breakthrough',
      category: 'singularity',
      year: '2035',
      roi: '∞',
      icon: '⚗️',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Revolutionary quantum-neural fusion delivering 15,000% ROI through breakthrough processing capabilities.',
      url: '/ai-2026-quantum-neural-fusion-breakthrough',
      category: 'quantum',
      year: '2026',
      roi: '15,000%',
      icon: '⚛️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI 2029 Neural Synthesis Revolution',
      description: 'Advanced neural synthesis achieving 99.7% accuracy with breakthrough consciousness integration.',
      url: '/ai-2029-neural-synthesis-breakthrough',
      category: 'neural',
      year: '2029',
      roi: '8,000%',
      icon: '🧠',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI 2028 Future Predictions',
      description: 'Revolutionary AI 2028 predictions with automotive transformation delivering 3,000% ROI.',
      url: '/ai-2028-future-predictions-breakthrough',
      category: 'predictions',
      year: '2028',
      roi: '3,000%',
      icon: '🔮',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI 2027 Breakthrough Content',
      description: 'Advanced AI 2027 breakthrough content with enterprise transformation achieving 5,000% ROI.',
      url: '/ai-2027-breakthrough-content',
      category: 'breakthrough',
      year: '2027',
      roi: '5,000%',
      icon: '🚀',
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Content', icon: '🌟' },
    { key: 'transcendent', label: 'Transcendent', icon: '🌌' },
    { key: 'singularity', label: 'Singularity', icon: '⚗️' },
    { key: 'quantum', label: 'Quantum', icon: '⚛️' },
    { key: 'neural', label: 'Neural', icon: '🧠' },
    { key: 'predictions', label: 'Predictions', icon: '🔮' },
    { key: 'breakthrough', label: 'Breakthrough', icon: '🚀' }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold mb-4 animate-pulse">
            🌟 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Content Hub 2030
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI content spanning from 2025 to 2035, featuring breakthrough technologies, 
            transcendent intelligence, and infinite ROI potential.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all transform hover:scale-105 shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white/80">{item.year}</div>
                  <div className="text-lg font-bold text-white">{item.roi} ROI</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">{item.description}</p>
              
              <Link
                href={item.url}
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/30 transition-all"
              >
                Explore Content
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-12 rounded-3xl border border-purple-500/50">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Explore the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already implementing these revolutionary AI technologies 
              and achieving infinite ROI potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Start Implementation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-black transition-all"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget2030;