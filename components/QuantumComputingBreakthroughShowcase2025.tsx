import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Clock, 
  Users, 
  TrendingUp, 
  Star,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  BookOpen,
  ExternalLink
} from 'lucide-react';

const QuantumComputingBreakthroughShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Quantum', count: 189 },
    { id: 'error-correction', name: 'Error Correction', count: 45 },
    { id: 'quantum-internet', name: 'Quantum Internet', count: 32 },
    { id: 'quantum-ai', name: 'Quantum-AI Fusion', count: 28 },
    { id: 'quantum-supremacy', name: 'Quantum Supremacy', count: 25 },
    { id: 'quantum-algorithms', name: 'Quantum Algorithms', count: 35 },
    { id: 'quantum-hardware', name: 'Quantum Hardware', count: 24 }
  ];

  const quantumBreakthroughs = [
    {
      id: 1,
      title: "Error-Corrected Quantum Computers: The 2025 Revolution",
      description: "Comprehensive analysis of error-corrected quantum computers and their potential to solve previously intractable problems in cryptography, optimization, and scientific simulation.",
      category: 'error-correction',
      readTime: '25 min',
      views: 125000,
      likes: 8900,
      rating: 4.9,
      tags: ['Error Correction', 'Quantum Computing', 'Cryptography', '2025'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-15',
      author: 'Dr. Sarah Chen',
      difficulty: 'Advanced'
    },
    {
      id: 2,
      title: "Quantum Internet 2026: Secure Global Communication Network",
      description: "Explore the development of quantum internet infrastructure, quantum key distribution, and the future of unhackable communication networks.",
      category: 'quantum-internet',
      readTime: '32 min',
      views: 98000,
      likes: 7200,
      rating: 4.8,
      tags: ['Quantum Internet', 'Security', 'Communication', '2026'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-12',
      author: 'Prof. Michael Rodriguez',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: "Quantum-AI Fusion: The Next Computing Paradigm",
      description: "Revolutionary insights into the fusion of quantum computing and artificial intelligence, creating unprecedented computational capabilities.",
      category: 'quantum-ai',
      readTime: '28 min',
      views: 87000,
      likes: 6500,
      rating: 4.7,
      tags: ['Quantum-AI', 'Fusion', 'Computational Power', 'AI'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-10',
      author: 'Dr. Alex Thompson',
      difficulty: 'Advanced'
    }
  ];

  const filteredContent = quantumBreakthroughs.filter(content => 
    selectedCategory === 'all' || content.category === selectedCategory
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 mb-6">
            <Cpu className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-white">QUANTUM COMPUTING BREAKTHROUGHS 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Breakthrough Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the most advanced quantum computing breakthroughs, error-corrected quantum computers, 
            and quantum internet technologies that will reshape the future of computing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{category.name}</span>
              <span className="text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {content.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                    FEATURED
                  </span>
                </div>
              )}
              
              <div className="relative">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded">
                    {categories.find(cat => cat.id === content.category)?.name}
                  </span>
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{content.difficulty}</span>
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{content.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{content.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{content.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{content.rating}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {content.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-gray-300 text-sm">{content.author}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to={`/quantum-computing/${content.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 group"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Quantum Computing Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">189</h4>
              <p className="text-gray-400">Quantum Articles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">10,000x</h4>
              <p className="text-gray-400">Speed Improvement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">99.9%</h4>
              <p className="text-gray-400">Security Enhancement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
              <p className="text-gray-400">Countries Researching</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Quantum Computing?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of researchers, engineers, and innovators exploring the quantum frontier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-2025"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2"
            >
              <Cpu className="w-5 h-5" />
              Explore Quantum Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/quantum-computing-resources"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughShowcase2025;