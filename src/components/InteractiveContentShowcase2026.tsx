import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Network, 
  Cpu, 
  Rocket, 
  Globe,
  ArrowRight,
  Star,
  Search,
  Filter,
  Grid,
  List,
  Heart,
  Bookmark,
  Share2
} from 'lucide-react';

const InteractiveContentShowcase2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Categories', count: 60 },
    { id: 'synthetic-intelligence', name: 'Synthetic Intelligence', count: 15 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 12 },
    { id: 'consciousness-tech', name: 'Consciousness Technology', count: 8 },
    { id: 'space-ai', name: 'Space AI', count: 6 }
  ];

  const content = [
    {
      id: 51,
      title: "Synthetic Intelligence 2026: Beyond Artificial Intelligence",
      excerpt: "The next evolution of AI that combines consciousness, creativity, and emotional intelligence in ways never seen before.",
      author: "Dr. Elena Rodriguez",
      publishDate: "2026-01-25",
      readTime: "14 min read",
      category: "synthetic-intelligence",
      tags: ["Synthetic Intelligence", "Consciousness", "Creativity"],
      imageUrl: "/images/blog/synthetic-intelligence-2026.jpg",
      slug: "synthetic-intelligence-2026-beyond-artificial-intelligence",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      views: 12500,
      likes: 890
    },
    {
      id: 52,
      title: "Quantum Neural Fusion: The Future of Computing",
      excerpt: "Revolutionary technology that combines quantum computing with neural networks to create exponentially more powerful AI systems.",
      author: "Dr. Marcus Chen",
      publishDate: "2026-01-26",
      readTime: "16 min read",
      category: "quantum-computing",
      tags: ["Quantum Neural", "Fusion Computing", "AI Breakthrough"],
      imageUrl: "/images/blog/quantum-neural-fusion-2026.jpg",
      slug: "quantum-neural-fusion-future-computing",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      views: 9800,
      likes: 756
    },
    {
      id: 53,
      title: "Interdimensional Data Networks: Computing Across Realities",
      excerpt: "Revolutionary networking technology that enables data transmission and processing across multiple dimensions and parallel universes.",
      author: "Dr. Sarah Kim",
      publishDate: "2026-01-27",
      readTime: "18 min read",
      category: "consciousness-tech",
      tags: ["Interdimensional", "Data Networks", "Parallel Universes"],
      imageUrl: "/images/blog/interdimensional-data-networks-2026.jpg",
      slug: "interdimensional-data-networks-computing-realities",
      icon: Network,
      color: "from-green-600 to-emerald-600",
      views: 11200,
      likes: 923
    }
  ];

  const filteredContent = content.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2026
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary technologies through interactive demonstrations and detailed insights
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(contentTabs).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-2">{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Content Display */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} rounded-full mt-2`}></div>
              </div>
            </div>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {contentTabs[activeTab as keyof typeof contentTabs].content.description}
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-purple-400">Real-World Applications</h4>
            <div className="space-y-4">
              {contentTabs[activeTab as keyof typeof contentTabs].content.applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
                    <span className="text-gray-200">{application}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href={`/pages/${activeTab === 'consciousness' ? 'ConsciousnessComputing2026' : 
                        activeTab === 'quantum' ? 'QuantumReality2026' : 
                        activeTab === 'neural' ? 'NeuralInterfaceEvolution2026' : 
                        'SyntheticIntelligence2026'}`}
                className={`inline-block bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg`}
              >
                Explore {contentTabs[activeTab as keyof typeof contentTabs].title} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join us in this revolutionary journey and be part of the most significant 
          technological advancement in human history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2026" 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🌟 Experience All Technologies →
          </a>
          <a 
            href="/pages/UltimateTechRevolution2026" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🚀 Ultimate Revolution →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;
