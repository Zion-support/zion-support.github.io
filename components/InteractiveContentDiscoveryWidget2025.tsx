import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, Clock, Users, Star, TrendingUp, Zap, Brain, Target } from 'lucide-react';

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: Search },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap },
    { id: 'automation', name: 'Automation', icon: Target },
    { id: 'technology', name: 'Technology', icon: TrendingUp },
    { id: 'case-studies', name: 'Case Studies', icon: Star }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Neural Quantum Fusion: The Future of AI",
      description: "Revolutionary AI system combining quantum computing with neural networks for unprecedented processing power.",
      category: "ai-breakthroughs",
      readTime: "15 min",
      views: "12.5K",
      rating: 4.9,
      featured: true,
      tags: ["Quantum AI", "Neural Networks", "Breakthrough"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Autonomous Business Process Optimization",
      description: "Self-evolving AI systems that continuously optimize business operations without human intervention.",
      category: "automation",
      readTime: "12 min",
      views: "8.7K",
      rating: 4.8,
      featured: true,
      tags: ["Automation", "Business Intelligence", "AI"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Quantum Error Correction Breakthrough",
      description: "Advanced error correction algorithms enabling stable quantum computing at scale.",
      category: "quantum-computing",
      readTime: "18 min",
      views: "15.2K",
      rating: 4.9,
      featured: true,
      tags: ["Quantum Computing", "Error Correction", "Breakthrough"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Revolutionary Technology Showcase 2025",
      description: "Discover the most groundbreaking technologies that will reshape industries in 2025.",
      category: "technology",
      readTime: "20 min",
      views: "9.3K",
      rating: 4.7,
      featured: false,
      tags: ["Technology", "Innovation", "2025"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Enterprise AI Transformation Success Story",
      description: "How Fortune 500 companies achieved 2,500% ROI with our AI solutions.",
      category: "case-studies",
      readTime: "14 min",
      views: "6.8K",
      rating: 4.6,
      featured: false,
      tags: ["Case Study", "ROI", "Enterprise"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Edge Quantum Computing Solutions",
      description: "Distributed quantum computing infrastructure for real-time processing at the edge.",
      category: "quantum-computing",
      readTime: "16 min",
      views: "11.4K",
      rating: 4.8,
      featured: false,
      tags: ["Edge Computing", "Quantum", "Infrastructure"],
      image: "/api/placeholder/300/200"
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;
      
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }
      
      if (searchTerm) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
      
      setFilteredContent(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Search className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-semibold">Interactive Content Discovery</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Content 2025
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, quantum computing solutions, and automation technologies. Find exactly what you need with our intelligent discovery system.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for AI breakthroughs, quantum solutions, automation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              {filteredContent.length} results found
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Real-time content updates
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
            <p className="text-gray-300 mt-4">Discovering amazing content...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredContent.map((content) => (
              <div 
                key={content.id} 
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 ${
                  content.featured 
                    ? 'border-purple-400/50 hover:border-purple-400/80' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {content.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-center font-semibold">
                    ⭐ Featured Content
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                      {categories.find(cat => cat.id === content.category)?.name}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">{content.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.views}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/content/${content.id}`}
                    className="group/link w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Explore Content</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredContent.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or category filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="text-center">
          <Link 
            to="/content-library"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Search className="w-5 h-5 mr-2" />
            <span>Browse Full Content Library</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;