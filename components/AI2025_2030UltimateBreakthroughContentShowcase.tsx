import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  TrendingUp, 
  Star, 
  BookOpen, 
  Play, 
  Download,
  Share2,
  Heart,
  Eye,
  Filter,
  Search,
  Calendar,
  Tag
} from 'lucide-react';

const AI2025_2030UltimateBreakthroughContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', count: 1247 },
    { id: 'ai-2025', name: 'AI 2025', count: 312 },
    { id: 'quantum-2026', name: 'Quantum 2026', count: 189 },
    { id: 'autonomous-2027', name: 'Autonomous 2027', count: 156 },
    { id: 'neural-2028', name: 'Neural 2028', count: 134 },
    { id: 'singularity-2030', name: 'Singularity 2030', count: 98 },
    { id: 'predictions', name: 'Predictions', count: 358 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "The Complete AI 2025-2030 Roadmap: From Neural Networks to Transcendent Intelligence",
      description: "Comprehensive guide covering every major AI breakthrough, quantum computing advancement, and autonomous system development from 2025 to 2030.",
      category: 'ai-2025',
      readTime: '45 min',
      views: 125000,
      likes: 8900,
      rating: 4.9,
      tags: ['AI', 'Predictions', 'Roadmap', 'Future Tech'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-15',
      author: 'Dr. Sarah Chen'
    },
    {
      id: 2,
      title: "Quantum Supremacy 2026: Error-Corrected Quantum Computers and the New Internet",
      description: "Deep dive into quantum computing breakthroughs, error correction techniques, and the development of quantum internet infrastructure.",
      category: 'quantum-2026',
      readTime: '32 min',
      views: 98000,
      likes: 7200,
      rating: 4.8,
      tags: ['Quantum Computing', 'Error Correction', 'Quantum Internet'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-12',
      author: 'Prof. Michael Rodriguez'
    },
    {
      id: 3,
      title: "Autonomous AI Systems 2027: Self-Managing Networks and Zero-Intervention Operations",
      description: "Explore the future of fully autonomous AI systems that can self-heal, self-optimize, and operate without human intervention.",
      category: 'autonomous-2027',
      readTime: '28 min',
      views: 87000,
      likes: 6500,
      rating: 4.7,
      tags: ['Autonomous Systems', 'Self-Healing', 'AI Operations'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-10',
      author: 'Dr. Alex Thompson'
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2028: Brain-Computer Integration and Cognitive Enhancement",
      description: "Revolutionary insights into neural interfaces, brain-computer integration, and cognitive enhancement technologies.",
      category: 'neural-2028',
      readTime: '38 min',
      views: 76000,
      likes: 5800,
      rating: 4.6,
      tags: ['Neural Interfaces', 'Brain-Computer', 'Cognitive Enhancement'],
      image: '/api/placeholder/400/250',
      featured: false,
      publishedAt: '2025-01-08',
      author: 'Dr. Elena Volkov'
    },
    {
      id: 5,
      title: "The Singularity Horizon 2030: Preparing for Artificial General Intelligence",
      description: "Comprehensive analysis of AGI development, singularity predictions, and preparation strategies for the post-singularity world.",
      category: 'singularity-2030',
      readTime: '52 min',
      views: 145000,
      likes: 11200,
      rating: 4.9,
      tags: ['AGI', 'Singularity', 'Future Predictions'],
      image: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-05',
      author: 'Dr. James Wilson'
    },
    {
      id: 6,
      title: "Quantum-AI Fusion 2029: The Convergence of Quantum Computing and Artificial Intelligence",
      description: "Explore the revolutionary fusion of quantum computing and AI, creating unprecedented computational capabilities.",
      category: 'quantum-2026',
      readTime: '41 min',
      views: 92000,
      likes: 7800,
      rating: 4.8,
      tags: ['Quantum-AI', 'Fusion', 'Computational Power'],
      image: '/api/placeholder/400/250',
      featured: false,
      publishedAt: '2025-01-03',
      author: 'Dr. Maria Santos'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6">
            <BookOpen className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-white">ULTIMATE CONTENT SHOWCASE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025-2030 Ultimate
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Breakthrough Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and revolutionary technology insights spanning 2025-2030.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search breakthrough content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
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
                  <span className="text-gray-400 text-xs">{content.publishedAt}</span>
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
                      <Clock className="w-4 h-4" />
                      <span>{content.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{content.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{content.rating}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {content.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-300 text-sm">{content.author}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span>{content.likes.toLocaleString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to={`/content/${content.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            Load More Content
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1,247</div>
            <div className="text-gray-400">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2.5M+</div>
            <div className="text-gray-400">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98.5%</div>
            <div className="text-gray-400">User Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Active Readers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateBreakthroughContentShowcase;